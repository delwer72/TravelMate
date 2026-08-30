"use client";

import React, { useState } from 'react';
import { TourPackage, submitBooking } from '@/lib/api';
import { 
  Calendar, 
  Users, 
  MapPin, 
  X, 
  CheckCircle, 
  ShieldCheck, 
  CreditCard,
  Sparkles 
} from 'lucide-react';

interface BookingModalProps {
  pkg: TourPackage | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function BookingModal({ pkg, isOpen, onClose, onSuccess }: BookingModalProps) {
  const [guests, setGuests] = useState(2);
  const [selectedDate, setSelectedDate] = useState(pkg?.departureDates[0] || '2026-10-01');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [requests, setRequests] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen || !pkg) return null;

  const unitPrice = pkg.discountPrice || pkg.price;
  const subtotal = unitPrice * guests;
  const taxes = Math.round(subtotal * 0.08);
  const total = subtotal + taxes;

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setError('Please fill in your name and email address.');
      return;
    }
    setError('');
    setIsSubmitting(true);

    try {
      await submitBooking({
        packageId: pkg._id,
        packageTitle: pkg.title,
        packageCoverImage: pkg.coverImage,
        destination: pkg.destination,
        travelerName: name,
        travelerEmail: email,
        travelerPhone: phone,
        guestsCount: guests,
        startDate: selectedDate,
        totalPrice: total,
        status: 'confirmed',
        paymentStatus: 'paid',
        specialRequests: requests,
      });

      setIsSuccess(true);
      if (onSuccess) onSuccess();
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2500);
    } catch (err) {
      setError('Failed to complete booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="relative p-6 pb-4 border-b border-zinc-800 flex items-center justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-1">
              <Sparkles className="w-3.5 h-3.5" /> Instant Confirmation
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight">Reserve Your Experience</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-800/60 hover:bg-zinc-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-10 text-center flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-white">Booking Confirmed!</h4>
            <p className="text-zinc-400 max-w-md">
              Congratulations! Your trip to <span className="text-white font-medium">{pkg.destination}</span> is locked in. We have sent the confirmation & tickets to <span className="text-orange-400">{email}</span>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Package Summary Card */}
            <div className="flex gap-4 p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 items-center">
              <img
                src={pkg.coverImage}
                alt={pkg.title}
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-white truncate text-base">{pkg.title}</h4>
                <p className="text-sm text-zinc-400 flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                  <span className="truncate">{pkg.destination}</span>
                </p>
                <div className="flex items-center gap-3 mt-1.5 text-xs text-zinc-400">
                  <span className="text-emerald-400 font-medium">{pkg.durationDays} Days</span>
                  <span>•</span>
                  <span>Max {pkg.maxGroupSize} group size</span>
                </div>
              </div>
            </div>

            {/* Date & Guests Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-orange-400" /> Departure Date
                </label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-orange-500"
                >
                  {pkg.departureDates?.map((d) => (
                    <option key={d} value={d}>
                      {new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-orange-400" /> Number of Guests
                </label>
                <div className="flex items-center border border-zinc-800 bg-zinc-950 rounded-xl px-2 py-1.5 justify-between">
                  <button
                    type="button"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-8 h-8 rounded-lg bg-zinc-850 hover:bg-zinc-800 text-white font-bold transition flex items-center justify-center text-base"
                  >
                    -
                  </button>
                  <span className="text-sm font-semibold text-white">{guests} {guests === 1 ? 'Traveler' : 'Travelers'}</span>
                  <button
                    type="button"
                    onClick={() => setGuests(Math.min(pkg.maxGroupSize || 20, guests + 1))}
                    className="w-8 h-8 rounded-lg bg-zinc-850 hover:bg-zinc-800 text-white font-bold transition flex items-center justify-center text-base"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Traveler Details */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Traveler Information</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-orange-500"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-orange-500"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="tel"
                  placeholder="Phone Number (+1...)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-orange-500"
                />
                <input
                  type="text"
                  placeholder="Special requests (dietary, room, etc.)"
                  value={requests}
                  onChange={(e) => setRequests(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            {/* Pricing Breakdown */}
            <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800 space-y-2 text-xs text-zinc-300">
              <div className="flex justify-between">
                <span>${unitPrice} × {guests} guests</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Taxes & Service Fees (8%)</span>
                <span>${taxes}</span>
              </div>
              <div className="pt-2 border-t border-zinc-800 flex justify-between text-sm font-bold text-white">
                <span>Total Amount Due</span>
                <span className="text-orange-400 text-base">${total}</span>
              </div>
            </div>

            {error && (
              <div className="p-3 text-xs rounded-xl bg-red-950/50 border border-red-800 text-red-400">
                {error}
              </div>
            )}

            {/* Actions */}
            <div className="pt-2 flex items-center justify-between gap-4">
              <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Secure Checkout & Free Cancellation up to 7 days before</span>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-sm shadow-lg shadow-orange-500/25 transition flex items-center gap-2 shrink-0 disabled:opacity-50"
              >
                <CreditCard className="w-4 h-4" />
                {isSubmitting ? 'Confirming...' : `Pay & Book Now ($${total})`}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
