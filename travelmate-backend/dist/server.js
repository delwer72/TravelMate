import "dotenv/config";
import express from 'express';
import cors from "cors";
import { connectDB } from "./src/config/db";
import authRoutes from "./src/routes/auth";
import packageRoutes from "./src/routes/packages";
import bookingRoutes from "./src/routes/bookings";
import dashboardRoutes from "./src/routes/dashboard";
import userRoutes from "./src/routes/users";
const app = express();
// Middleware
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 8000;
// Health check
app.get('/', (req, res) => {
    res.json({ message: 'TravelMate API Server is Live!', version: '1.0.0' });
});
app.get('/health', (req, res) => {
    res.json({ status: 'ok', uptime: process.uptime() });
});
// Ensure DB connection for every request in serverless/local environments
app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    }
    catch (err) {
        next(err);
    }
});
// API routes
app.use('/api/auth', authRoutes);
app.use('/api/packages', packageRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/users', userRoutes);
// 404 handler (no path arg — Express 5 / path-to-regexp v8 safe)
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});
// Centralized error handler
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ message: 'Server error' });
});
// Connect to MongoDB & start listening in local/standalone mode
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    connectDB().then(() => {
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    });
}
export default app;
