// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer      from './slices/authSlice';
import packagesReducer  from './slices/packagesSlice';
import bookingsReducer  from './slices/bookingsSlice';
import dashboardReducer from './slices/dashboardSlice';
import wishlistReducer  from './slices/wishlistSlice';
import uiReducer        from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    auth:      authReducer,
    packages:  packagesReducer,
    bookings:  bookingsReducer,
    dashboard: dashboardReducer,
    wishlist:  wishlistReducer,
    ui:        uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // TourPackage objects in uiSlice are serializable — suppress false positives
      serializableCheck: {
        ignoredActions: [
          'ui/openBookingModal',
          'ui/openPackageModal',
          'ui/openBookingDetail',
        ],
        ignoredPaths: [
          'ui.selectedPackage',
          'ui.editingPackage',
          'ui.selectedBooking',
        ],
      },
    }),
});

export type RootState   = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
