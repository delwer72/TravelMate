// scripts/migrateImagesToImgBB.ts
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { connectDB } from '../src/config/db.js';
import { packagesCollection } from '../src/models/Package.js';
import { INITIAL_PACKAGES } from '../src/config/seedData.js';

const API_KEY = process.env.IMAGEBB_API || process.env.IMGBB_API_KEY || '693060c0785d3340f55d5de8246547bf';

async function uploadUrlToImgBB(imageUrl: string, title?: string): Promise<string> {
  // If already an ImgBB url, skip
  if (imageUrl.includes('ibb.co') || imageUrl.includes('imgbb.com')) {
    return imageUrl;
  }

  console.log(`Uploading to ImgBB: ${imageUrl.substring(0, 60)}...`);
  const formData = new FormData();
  formData.append('image', imageUrl);
  if (title) {
    formData.append('name', title.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 30));
  }

  const res = await fetch(`https://api.imgbb.com/1/upload?key=${API_KEY}`, {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    console.error('Failed to upload image:', data?.error || data);
    return imageUrl; // Fallback to original if upload fails
  }

  const resultUrl = data.data.display_url || data.data.url;
  console.log(`  -> ImgBB URL: ${resultUrl}`);
  return resultUrl;
}

async function main() {
  console.log('--- Starting ImgBB Image Migration ---');
  console.log(`Using ImgBB API Key: ${API_KEY.substring(0, 6)}...`);

  // 1. Gather all unique image URLs from INITIAL_PACKAGES
  const urlMap = new Map<string, string>();

  for (const pkg of INITIAL_PACKAGES) {
    if (pkg.coverImage && !urlMap.has(pkg.coverImage)) {
      const uploaded = await uploadUrlToImgBB(pkg.coverImage, `${pkg.slug}_cover`);
      urlMap.set(pkg.coverImage, uploaded);
      // Brief pause to respect API rate limits
      await new Promise(r => setTimeout(r, 600));
    }
    if (pkg.images && Array.isArray(pkg.images)) {
      for (let i = 0; i < pkg.images.length; i++) {
        const img = pkg.images[i];
        if (img && !urlMap.has(img)) {
          const uploaded = await uploadUrlToImgBB(img, `${pkg.slug}_gallery_${i + 1}`);
          urlMap.set(img, uploaded);
          await new Promise(r => setTimeout(r, 600));
        }
      }
    }
  }

  console.log(`\nSuccessfully mapped ${urlMap.size} images to ImgBB!`);

  // 2. Update seedData.ts file
  const seedDataPath = path.resolve(process.cwd(), 'src/config/seedData.ts');
  let seedContent = fs.readFileSync(seedDataPath, 'utf8');

  for (const [origUrl, imgbbUrl] of urlMap.entries()) {
    seedContent = seedContent.split(origUrl).join(imgbbUrl);
  }

  fs.writeFileSync(seedDataPath, seedContent, 'utf8');
  console.log('✓ Updated src/config/seedData.ts with new ImgBB URLs');

  // 3. Update MongoDB database if connected
  try {
    await connectDB();
    const col = packagesCollection();
    const allDbPackages = await col.find({}).toArray();

    let updatedCount = 0;
    for (const doc of allDbPackages) {
      let changed = false;
      let newCover = doc.coverImage;
      let newImages = doc.images ? [...doc.images] : [];

      if (doc.coverImage && urlMap.has(doc.coverImage)) {
        newCover = urlMap.get(doc.coverImage);
        changed = true;
      }

      if (doc.images && Array.isArray(doc.images)) {
        newImages = doc.images.map((img: string) => urlMap.get(img) || img);
        if (JSON.stringify(newImages) !== JSON.stringify(doc.images)) {
          changed = true;
        }
      }

      if (changed) {
        await col.updateOne(
          { _id: doc._id },
          { $set: { coverImage: newCover, images: newImages } }
        );
        updatedCount++;
      }
    }
    console.log(`✓ Updated ${updatedCount} packages in MongoDB with ImgBB URLs`);
  } catch (dbErr) {
    console.warn('Could not update MongoDB directly (might not be online or connection issue):', dbErr);
  }

  console.log('--- Migration Completed Successfully ---');
  process.exit(0);
}

main().catch(err => {
  console.error('Fatal error in migration:', err);
  process.exit(1);
});
