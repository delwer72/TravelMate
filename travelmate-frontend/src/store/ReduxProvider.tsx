'use client';

// src/store/ReduxProvider.tsx
import { useRef, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './index';

export default function ReduxProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef(store);
  if (!storeRef.current) {
    storeRef.current = store;
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
