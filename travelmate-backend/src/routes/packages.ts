// src/routes/packages.ts

import { Router } from "express";

import {
  getPackages,
  getSinglePackage,
  createNewPackage,
  updateExistingPackage,
  deleteExistingPackage,
} from "../controllers/packageController.js";

import { protect, authorize } from "../middleware/auth.js";

const router = Router();

// Public routes (anyone can browse)
router.get("/", getPackages);

router.get("/:idOrSlug", getSinglePackage);

// Admin-only protected routes
router.post("/", protect, authorize("admin"), createNewPackage);

router.put("/:id", protect, authorize("admin"), updateExistingPackage);

router.delete("/:id", protect, authorize("admin"), deleteExistingPackage);

export default router;