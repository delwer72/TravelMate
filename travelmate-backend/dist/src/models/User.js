// src/models/User.ts
import { ObjectId } from 'mongodb';
import bcrypt from 'bcryptjs';
import { getDb } from '../config/db';
export const usersCollection = () => getDb().collection('users');
export const findUserByEmail = async (email) => {
    const cleanEmail = email.trim().toLowerCase();
    let user = await usersCollection().findOne({ email: cleanEmail });
    if (!user) {
        // Check better-auth 'user' collection fallback
        const betterUser = await getDb().collection('user').findOne({ email: cleanEmail });
        if (betterUser) {
            user = {
                _id: betterUser._id,
                name: betterUser.name || 'User',
                email: betterUser.email,
                password: betterUser.password || '',
                role: betterUser.role || 'user',
                profileImage: betterUser.image,
                createdAt: betterUser.createdAt || new Date(),
            };
        }
    }
    return user;
};
// Looks up by id and strips the password hash via projection.
export const findUserById = async (id) => {
    if (!ObjectId.isValid(id))
        return null;
    const user = (await usersCollection().findOne({ _id: new ObjectId(id) }, { projection: { password: 0 } }));
    if (user)
        return user;
    const betterUser = await getDb().collection('user').findOne({ _id: new ObjectId(id) });
    if (betterUser) {
        return {
            _id: betterUser._id,
            name: betterUser.name || 'User',
            email: betterUser.email,
            role: betterUser.role || 'user',
            profileImage: betterUser.image,
            createdAt: betterUser.createdAt || new Date(),
        };
    }
    return null;
};
export const createUser = async (data) => {
    const cleanEmail = data.email.trim().toLowerCase();
    const hashed = await bcrypt.hash(data.password, 10);
    const now = new Date();
    const doc = {
        name: data.name.trim(),
        email: cleanEmail,
        password: hashed,
        role: data.role || 'user',
        savedPackages: [],
        createdAt: now,
    };
    const result = await usersCollection().insertOne(doc);
    // Also sync to better-auth 'user' collection so it's visible in both collections
    try {
        await getDb().collection('user').updateOne({ email: cleanEmail }, {
            $set: {
                name: data.name.trim(),
                email: cleanEmail,
                emailVerified: false,
                role: data.role || 'user',
                plan: data.role === 'guest' ? 'guest_free' : 'user_free',
                createdAt: now,
                updatedAt: now,
            },
        }, { upsert: true });
    }
    catch (syncErr) {
        console.error('Failed to sync to better-auth user collection:', syncErr);
    }
    return { ...doc, _id: result.insertedId };
};
export const comparePassword = (candidate, hash) => {
    if (!hash)
        return Promise.resolve(false);
    return bcrypt.compare(candidate, hash);
};
export const getAllUsers = async () => {
    return (await usersCollection()
        .find({}, { projection: { password: 0 } })
        .sort({ createdAt: -1 })
        .toArray());
};
export const updateUserById = async (id, updates) => {
    if (!ObjectId.isValid(id))
        return null;
    await usersCollection().updateOne({ _id: new ObjectId(id) }, { $set: updates });
    return findUserById(id);
};
export const toggleSavedPackage = async (userId, packageId) => {
    if (!ObjectId.isValid(userId))
        return [];
    const user = await usersCollection().findOne({ _id: new ObjectId(userId) });
    if (!user)
        return [];
    const saved = user.savedPackages || [];
    const exists = saved.includes(packageId);
    const updatedSaved = exists
        ? saved.filter((id) => id !== packageId)
        : [...saved, packageId];
    await usersCollection().updateOne({ _id: new ObjectId(userId) }, { $set: { savedPackages: updatedSaved } });
    return updatedSaved;
};
