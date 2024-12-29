import { createSlice } from "@reduxjs/toolkit";
import { getDevotees, createDevotee, updateDevotee, deleteDevotee } from "./action";
import { devoteeType } from "../../components/pages/Devotee/constants";

export interface devoteeState {
  devoteeData: unknown;
  loading: boolean;
  error: string | null;
  success: boolean
}

const initialState: devoteeState = {
  devoteeData: [],
  loading: false,
  error: null,
  success: false
}


export interface preferenceItemState {
  devoteeItem: devoteeType;
  loading: boolean;
  error: string | null;
  success: boolean
}

export const devoteeSlice = createSlice({
  name: 'devotee',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getDevotees.pending, (state: devoteeState) => {
        state.loading = true
        state.success = false
      })
      .addCase(getDevotees.fulfilled, (state: devoteeState, action: unknown) => {
        state.loading = false
        state.devoteeData = action.payload
        state.success = true
      })
      .addCase(getDevotees.rejected, (state: devoteeState, action: unknown) => {
        state.loading = false
        state.error = action.payload
        state.success = false
      })

      .addCase(createDevotee.pending, (state: devoteeState) => {
        state.loading = true
        state.success = false
      })
      .addCase(createDevotee.fulfilled, (state: devoteeState, action: unknown) => {
        state.loading = false
        state.devoteeData = action.payload
        state.success = true
      })
      .addCase(createDevotee.rejected, (state: devoteeState, action: unknown) => {
        state.loading = false
        state.error = action.payload
        state.success = false
      })

      .addCase(updateDevotee.pending, (state: devoteeState) => {
        state.loading = true
        state.success = false
      })
      .addCase(updateDevotee.fulfilled, (state: devoteeState, action: unknown) => {
        state.loading = false
        state.devoteeData = action.payload
        state.success = true
      })
      .addCase(updateDevotee.rejected, (state: devoteeState, action: unknown) => {
        state.loading = false
        state.error = action.payload
        state.success = false
      })

      .addCase(deleteDevotee.pending, (state: devoteeState) => {
        state.loading = true
        state.success = false
      })
      .addCase(deleteDevotee.fulfilled, (state: devoteeState, action: unknown) => {
        state.loading = false
        state.devoteeData = action.payload
        state.success = true
      })
      .addCase(deleteDevotee.rejected, (state: devoteeState, action: unknown) => {
        state.loading = false
        state.error = action.payload
        state.success = false
      })
  }
});


export default devoteeSlice.reducer;