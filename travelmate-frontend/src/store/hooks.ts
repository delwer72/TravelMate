// src/store/hooks.ts
// Typed versions of useDispatch and useSelector — always use these instead
// of the plain react-redux versions to get full TypeScript inference.
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './index';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T>(selector: (state: RootState) => T): T =>
  useSelector<RootState, T>(selector);
