// src/lib/imgbb.ts
// ImgBB Image Upload Service

const IMGBB_API_KEY =
  process.env.NEXT_PUBLIC_IMAGEBB_API ||
  process.env.NEXT_PUBLIC_IMGBB_API_KEY ||
  process.env.IMAGEBB_API ||
  '693060c0785d3340f55d5de8246547bf';

export interface ImgBBUploadResponse {
  url:         string;
  display_url: string;
  thumb_url?:  string;
  delete_url?: string;
  id?:         string;
  title?:      string;
}

/**
 * Upload an image (File, Blob, base64 string, or remote image URL) to ImgBB
 */
export async function uploadImageToImgBB(
  image: File | Blob | string,
  name?: string
): Promise<ImgBBUploadResponse> {
  if (!IMGBB_API_KEY) {
    throw new Error('ImgBB API key is missing. Set NEXT_PUBLIC_IMAGEBB_API in .env');
  }

  const formData = new FormData();

  if (typeof image === 'string') {
    // If it's a base64 string or remote URL
    formData.append('image', image);
  } else {
    // File or Blob
    formData.append('image', image, name || (image instanceof File ? image.name : 'upload.jpg'));
  }

  if (name) {
    formData.append('name', name);
  }

  const response = await fetch(
    `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
    {
      method: 'POST',
      body: formData,
    }
  );

  const data = await response.json();

  if (!response.ok || !data.success) {
    const errorMsg = data?.error?.message || 'Failed to upload image to ImgBB';
    console.error('ImgBB Upload Error:', data);
    throw new Error(errorMsg);
  }

  return {
    url:         data.data.url,
    display_url: data.data.display_url || data.data.url,
    thumb_url:   data.data.thumb?.url,
    delete_url:  data.data.delete_url,
    id:          data.data.id,
    title:       data.data.title,
  };
}

/**
 * Convenience helper to upload and return the direct hosted URL string
 */
export async function uploadToImgBB(
  image: File | Blob | string,
  name?: string
): Promise<string> {
  const res = await uploadImageToImgBB(image, name);
  return res.display_url || res.url;
}
