"use client";

import React, { useState, useEffect } from 'react';
import { TourPackage, submitBooking } from '@/lib/api';
import { useAuth } from '@/lib/auth-context';
import { 
  Calendar, 
  Users, 
  MapPin, 
  X, 
  CheckCircle, 
  ShieldCheck, 
  CreditCard,
  Sparkles,
  Loader2
} from 'lucide-react';

interface BookingModalProps {
  pkg: TourPackage | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function BookingModal({ pkg, isOpen, onClose, onSuccess }: BookingModalProps) {
  const { user } = useAuth();
  const [guests, setGuests] = useState<number>(2);
  const [selectedDate, setSelectedDate] = useState<string>('2026-10-01');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [requests, setRequests] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // Auto-fill user details and set date when modal opens or package changes
  useEffect(() => {
    if (isOpen && pkg) {
      if (user) {
        setName(user.name || '');
        setEmail(user.email || '');
      }
      if (pkg.departureDates && pkg.departureDates.length > 0) {
        setSelectedDate(pkg.departureDates[0]);
      } else {
        setSelectedDate(new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0]);
      }
      setIsSuccess(false);
      setError('');
    }
  }, [isOpen, pkg, user]);

  if (!isOpen || !pkg) return null;

  const unitPrice = pkg.discountPrice || pkg.price || 500;
  const subtotal = unitPrice * guests;
  const taxes = Math.round(subtotal * 0.08);
  const total = subtotal + taxes;

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Please fill in your full name and email address.');
      return;
    }
    setError('');
    setIsSubmitting(true);

    try {
      await submitBooking({
        packageId: pkg._id,
        packageTitle: pkg.title,
        packageCoverImage: pkg.coverImage || 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80',
        destination: pkg.destination || pkg.country || 'Global Destination',
        travelerName: name.trim(),
        travelerEmail: email.trim().toLowerCase(),
        travelerPhone: phone.trim(),
        guestsCount: guests,
        startDate: selectedDate,
        totalPrice: total,
        status: 'confirmed',
        paymentStatus: 'paid',
        specialRequests: requests.trim(),
      });

      setIsSuccess(true);
      if (onSuccess) onSuccess();
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2400);
    } catch (err: any) {
      console.error('Booking submission error:', err);
      setError(err?.response?.data?.message || 'Failed to complete booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="relative p-6 pb-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-1">
              <Sparkles className="w-3.5 h-3.5" /> Instant Confirmation Guaranteed
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">Reserve Your Experience</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-10 text-center flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-500 dark:text-emerald-400 animate-pulse">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-black text-slate-900 dark:text-white">Booking Confirmed!</h4>
            <p className="text-slate-600 dark:text-slate-400 max-w-md text-sm leading-relaxed">
              Congratulations! Your trip to <span className="text-slate-900 dark:text-white font-bold">{pkg.destination}</span> is confirmed. Confirmation & itinerary have been dispatched to <span className="text-emerald-600 dark:text-emerald-400 font-bold">{email}</span>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Package Summary Card */}
            <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 items-center">
              <img
                src={pkg.coverImage || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80'}
                alt={pkg.title}
                className="w-20 h-20 rounded-xl object-cover shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-slate-900 dark:text-white truncate text-base">{pkg.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-0.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="truncate">{pkg.destination} • {pkg.country}</span>
                </p>
                <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{pkg.durationDays} Days</span>
                  <span>•</span>
                  <span>Max {pkg.maxGroupSize || 12} travelers</span>
                </div>
              </div>
            </div>

            {/* Date & Guests Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-emerald-500" /> Departure Date
                </label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-500 cursor-pointer"
                >
                  {pkg.departureDates && pkg.departureDates.length > 0 ? (
                    pkg.departureDates.map((d) => (
                      <option key={d} value={d} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                        {new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </option>
                    ))
                  ) : (
                    <option value={selectedDate} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                      {new Date(selectedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </option>
                  )}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-emerald-500" /> Number of Guests
                </label>
                <div className="flex items-center border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 rounded-xl px-2 py-1.5 justify-between">
                  <button
                    type="button"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold transition flex items-center justify-center text-base cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">{guests} {guests === 1 ? 'Traveler' : 'Travelers'}</span>
                  <button
                    type="button"
                    onClick={() => setGuests(Math.min(pkg.maxGroupSize || 20, guests + 1))}
                    className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold transition flex items-center justify-center text-base cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Traveler Details */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Traveler Information</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="tel"
                  placeholder="Phone Number (+1...)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                />
                <input
                  type="text"
                  placeholder="Special requests (dietary, room preference, etc.)"
                  value={requests}
                  onChange={(e) => setRequests(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Pricing Breakdown */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex justify-between">
                <span>${unitPrice} × {guests} guests</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-slate-500 dark:text-slate-400">
                <span>Taxes & Service Fees (8%)</span>
                <span>${taxes}</span>
              </div>
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex justify-between text-sm font-bold text-slate-900 dark:text-white">
                <span>Total Amount Due</span>
                <span className="text-emerald-600 dark:text-emerald-400 text-base font-black">${total}</span>
              </div>
            </div>

            {error && (
              <div className="p-3 text-xs rounded-xl bg-red-100/60 dark:bg-red-950/50 border border-red-300 dark:border-red-800 text-red-600 dark:text-red-400">
                {error}
              </div>
            )}

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>100% Secure Checkout & Free Cancellation up to 7 days</span>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition flex items-center justify-center gap-2 shrink-0 disabled:opacity-50 hover:scale-105 active:scale-95 duration-200 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4" />
                    <span>Pay & Book Now (${total})</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
