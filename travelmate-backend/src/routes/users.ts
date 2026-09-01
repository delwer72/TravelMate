// src/routes/users.ts
import { Router } from 'express';
import {
  listAllUsers,
  updateProfile,
  handleToggleWishlist,
} from '../controllers/userController';
import { protect, authorize } from '../middleware/auth';

const router = Router();

// Admin-only: list all accounts
router.get('/', protect, authorize('admin'), listAllUsers);

// Authenticated user/admin profile updates
router.put('/profile', protect, authorize('user', 'admin'), updateProfile);
router.post('/wishlist/toggle', protect, authorize('user', 'admin'), handleToggleWishlist);

export default router;
