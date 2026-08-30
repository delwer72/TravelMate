"use client";

import React, { useState } from 'react';
import { TourPackage, createPackage } from '@/lib/api';
import { X, Plus, PackagePlus } from 'lucide-react';

interface PackageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (pkg: TourPackage) => void;
}

export default function PackageModal({ isOpen, onClose, onSuccess }: PackageModalProps) {
  const [title, setTitle] = useState('');
  const [destination, setDestination] = useState('');
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState<'Adventure' | 'Beach' | 'Cultural' | 'Wildlife' | 'Luxury' | 'City' | 'Mountain'>('Adventure');
  const [price, setPrice] = useState(899);
  const [discountPrice, setDiscountPrice] = useState(799);
  const [durationDays, setDurationDays] = useState(6);
  const [maxGroupSize, setMaxGroupSize] = useState(12);
  const [coverImage, setCoverImage] = useState('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80');
  const [description, setDescription] = useState('');
  const [highlightsStr, setHighlightsStr] = useState('Scenic mountain trekking, Authentic local dining, Guided historic sights');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const highlights = highlightsStr.split(',').map(s => s.trim()).filter(Boolean);
      const newPkg = await createPackage({
        title,
        destination,
        country: country || destination,
        category,
        price: Number(price),
        discountPrice: discountPrice ? Number(discountPrice) : undefined,
        durationDays: Number(durationDays),
        maxGroupSize: Number(maxGroupSize),
        coverImage,
        images: [coverImage],
        description,
        highlights,
        featured: true,
        departureDates: ['2026-10-01', '2026-10-20', '2026-11-10'],
      });

      onSuccess(newPkg);
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="p-6 pb-4 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
              <PackagePlus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Create New Tour Package</h3>
              <p className="text-xs text-zinc-400">Add a new destination and package for travelers</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-800/60 hover:bg-zinc-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1">Package Title *</label>
            <input
              type="text"
              required
              placeholder="e.g. Amalfi Coast & Capri Private Yacht Cruise"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-orange-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">Destination & Region *</label>
              <input
                type="text"
                required
                placeholder="e.g. Amalfi & Positano"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">Country *</label>
              <input
                type="text"
                required
                placeholder="e.g. Italy"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">Category</label>
              <select
                value={category}
                onChange={(e: any) => setCategory(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-orange-500"
              >
                <option value="Adventure">Adventure</option>
                <option value="Beach">Beach</option>
                <option value="Cultural">Cultural</option>
                <option value="Wildlife">Wildlife</option>
                <option value="Luxury">Luxury</option>
                <option value="City">City</option>
                <option value="Mountain">Mountain</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">Base Price ($) *</label>
              <input
                type="number"
                required
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">Discount Price ($)</label>
              <input
                type="number"
                value={discountPrice}
                onChange={(e) => setDiscountPrice(Number(e.target.value))}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">Duration (Days)</label>
              <input
                type="number"
                value={durationDays}
                onChange={(e) => setDurationDays(Number(e.target.value))}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">Max Group Size</label>
              <input
                type="number"
                value={maxGroupSize}
                onChange={(e) => setMaxGroupSize(Number(e.target.value))}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1">Cover Image URL</label>
            <input
              type="url"
              required
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1">Highlights (comma-separated)</label>
            <input
              type="text"
              value={highlightsStr}
              onChange={(e) => setHighlightsStr(e.target.value)}
              placeholder="Highlight 1, Highlight 2, Highlight 3"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1">Package Description</label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the adventure, places visited, and unique moments..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-orange-500"
            />
          </div>

          <div className="pt-3 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-750 text-zinc-300 text-sm font-medium transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-semibold shadow-lg shadow-orange-500/20 transition flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              {isSubmitting ? 'Saving...' : 'Publish Package'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
