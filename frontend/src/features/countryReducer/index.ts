import { createSlice } from "@reduxjs/toolkit";
import { getCountries, getStates, getCities } from "./action";

export interface countryState {
  countries: [];
  isCountryLoading: boolean;
  isCountryError: string | null;
  isCountrySuccess: boolean;
  states: [];
  isStateLoading: boolean;
  isStateError: string | null;
  isStateSuccess: boolean;
  cities: [];
  isCityLoading: boolean;
  isCityError: string | null;
  isCitySuccess: boolean;
}

const initialState: countryState = {
  countries: [],
  isCountryLoading: false,
  isCountryError: null,
  isCountrySuccess: false,
  states: [],
  isStateLoading: false,
  isStateError: null,
  isStateSuccess: false,
  cities: [],
  isCityLoading: false,
  isCityError: null,
  isCitySuccess: false,
};

export const countrySlice = createSlice({
  name: "country",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCountries.pending, (state: countryState) => {
        state.isCountryLoading = true;
        state.isCountrySuccess = false;
      })
      .addCase(
        getCountries.fulfilled,
        (state: countryState, action: unknown) => {
          state.isCountryLoading = false;
          state.countries = action.payload;
          state.isCountrySuccess = true;
        }
      )
      .addCase(
        getCountries.rejected,
        (state: countryState, action: unknown) => {
          state.isCountryLoading = false;
          state.isCountryError = action.payload;
          state.isCountrySuccess = false;
        }
      )
      .addCase(getStates.pending, (state: countryState) => {
        state.isStateLoading = true;
        state.isStateSuccess = false;
      })
      .addCase(getStates.fulfilled, (state: countryState, action: unknown) => {
        state.isStateLoading = false;
        state.states = action.payload;
        state.isStateSuccess = true;
      })
      .addCase(getStates.rejected, (state: countryState, action: unknown) => {
        state.isStateLoading = false;
        state.isStateError = action.payload;
        state.isStateSuccess = false;
      })
      .addCase(getCities.pending, (state: countryState) => {
        state.isCityLoading = true;
        state.isCitySuccess = false;
      })
      .addCase(getCities.fulfilled, (state: countryState, action: unknown) => {
        state.isCityLoading = false;
        state.states = action.payload;
        state.isCitySuccess = true;
      })
      .addCase(getCities.rejected, (state: countryState, action: unknown) => {
        state.isCityLoading = false;
        state.isCityError = action.payload;
        state.isCitySuccess = false;
      });
  },
});

export default countrySlice.reducer;
