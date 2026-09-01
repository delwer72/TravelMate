// src/routes/auth.ts
import { Router } from 'express';
import { register, login, getMe } from '../controllers/authController';
import { protect } from '../middleware/auth';
const router = Router();
// Public routes
router.post('/register', register);
router.post('/login', login);
// Protected route
router.get('/me', protect, getMe);
export default router;
