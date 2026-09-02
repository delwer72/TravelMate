// src/middleware/auth.ts
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { findUserById } from "../models/User.js";
dotenv.config({ path: ".env" });
const JWT_SECRET = process.env.JWT_SECRET || "defaultsecret";
/**
 * Route guard: requires a valid Authorization: Bearer <token> header.
 * On success it loads the user and attaches it to req.user.
 */
export const protect = async (req, res, next) => {
    try {
        const header = req.headers.authorization;
        if (!header || !header.startsWith("Bearer ")) {
            res.status(401).json({
                message: "Not authorized, no token provided",
            });
            return;
        }
        const token = header.split(" ")[1];
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await findUserById(decoded.id);
        if (!user) {
            res.status(401).json({
                message: "Not authorized, user not found",
            });
            return;
        }
        req.user = user;
        next();
    }
    catch (error) {
        res.status(401).json({
            message: "Not authorized, invalid or expired token",
        });
    }
};
/**
 * Optional route guard: if a valid token is provided,
 * attaches req.user. Invalid/missing token is ignored.
 */
export const optionalProtect = async (req, res, next) => {
    try {
        const header = req.headers.authorization;
        if (header && header.startsWith("Bearer ")) {
            const token = header.split(" ")[1];
            const decoded = jwt.verify(token, JWT_SECRET);
            const user = await findUserById(decoded.id);
            if (user) {
                req.user = user;
            }
        }
    }
    catch (error) {
        // Ignore invalid tokens for optional routes
    }
    next();
};
/**
 * Role-Based Access Control (RBAC) Guard.
 */
export const authorize = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            res.status(401).json({
                message: "Not authenticated",
            });
            return;
        }
        const userRole = req.user.role || "user";
        if (!allowedRoles.includes(userRole)) {
            res.status(403).json({
                success: false,
                message: `Forbidden: Access denied for role '${userRole}'. Required role: ${allowedRoles.join(" or ")}.`,
            });
            return;
        }
        next();
    };
};
