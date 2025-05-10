import { createSlice } from "@reduxjs/toolkit";
import { loginUser, getUser, logoutUser } from "./action";
import { userDetail } from "../../components/pages/Auth/constants";

export interface userState {
  loading: boolean;
  success: boolean;
  error: string | null;
  isAuthenticated: boolean;
  data?:unknown | null
}

const initialState: userState = {
  loading: false,
  success: false,
  error: null,
  isAuthenticated: false,
  data:null
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state: userState) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(loginUser.fulfilled, (state: userState, action: unknown) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.data = action.payload
        state.success = true;
      })
      .addCase(loginUser.rejected, (state: userState, action: unknown) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
        state.success = false;
      })
      .addCase(logoutUser.pending, (state: userState) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(logoutUser.fulfilled, (state: userState, action: unknown) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.data.user = null;
        state.message = action.payload
        state.success = true;
      })
      .addCase(logoutUser.rejected, (state: userState, action: unknown) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })

      .addCase(getUser.pending, (state: userState) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(getUser.fulfilled, (state: userState, action: unknown) => {
        state.loading = false;
        state.data.user = action.payload?.user;
        state.success = true;
      })
      .addCase(getUser.rejected, (state: userState, action: unknown) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export default userSlice.reducer;
