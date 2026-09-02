// src/models/Package.ts

import { Collection, ObjectId, WithId } from "mongodb";
import { getDb } from "../config/db.js";

export interface ITourItineraryDay {
  day: number;
  title: string;
  description: string;
  activities?: string[];
}

export interface IPackage {
  _id?: ObjectId;
  title: string;
  slug: string;
  destination: string;
  country: string;
  category:
    | "Adventure"
    | "Beach"
    | "Cultural"
    | "Wildlife"
    | "Luxury"
    | "City"
    | "Mountain";
  description: string;
  price: number;
  discountPrice?: number;
  durationDays: number;
  maxGroupSize: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  images: string[];
  coverImage: string;
  featured?: boolean;
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: ITourItineraryDay[];
  startLocation: string;
  departureDates: string[];
  createdAt: Date;
}

export const packagesCollection = (): Collection<IPackage> =>
  getDb().collection<IPackage>("packages");

export const getAllPackages = async (
  filters: {
    category?: string;
    destination?: string;
    featured?: boolean;
    maxPrice?: number;
    search?: string;
    sort?: string;
    limit?: number;
    page?: number;
  } = {}
): Promise<{ packages: WithId<IPackage>[]; total: number }> => {
  const query: any = {};

  if (filters.category && filters.category !== "All") {
    query.category = filters.category;
  }

  if (filters.destination) {
    query.$or = [
      {
        destination: {
          $regex: filters.destination,
          $options: "i",
        },
      },
      {
        country: {
          $regex: filters.destination,
          $options: "i",
        },
      },
    ];
  }

  if (filters.search) {
    query.$or = [
      {
        title: {
          $regex: filters.search,
          $options: "i",
        },
      },
      {
        destination: {
          $regex: filters.search,
          $options: "i",
        },
      },
      {
        description: {
          $regex: filters.search,
          $options: "i",
        },
      },
    ];
  }

  if (filters.featured !== undefined) {
    query.featured = filters.featured;
  }

  if (filters.maxPrice) {
    query.price = {
      $lte: Number(filters.maxPrice),
    };
  }

  const page = Math.max(1, filters.page || 1);
  const limit = Math.min(200, filters.limit || 100);
  const skip = (page - 1) * limit;

  let sortObj: any = { createdAt: -1 };

  if (filters.sort === "price-asc") {
    sortObj = { price: 1 };
  } else if (filters.sort === "price-desc") {
    sortObj = { price: -1 };
  } else if (filters.sort === "rating") {
    sortObj = { ratingsAverage: -1 };
  } else if (filters.sort === "popular") {
    sortObj = { ratingsQuantity: -1 };
  }

  const total = await packagesCollection().countDocuments(query);

  const packages = await packagesCollection()
    .find(query)
    .sort(sortObj)
    .skip(skip)
    .limit(limit)
    .toArray();

  return {
    packages,
    total,
  };
};

export const getPackageById = (
  id: string
): Promise<WithId<IPackage> | null> => {
  if (!ObjectId.isValid(id)) {
    return Promise.resolve(null);
  }

  return packagesCollection().findOne({
    _id: new ObjectId(id),
  });
};

export const getPackageBySlug = (
  slug: string
): Promise<WithId<IPackage> | null> => {
  return packagesCollection().findOne({ slug });
};

export const createPackage = async (
  data: Omit<IPackage, "_id" | "createdAt">
): Promise<WithId<IPackage>> => {
  const doc: IPackage = {
    ...data,
    slug:
      data.slug ||
      data.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    ratingsAverage: data.ratingsAverage ?? 4.8,
    ratingsQuantity: data.ratingsQuantity ?? 1,
    createdAt: new Date(),
  };

  const result = await packagesCollection().insertOne(doc);

  return {
    ...doc,
    _id: result.insertedId,
  };
};

export const updatePackage = async (
  id: string,
  updates: Partial<IPackage>
): Promise<WithId<IPackage> | null> => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  await packagesCollection().updateOne(
    {
      _id: new ObjectId(id),
    },
    {
      $set: updates,
    }
  );

  return getPackageById(id);
};

export const deletePackage = async (
  id: string
): Promise<boolean> => {
  if (!ObjectId.isValid(id)) {
    return false;
  }

  const result = await packagesCollection().deleteOne({
    _id: new ObjectId(id),
  });

  return result.deletedCount > 0;
};