// src/store/slices/authSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export type UserRole = 'guest' | 'user' | 'admin';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  profileImage?: string;
}

interface AuthState {
  user: AuthUser | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const TOKEN_KEY = 'tm_auth_token';
const USER_KEY  = 'tm_auth_user';
const API_BASE  = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

// ── Helpers ───────────────────────────────────────────────────────────────────

function persistAuth(token: string, user: AuthUser) {
  try {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    document.cookie = `${TOKEN_KEY}=${token}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
  } catch { /* ignore */ }
}

function clearAuth() {
  try {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    document.cookie = `${TOKEN_KEY}=; path=/; max-age=0`;
  } catch { /* ignore */ }
}

// ── Thunks ────────────────────────────────────────────────────────────────────

/** Hydrate auth state from localStorage (called on app boot) */
export const initAuthThunk = createAsyncThunk<
  { token: string; user: AuthUser } | null
>('auth/init', async () => {
  if (typeof window === 'undefined') return null;

  const storedToken = localStorage.getItem(TOKEN_KEY);
  const storedUser  = localStorage.getItem(USER_KEY);

  if (storedToken && storedUser) {
    return { token: storedToken, user: JSON.parse(storedUser) as AuthUser };
  }

  // Try Better Auth session-sync fallback
  try {
    const res = await fetch('/api/auth/session-sync', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.token && data.user) {
        persistAuth(data.token, data.user as AuthUser);
        return { token: data.token, user: data.user as AuthUser };
      }
    }
  } catch { /* offline or no session */ }

  return null;
});

/** Login with email + password */
export const loginThunk = createAsyncThunk<
  { token: string; user: AuthUser },
  { email: string; password: string },
  { rejectValue: string }
>('auth/login', async ({ email, password }, { rejectWithValue }) => {
  try {
    const res  = await fetch(`${API_BASE}/auth/login`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ email, password }),
    });
    const data = await res.json();

    if (!res.ok) return rejectWithValue(data.message || 'Invalid credentials.');

    const user: AuthUser = {
      id:           data.user.id,
      name:         data.user.name,
      email:        data.user.email,
      role:         data.user.role || 'user',
      profileImage: data.user.profileImage,
    };

    persistAuth(data.token, user);
    return { token: data.token, user };
  } catch {
    return rejectWithValue('Network error. Please check your connection.');
  }
});

/** Logout — clears storage and Better Auth session */
export const logoutThunk = createAsyncThunk('auth/logout', async () => {
  clearAuth();
  try {
    await fetch('/api/auth/signout', { method: 'POST' }).catch(() => {});
  } catch { /* ignore */ }
});

// ── Slice ─────────────────────────────────────────────────────────────────────

const initialState: AuthState = {
  user:            null,
  token:           null,
  isLoading:       true,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /** Manually set credentials (e.g. after registration) */
    setCredentials(state, action: PayloadAction<{ token: string; user: AuthUser }>) {
      state.token           = action.payload.token;
      state.user            = action.payload.user;
      state.isAuthenticated = true;
      state.isLoading       = false;
      persistAuth(action.payload.token, action.payload.user);
    },
    /** Clear credentials without full logout thunk */
    clearCredentials(state) {
      state.token           = null;
      state.user            = null;
      state.isAuthenticated = false;
      clearAuth();
    },
    updateUser(state, action: PayloadAction<Partial<AuthUser>>) {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
        try {
          localStorage.setItem(USER_KEY, JSON.stringify(state.user));
        } catch { /* ignore */ }
      }
    },
  },
  extraReducers: (builder) => {
    // initAuthThunk
    builder
      .addCase(initAuthThunk.pending,   (state) => { state.isLoading = true; })
      .addCase(initAuthThunk.fulfilled, (state, action) => {
        if (action.payload) {
          state.token           = action.payload.token;
          state.user            = action.payload.user;
          state.isAuthenticated = true;
        }
        state.isLoading = false;
      })
      .addCase(initAuthThunk.rejected, (state) => { state.isLoading = false; });

    // loginThunk
    builder
      .addCase(loginThunk.pending,   (state) => { state.isLoading = true; })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.token           = action.payload.token;
        state.user            = action.payload.user;
        state.isAuthenticated = true;
        state.isLoading       = false;
      })
      .addCase(loginThunk.rejected, (state) => { state.isLoading = false; });

    // logoutThunk
    builder.addCase(logoutThunk.fulfilled, (state) => {
      state.token           = null;
      state.user            = null;
      state.isAuthenticated = false;
      state.isLoading       = false;
    });
  },
});

export const { setCredentials, clearCredentials, updateUser } = authSlice.actions;
export default authSlice.reducer;
