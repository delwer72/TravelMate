// src/store/slices/dashboardSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAdminStats, getUserStats, AdminStats, UserStats } from '@/lib/api';
import type { RootState } from '../index';

interface DashboardState {
  adminStats: AdminStats | null;
  userStats:  UserStats  | null;
  loading:    boolean;
  error:      string | null;
}

const initialState: DashboardState = {
  adminStats: null,
  userStats:  null,
  loading:    false,
  error:      null,
};

// ── Thunks ────────────────────────────────────────────────────────────────────

export const fetchAdminStats = createAsyncThunk<AdminStats, void, { rejectValue: string }>(
  'dashboard/fetchAdminStats',
  async (_, { rejectWithValue }) => {
    try {
      return await getAdminStats();
    } catch (err: any) {
      return rejectWithValue(err?.message || 'Failed to fetch admin stats');
    }
  }
);

export const fetchUserStats = createAsyncThunk<UserStats, void, { rejectValue: string }>(
  'dashboard/fetchUserStats',
  async (_, { rejectWithValue }) => {
    try {
      return await getUserStats();
    } catch (err: any) {
      return rejectWithValue(err?.message || 'Failed to fetch user stats');
    }
  }
);

// ── Slice ─────────────────────────────────────────────────────────────────────

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    clearDashboardError(state) { state.error = null; },
  },
  extraReducers: (builder) => {
    // Admin stats
    builder
      .addCase(fetchAdminStats.pending,   (state) => { state.loading = true; state.error = null; })
      .addCase(fetchAdminStats.fulfilled, (state, action) => {
        state.adminStats = action.payload;
        state.loading    = false;
      })
      .addCase(fetchAdminStats.rejected,  (state, action) => {
        state.loading = false;
        state.error   = action.payload ?? 'Unknown error';
      });

    // User stats
    builder
      .addCase(fetchUserStats.pending,   (state) => { state.loading = true; state.error = null; })
      .addCase(fetchUserStats.fulfilled, (state, action) => {
        state.userStats = action.payload;
        state.loading   = false;
      })
      .addCase(fetchUserStats.rejected,  (state, action) => {
        state.loading = false;
        state.error   = action.payload ?? 'Unknown error';
      });
  },
});

export const { clearDashboardError } = dashboardSlice.actions;
export default dashboardSlice.reducer;

// ── Selectors ─────────────────────────────────────────────────────────────────

export const selectAdminStats     = (state: RootState) => state.dashboard.adminStats;
export const selectUserStats      = (state: RootState) => state.dashboard.userStats;
export const selectDashboardLoading = (state: RootState) => state.dashboard.loading;
