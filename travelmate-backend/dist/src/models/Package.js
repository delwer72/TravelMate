// src/models/Package.ts
import { ObjectId } from 'mongodb';
import { getDb } from '../config/db';
export const packagesCollection = () => getDb().collection('packages');
export const getAllPackages = async (filters = {}) => {
    const query = {};
    if (filters.category && filters.category !== 'All') {
        query.category = filters.category;
    }
    if (filters.destination) {
        query.$or = [
            { destination: { $regex: filters.destination, $options: 'i' } },
            { country: { $regex: filters.destination, $options: 'i' } },
        ];
    }
    if (filters.search) {
        query.$or = [
            { title: { $regex: filters.search, $options: 'i' } },
            { destination: { $regex: filters.search, $options: 'i' } },
            { description: { $regex: filters.search, $options: 'i' } },
        ];
    }
    if (filters.featured !== undefined) {
        query.featured = filters.featured;
    }
    if (filters.maxPrice) {
        query.price = { $lte: Number(filters.maxPrice) };
    }
    const page = Math.max(1, filters.page || 1);
    const limit = Math.min(200, filters.limit || 100);
    const skip = (page - 1) * limit;
    let sortObj = { createdAt: -1 };
    if (filters.sort === 'price-asc')
        sortObj = { price: 1 };
    else if (filters.sort === 'price-desc')
        sortObj = { price: -1 };
    else if (filters.sort === 'rating')
        sortObj = { ratingsAverage: -1 };
    else if (filters.sort === 'popular')
        sortObj = { ratingsQuantity: -1 };
    const total = await packagesCollection().countDocuments(query);
    const packages = await packagesCollection()
        .find(query)
        .sort(sortObj)
        .skip(skip)
        .limit(limit)
        .toArray();
    return { packages, total };
};
export const getPackageById = (id) => {
    if (!ObjectId.isValid(id))
        return Promise.resolve(null);
    return packagesCollection().findOne({ _id: new ObjectId(id) });
};
export const getPackageBySlug = (slug) => {
    return packagesCollection().findOne({ slug });
};
export const createPackage = async (data) => {
    const doc = {
        ...data,
        slug: data.slug || data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        ratingsAverage: data.ratingsAverage ?? 4.8,
        ratingsQuantity: data.ratingsQuantity ?? 1,
        createdAt: new Date(),
    };
    const result = await packagesCollection().insertOne(doc);
    return { ...doc, _id: result.insertedId };
};
export const updatePackage = async (id, updates) => {
    if (!ObjectId.isValid(id))
        return null;
    await packagesCollection().updateOne({ _id: new ObjectId(id) }, { $set: updates });
    return getPackageById(id);
};
export const deletePackage = async (id) => {
    if (!ObjectId.isValid(id))
        return false;
    const result = await packagesCollection().deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0;
};
