// src/store/slices/bookingsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getUserBookings,
  getAdminBookings,
  submitBooking,
  updateBookingStatus,
  Booking,
} from '@/lib/api';
import type { RootState } from '../index';

interface BookingsState {
  userBookings:  Booking[];
  adminBookings: Booking[];
  loading:       boolean;
  submitting:    boolean;
  error:         string | null;
}

const initialState: BookingsState = {
  userBookings:  [],
  adminBookings: [],
  loading:       false,
  submitting:    false,
  error:         null,
};

// ── Thunks ────────────────────────────────────────────────────────────────────

export const fetchUserBookings = createAsyncThunk<Booking[], void, { rejectValue: string }>(
  'bookings/fetchUser',
  async (_, { rejectWithValue }) => {
    try {
      return await getUserBookings();
    } catch (err: any) {
      return rejectWithValue(err?.message || 'Failed to fetch bookings');
    }
  }
);

export const fetchAdminBookings = createAsyncThunk<Booking[], void, { rejectValue: string }>(
  'bookings/fetchAdmin',
  async (_, { rejectWithValue }) => {
    try {
      return await getAdminBookings();
    } catch (err: any) {
      return rejectWithValue(err?.message || 'Failed to fetch bookings');
    }
  }
);

export const submitBookingThunk = createAsyncThunk<
  Booking,
  Omit<Booking, '_id' | 'createdAt'>,
  { rejectValue: string }
>('bookings/submit', async (bookingData, { rejectWithValue }) => {
  try {
    return await submitBooking(bookingData);
  } catch (err: any) {
    return rejectWithValue(err?.message || 'Failed to submit booking');
  }
});

export const updateBookingStatusThunk = createAsyncThunk<
  { id: string; status: Booking['status'] },
  { id: string; status: Booking['status'] },
  { rejectValue: string }
>('bookings/updateStatus', async ({ id, status }, { rejectWithValue }) => {
  try {
    await updateBookingStatus(id, status);
    return { id, status };
  } catch (err: any) {
    return rejectWithValue(err?.message || 'Failed to update booking');
  }
});

// ── Slice ─────────────────────────────────────────────────────────────────────

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    clearBookingsError(state) { state.error = null; },
  },
  extraReducers: (builder) => {
    // fetchUserBookings
    builder
      .addCase(fetchUserBookings.pending,   (state) => { state.loading = true; state.error = null; })
      .addCase(fetchUserBookings.fulfilled, (state, action) => {
        state.userBookings = action.payload;
        state.loading      = false;
      })
      .addCase(fetchUserBookings.rejected,  (state, action) => {
        state.loading = false;
        state.error   = action.payload ?? 'Unknown error';
      });

    // fetchAdminBookings
    builder
      .addCase(fetchAdminBookings.pending,   (state) => { state.loading = true; state.error = null; })
      .addCase(fetchAdminBookings.fulfilled, (state, action) => {
        state.adminBookings = action.payload;
        state.loading       = false;
      })
      .addCase(fetchAdminBookings.rejected,  (state, action) => {
        state.loading = false;
        state.error   = action.payload ?? 'Unknown error';
      });

    // submitBookingThunk
    builder
      .addCase(submitBookingThunk.pending,   (state) => { state.submitting = true; })
      .addCase(submitBookingThunk.fulfilled, (state, action) => {
        state.submitting   = false;
        state.userBookings = [action.payload, ...state.userBookings];
      })
      .addCase(submitBookingThunk.rejected,  (state, action) => {
        state.submitting = false;
        state.error      = action.payload ?? 'Unknown error';
      });

    // updateBookingStatusThunk
    builder.addCase(updateBookingStatusThunk.fulfilled, (state, action) => {
      const { id, status } = action.payload;
      const updateList = (list: Booking[]) =>
        list.map((b) => (b._id === id ? { ...b, status } : b));
      state.userBookings  = updateList(state.userBookings);
      state.adminBookings = updateList(state.adminBookings);
    });
  },
});

export const { clearBookingsError } = bookingsSlice.actions;
export default bookingsSlice.reducer;

// ── Selectors ─────────────────────────────────────────────────────────────────

export const selectUserBookings  = (state: RootState) => state.bookings.userBookings;
export const selectAdminBookings = (state: RootState) => state.bookings.adminBookings;
export const selectBookingsLoading = (state: RootState) => state.bookings.loading;
export const selectBookingSubmitting = (state: RootState) => state.bookings.submitting;
