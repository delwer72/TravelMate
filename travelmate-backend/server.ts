import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

import { connectDB } from "./src/config/db.js";
import authRoutes from "./src/routes/auth.js";
import packageRoutes from "./src/routes/packages.js";
import bookingRoutes from "./src/routes/bookings.js";
import dashboardRoutes from "./src/routes/dashboard.js";
import userRoutes from "./src/routes/users.js";

const app = express();

// ===============================
// Middleware
// ===============================

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
      "https://travelmate-client-kappa.vercel.app"
    ],
    credentials: true
  })
);

app.use(express.json());

// ===============================
// Health Check
// ===============================

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "TravelMate API Server is Live!",
    version: "1.0.0"
  });
});

app.get("/health", (req: Request, res: Response) => {
  res.json({
    status: "ok",
    uptime: process.uptime()
  });
});

// ===============================
// Database
// ===============================

app.use(async (req: Request, res: Response, next: NextFunction) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    next(error);
  }
});

// ===============================
// API Routes
// ===============================

app.use("/api/auth", authRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/users", userRoutes);

// ===============================
// 404 Handler
// ===============================

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

// ===============================
// Error Handler
// ===============================

app.use(
  (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.error("Unhandled error:", err);

    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
);

// ===============================
// Export for Vercel
// ===============================

export default app;

// ===============================
// Local Development Server
// ===============================

if (process.env.VERCEL !== "1") {
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log(`🚀 TravelMate API running on http://localhost:${PORT}`);
  });
}