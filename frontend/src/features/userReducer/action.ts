import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAPI, loginAPI, logoutAPI } from "./api";
import { loginCred } from "../../components/pages/Auth/constants";

export const loginUser = createAsyncThunk(
  `user/loginUser`,
  async (loginCred: loginCred, { rejectWithValue }) => {
    try {
      const response = await loginAPI(loginCred);
      return response;
    } catch (error: unknown) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

export const logoutUser = createAsyncThunk(`user/logoutUser`, async () => {
  try {
    const response = await logoutAPI();
    return response.data;
  } catch (error: unknown) {
    return error.response?.data || "Something went wrong";
  }
});

export const getUser = createAsyncThunk(`user/getUser`, async () => {
  try {
    const response = await getAPI();
    return response.data;
  } catch (error: unknown) {
    return error.response?.data || "Something went wrong";
  }
});
