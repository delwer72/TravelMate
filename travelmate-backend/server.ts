import "dotenv/config";

import express, {
  Request,
  Response,
  NextFunction,
} from "express";

import cors from "cors";

import { connectDB } from "./src/config/db.js";

import authRoutes from "./src/routes/auth.js";
import packageRoutes from "./src/routes/packages.js";
import bookingRoutes from "./src/routes/bookings.js";
import dashboardRoutes from "./src/routes/dashboard.js";
import userRoutes from "./src/routes/users.js";

const app = express();

// Middleware
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());

// Health check
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "TravelMate API Server is Live!",
    version: "1.0.0",
  });
});

app.get("/health", (req: Request, res: Response) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
  });
});

// Database connection
app.use(async (req: Request, res: Response, next: NextFunction) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("Database connection error:", error);
    next(error);
  }
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/users", userRoutes);

// 404
app.use((req: Request, res: Response) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// Error handler
app.use(
  (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.error("Unhandled error:", err);

    res.status(500).json({
      message: "Server error",
      error:
        process.env.NODE_ENV === "development"
          ? err.message
          : undefined,
    });
  }
);

// Local development only
if (!process.env.VERCEL) {
  const port = process.env.PORT || 8000;

  connectDB()
    .then(() => {
      app.listen(port, () => {
        console.log(
          `Server is running on http://localhost:${port}`
        );
      });
    })
    .catch((error) => {
      console.error("Failed to connect to MongoDB:", error);
      process.exit(1);
    });
}

export default app;