import { createSlice } from "@reduxjs/toolkit";
import { allCountries } from "./action";

export interface countryState {
  data:[];
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: countryState = {
  data: [],
  loading: false,
  error: null,
  success: false,
};

export const countrySlice = createSlice({
  name: "country",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(allCountries.pending, (state: countryState) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(
        allCountries.fulfilled,
        (state: countryState, action: unknown) => {
          state.loading = false;
          state.data = action.payload;
          state.success = true;
        }
      )
      .addCase(
        allCountries.rejected,
        (state: countryState, action: unknown) => {
          state.loading = false;
          state.error = action.payload;
          state.success = false;
        }
      );
  },
});

export default countrySlice.reducer;
