// src/store/slices/packagesSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getPackages, TourPackage } from '@/lib/api';

export interface PackagesFilters {
  category:  string;
  search:    string;
  sort:      string;
  maxPrice?: number;
}

interface PackagesState {
  items:       TourPackage[];
  loading:     boolean;
  error:       string | null;
  filters:     PackagesFilters;
  currentPage: number;
  pageSize:    number;
}

const initialFilters: PackagesFilters = {
  category: 'All',
  search:   '',
  sort:     '',
};

const initialState: PackagesState = {
  items:       [],
  loading:     false,
  error:       null,
  filters:     initialFilters,
  currentPage: 1,
  pageSize:    6,
};

// ── Thunks ────────────────────────────────────────────────────────────────────

export const fetchPackages = createAsyncThunk<
  TourPackage[],
  Partial<PackagesFilters> | undefined,
  { rejectValue: string }
>('packages/fetch', async (params = {}, { rejectWithValue }) => {
  try {
    const apiParams: Record<string, any> = {};

    if (params.category && params.category !== 'All' && params.category !== 'Hot Deals') {
      apiParams.category = params.category;
    }
    if (params.search?.trim()) apiParams.search = params.search.trim();
    if (params.sort)           apiParams.sort   = params.sort;
    if (params.maxPrice)       apiParams.maxPrice = params.maxPrice;

    let data = await getPackages(apiParams);

    // Client-side Hot Deals filter
    if (params.category === 'Hot Deals') {
      data = data.filter((p) => p.discountPrice || p.featured);
    }

    return data;
  } catch (err: any) {
    return rejectWithValue(err?.message || 'Failed to load packages');
  }
});

// ── Slice ─────────────────────────────────────────────────────────────────────

const packagesSlice = createSlice({
  name: 'packages',
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<Partial<PackagesFilters>>) {
      state.filters     = { ...state.filters, ...action.payload };
      state.currentPage = 1;
    },
    resetFilters(state) {
      state.filters     = initialFilters;
      state.currentPage = 1;
    },
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setPageSize(state, action: PayloadAction<number>) {
      state.pageSize    = action.payload;
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPackages.pending, (state) => {
        state.loading = true;
        state.error   = null;
      })
      .addCase(fetchPackages.fulfilled, (state, action) => {
        state.items       = action.payload;
        state.loading     = false;
        state.currentPage = 1;
      })
      .addCase(fetchPackages.rejected, (state, action) => {
        state.loading = false;
        state.error   = action.payload ?? 'Unknown error';
      });
  },
});

export const { setFilters, resetFilters, setPage, setPageSize } = packagesSlice.actions;
export default packagesSlice.reducer;

// ── Selectors ─────────────────────────────────────────────────────────────────

import type { RootState } from '../index';

export const selectAllPackages   = (state: RootState) => state.packages.items;
export const selectPackagesLoading = (state: RootState) => state.packages.loading;
export const selectPackagesError   = (state: RootState) => state.packages.error;
export const selectPackagesFilters = (state: RootState) => state.packages.filters;
export const selectCurrentPage     = (state: RootState) => state.packages.currentPage;
export const selectPageSize        = (state: RootState) => state.packages.pageSize;

export const selectPaginatedPackages = (state: RootState) => {
  const { items, currentPage, pageSize } = state.packages;
  const totalPages = Math.max(1, Math.ceil(items.length / (pageSize || 1)));
  const validPage  = Math.min(Math.max(1, currentPage), totalPages);
  const start      = (validPage - 1) * pageSize;
  return items.slice(start, start + pageSize);
};

export const selectTotalPages = (state: RootState) => {
  const { items, pageSize } = state.packages;
  return Math.max(1, Math.ceil(items.length / pageSize));
};
