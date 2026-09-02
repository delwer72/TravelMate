// src/routes/dashboard.ts
import { Router } from "express";
import { getAdminDashboardStats, getUserDashboardStats, } from "../controllers/dashboardController.js";
import { protect, authorize } from "../middleware/auth.js";
const router = Router();
// Admin-only dashboard analytics
router.get("/admin", protect, authorize("admin"), getAdminDashboardStats);
// User/Traveler dashboard stats
router.get("/user", protect, authorize("user", "admin"), getUserDashboardStats);
export default router;
