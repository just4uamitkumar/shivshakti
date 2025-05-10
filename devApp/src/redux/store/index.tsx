import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import counterReducer  from '../../features/counter';
import type rootReducer from '../../features/reducer';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = useDispatch as () => typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const server = "http://localhost:5000/api/";

export default store;