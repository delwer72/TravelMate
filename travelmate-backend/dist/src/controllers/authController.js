// src/controllers/authController.ts
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { findUserByEmail, createUser, comparePassword, } from "../models/User.js";
dotenv.config({ path: ".env" });
const JWT_SECRET = process.env.JWT_SECRET || "defaultsecret";
const JWT_EXPIRES_IN = "7d";
export const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password) {
            res.status(400).json({
                message: "All fields are required",
            });
            return;
        }
        const cleanEmail = email.trim().toLowerCase();
        const cleanName = name.trim();
        const existing = await findUserByEmail(cleanEmail);
        if (existing) {
            res.status(409).json({
                message: "Email already in use",
            });
            return;
        }
        const assignedRole = role === "admin"
            ? "admin"
            : role === "guest"
                ? "guest"
                : "user";
        const user = await createUser({
            name: cleanName,
            email: cleanEmail,
            password,
            role: assignedRole,
        });
        const token = jwt.sign({
            id: user._id.toString(),
            role: user.role || "user",
        }, JWT_SECRET, {
            expiresIn: JWT_EXPIRES_IN,
        });
        res.status(201).json({
            token,
            user: {
                id: user._id.toString(),
                name: user.name,
                email: user.email,
                role: user.role || "user",
            },
        });
    }
    catch (error) {
        if (error?.code === 11000) {
            res.status(409).json({
                message: "Email already in use",
            });
            return;
        }
        console.error("Register error:", error);
        res.status(500).json({
            message: "Server error",
        });
    }
};
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({
                message: "Email and password required",
            });
            return;
        }
        const cleanEmail = email.trim().toLowerCase();
        const user = await findUserByEmail(cleanEmail);
        if (!user) {
            res.status(401).json({
                message: "Invalid credentials",
            });
            return;
        }
        if (!user.password) {
            res.status(401).json({
                message: "Invalid credentials",
            });
            return;
        }
        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            res.status(401).json({
                message: "Invalid credentials",
            });
            return;
        }
        const token = jwt.sign({
            id: user._id.toString(),
            role: user.role || "user",
        }, JWT_SECRET, {
            expiresIn: JWT_EXPIRES_IN,
        });
        res.json({
            token,
            user: {
                id: user._id.toString(),
                name: user.name,
                email: user.email,
                role: user.role || "user",
            },
        });
    }
    catch (error) {
        console.error("Login error:", error);
        res.status(500).json({
            message: "Server error",
        });
    }
};
export const getMe = async (req, res) => {
    const user = req.user;
    if (!user) {
        res.status(401).json({
            message: "Not authenticated",
        });
        return;
    }
    res.json({
        id: user._id?.toString(),
        name: user.name,
        email: user.email,
        role: user.role || "user",
        profileImage: user.profileImage,
    });
};
