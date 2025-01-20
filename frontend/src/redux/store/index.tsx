import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import rootReducer from "../../features/reducer";
import devoteeReducer from '../../features/devoteeReducer'
import countryReducer from '../../features/countryReducer'

export const store = configureStore({
  reducer: {
    devotees:devoteeReducer,
    countries:countryReducer
  },
});

export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = useDispatch as () => typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const server = "http://localhost:5000/api/";
