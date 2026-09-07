// src/store/slices/wishlistSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { toggleWishlist } from '@/lib/api';
import type { RootState } from '../index';

const WISHLIST_KEY = 'tm_wishlist';

function loadFromStorage(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(WISHLIST_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveToStorage(ids: string[]) {
  try {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(ids));
  } catch { /* ignore */ }
}

interface WishlistState {
  packageIds: string[];
  syncing:    boolean;
}

const initialState: WishlistState = {
  packageIds: [],
  syncing:    false,
};

// ── Thunks ────────────────────────────────────────────────────────────────────

/** Hydrate wishlist from localStorage */
export const initWishlist = createAsyncThunk('wishlist/init', async () => {
  return loadFromStorage();
});

/** Toggle and sync to API */
export const toggleWishlistThunk = createAsyncThunk<
  string[],
  string,
  { rejectValue: string; state: { wishlist: WishlistState } }
>('wishlist/toggle', async (packageId, { getState, rejectWithValue }) => {
  const current = [...getState().wishlist.packageIds];
  const idx     = current.indexOf(packageId);
  const updated = idx > -1
    ? current.filter((id) => id !== packageId)
    : [...current, packageId];

  saveToStorage(updated);

  try {
    const synced = await toggleWishlist(packageId);
    saveToStorage(synced);
    return synced;
  } catch {
    // Optimistic update — keep local result if API fails
    return updated;
  }
});

// ── Slice ─────────────────────────────────────────────────────────────────────

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist(state, action: PayloadAction<string>) {
      if (!state.packageIds.includes(action.payload)) {
        state.packageIds.push(action.payload);
        saveToStorage(state.packageIds);
      }
    },
    removeFromWishlist(state, action: PayloadAction<string>) {
      state.packageIds = state.packageIds.filter((id) => id !== action.payload);
      saveToStorage(state.packageIds);
    },
    clearWishlist(state) {
      state.packageIds = [];
      saveToStorage([]);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initWishlist.fulfilled, (state, action) => {
        state.packageIds = action.payload;
      });

    builder
      .addCase(toggleWishlistThunk.pending,   (state) => { state.syncing = true; })
      .addCase(toggleWishlistThunk.fulfilled, (state, action) => {
        state.packageIds = action.payload;
        state.syncing    = false;
      })
      .addCase(toggleWishlistThunk.rejected,  (state) => { state.syncing = false; });
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;

// ── Selectors ─────────────────────────────────────────────────────────────────

export const selectWishlistIds       = (state: RootState) => state.wishlist.packageIds;
export const selectIsWishlisted      = (packageId: string) =>
  (state: RootState) => state.wishlist.packageIds.includes(packageId);
export const selectWishlistSyncing   = (state: RootState) => state.wishlist.syncing;
export const selectWishlistCount     = (state: RootState) => state.wishlist.packageIds.length;
