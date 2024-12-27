import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { getJyotirling } from "./action";

export interface JyotirliingState {
  data: unknown;
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: JyotirliingState = {
  data: [],
  loading: false,
  error: null,
  success: false
}

export const jyotirlingSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getJyotirling.pending, (state: JyotirliingState) => {
        state.loading = true
        state.success = false
      })
      .addCase(getJyotirling.fulfilled, (state: JyotirliingState, action: PayloadAction<unknown>) => {
        state.loading = false
        state.data = action.payload;
        state.success = false
      })
      .addCase(getJyotirling.rejected, (state: JyotirliingState, action: PayloadAction<unknown>) => {
        state.loading = false
        state.error = action.payload
        state.success = false
      })
  }
});

export default jyotirlingSlice.reducer;