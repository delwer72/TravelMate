// src/store/slices/uiSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TourPackage, Booking } from '@/lib/api';
import type { RootState } from '../index';

type AdminTab = 'analytics' | 'packages' | 'bookings' | 'users';
type UserTab  = 'overview'  | 'bookings' | 'wishlist' | 'settings';

interface UIState {
  // Booking modal
  bookingModalOpen:  boolean;
  selectedPackage:   TourPackage | null;

  // Package modal (admin)
  packageModalOpen:  boolean;
  editingPackage:    TourPackage | null;

  // Booking detail modal
  bookingDetailOpen: boolean;
  selectedBooking:   Booking | null;

  // Dashboard tabs
  adminActiveTab:    AdminTab;
  userActiveTab:     UserTab;

  // Global notification
  notification: { message: string; type: 'success' | 'error' | 'info' } | null;
}

const initialState: UIState = {
  bookingModalOpen:  false,
  selectedPackage:   null,
  packageModalOpen:  false,
  editingPackage:    null,
  bookingDetailOpen: false,
  selectedBooking:   null,
  adminActiveTab:    'analytics',
  userActiveTab:     'overview',
  notification:      null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // ── Booking modal ──────────────────────────────────────────────────────
    openBookingModal(state, action: PayloadAction<TourPackage>) {
      state.selectedPackage  = action.payload;
      state.bookingModalOpen = true;
    },
    closeBookingModal(state) {
      state.bookingModalOpen = false;
      state.selectedPackage  = null;
    },

    // ── Package modal (admin CRUD) ─────────────────────────────────────────
    openPackageModal(state, action: PayloadAction<TourPackage | null>) {
      state.editingPackage   = action.payload;
      state.packageModalOpen = true;
    },
    closePackageModal(state) {
      state.packageModalOpen = false;
      state.editingPackage   = null;
    },

    // ── Booking detail modal ───────────────────────────────────────────────
    openBookingDetail(state, action: PayloadAction<Booking>) {
      state.selectedBooking   = action.payload;
      state.bookingDetailOpen = true;
    },
    closeBookingDetail(state) {
      state.bookingDetailOpen = false;
      state.selectedBooking   = null;
    },

    // ── Dashboard tabs ─────────────────────────────────────────────────────
    setAdminTab(state, action: PayloadAction<AdminTab>) {
      state.adminActiveTab = action.payload;
    },
    setUserTab(state, action: PayloadAction<UserTab>) {
      state.userActiveTab = action.payload;
    },

    // ── Notifications ──────────────────────────────────────────────────────
    showNotification(
      state,
      action: PayloadAction<{ message: string; type: 'success' | 'error' | 'info' }>
    ) {
      state.notification = action.payload;
    },
    clearNotification(state) {
      state.notification = null;
    },
  },
});

export const {
  openBookingModal,
  closeBookingModal,
  openPackageModal,
  closePackageModal,
  openBookingDetail,
  closeBookingDetail,
  setAdminTab,
  setUserTab,
  showNotification,
  clearNotification,
} = uiSlice.actions;

export default uiSlice.reducer;

// ── Selectors ─────────────────────────────────────────────────────────────────

export const selectBookingModalOpen  = (state: RootState) => state.ui.bookingModalOpen;
export const selectSelectedPackage   = (state: RootState) => state.ui.selectedPackage;
export const selectPackageModalOpen  = (state: RootState) => state.ui.packageModalOpen;
export const selectEditingPackage    = (state: RootState) => state.ui.editingPackage;
export const selectBookingDetailOpen = (state: RootState) => state.ui.bookingDetailOpen;
export const selectSelectedBooking   = (state: RootState) => state.ui.selectedBooking;
export const selectAdminActiveTab    = (state: RootState) => state.ui.adminActiveTab;
export const selectUserActiveTab     = (state: RootState) => state.ui.userActiveTab;
export const selectNotification      = (state: RootState) => state.ui.notification;
