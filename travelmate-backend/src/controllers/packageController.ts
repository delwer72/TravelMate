// src/controllers/packageController.ts
import { Request, Response } from 'express';
import {
  getAllPackages,
  getPackageById,
  getPackageBySlug,
  createPackage,
  updatePackage,
  deletePackage,
  packagesCollection,
} from '../models/Package';
import { INITIAL_PACKAGES } from '../config/seedData';

export const getPackages = async (req: Request, res: Response): Promise<void> => {
  try {
    const { category, destination, featured, maxPrice, search, sort, page, limit } = req.query;
    
    // Auto-seed if database is empty
    const count = await packagesCollection().countDocuments();
    if (count === 0) {
      await packagesCollection().insertMany(
        INITIAL_PACKAGES.map((pkg: any) => ({
          ...pkg,
          ratingsAverage: pkg.ratingsAverage ?? 4.8,
          ratingsQuantity: pkg.ratingsQuantity ?? 10,
          createdAt: new Date(),
        }))
      );
    }

    const result = await getAllPackages({
      category: category as string,
      destination: destination as string,
      featured: featured === 'true' ? true : featured === 'false' ? false : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      search: search as string,
      sort: sort as string,
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 100,
    });

    res.json({
      success: true,
      data: result.packages,
      total: result.total,
      page: Number(page) || 1,
    });
  } catch (error) {
    console.error('Error fetching packages:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch packages' });
  }
};

export const getSinglePackage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { idOrSlug } = req.params;
    const target = Array.isArray(idOrSlug) ? idOrSlug[0] : idOrSlug;
    let pkg = await getPackageById(target);
    if (!pkg) {
      pkg = await getPackageBySlug(target);
    }

    if (!pkg) {
      // Fallback check in INITIAL_PACKAGES
      const found = INITIAL_PACKAGES.find(
        (p: any) => p.slug === target || p.title.toLowerCase() === target.toLowerCase()
      );
      if (found) {
        res.json({ success: true, data: { ...found, _id: target } });
        return;
      }
      res.status(404).json({ success: false, message: 'Package not found' });
      return;
    }

    res.json({ success: true, data: pkg });
  } catch (error) {
    console.error('Error fetching single package:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch package' });
  }
};

export const createNewPackage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, destination, country, category, description, price, durationDays, maxGroupSize, coverImage } = req.body;
    if (!title || !destination || !price) {
      res.status(400).json({ success: false, message: 'Title, destination, and price are required' });
      return;
    }

    const newPkg = await createPackage({
      title,
      slug: req.body.slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      destination,
      country: country || destination,
      category: category || 'Adventure',
      description: description || '',
      price: Number(price),
      discountPrice: req.body.discountPrice ? Number(req.body.discountPrice) : undefined,
      durationDays: Number(durationDays) || 5,
      maxGroupSize: Number(maxGroupSize) || 10,
      ratingsAverage: 5.0,
      ratingsQuantity: 1,
      images: req.body.images || [coverImage || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'],
      coverImage: coverImage || req.body.images?.[0] || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      featured: req.body.featured || false,
      highlights: req.body.highlights || ['Guided Tour', 'Scenic Views'],
      included: req.body.included || ['Hotel', 'Breakfast'],
      excluded: req.body.excluded || ['International flights'],
      itinerary: req.body.itinerary || [{ day: 1, title: 'Arrival', description: 'Check-in and welcome dinner.' }],
      startLocation: req.body.startLocation || destination,
      departureDates: req.body.departureDates || ['2026-10-01'],
    });

    res.status(201).json({ success: true, data: newPkg });
  } catch (error) {
    console.error('Error creating package:', error);
    res.status(500).json({ success: false, message: 'Failed to create package' });
  }
};

export const updateExistingPackage = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const updated = await updatePackage(id, req.body);
    if (!updated) {
      res.status(404).json({ success: false, message: 'Package not found' });
      return;
    }
    res.json({ success: true, data: updated });
  } catch (error) {
    console.error('Error updating package:', error);
    res.status(500).json({ success: false, message: 'Failed to update package' });
  }
};

export const deleteExistingPackage = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const deleted = await deletePackage(id);
    if (!deleted) {
      res.status(404).json({ success: false, message: 'Package not found' });
      return;
    }
    res.json({ success: true, message: 'Package deleted successfully' });
  } catch (error) {
    console.error('Error deleting package:', error);
    res.status(500).json({ success: false, message: 'Failed to delete package' });
  }
};
