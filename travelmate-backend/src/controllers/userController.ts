// src/controllers/userController.ts

import { Request, Response } from "express";

import {
  getAllUsers,
  findUserById,
  updateUserById,
  toggleSavedPackage,
} from "../models/User.js";

export const listAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await getAllUsers();
    res.json({ success: true, data: users });
  } catch (error) {
    console.error('Error listing users:', error);
    res.status(500).json({ success: false, message: 'Failed to list users' });
  }
};

export const updateProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = (req as any).user;
    if (!user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const { name, phone, profileImage, preferences } = req.body;
    const updated = await updateUserById(user._id.toString(), {
      name,
      phone,
      profileImage,
      preferences,
    });

    res.json({ success: true, data: updated });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ success: false, message: 'Failed to update profile' });
  }
};

export const handleToggleWishlist = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = (req as any).user;
    if (!user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const { packageId } = req.body;
    if (!packageId) {
      res.status(400).json({ success: false, message: 'packageId is required' });
      return;
    }

    const saved = await toggleSavedPackage(user._id.toString(), packageId);
    res.json({ success: true, data: saved });
  } catch (error) {
    console.error('Error toggling wishlist:', error);
    res.status(500).json({ success: false, message: 'Failed to update wishlist' });
  }
};
