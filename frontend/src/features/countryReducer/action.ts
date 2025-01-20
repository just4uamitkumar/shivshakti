import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAPI } from "./api";

export const allCountries = createAsyncThunk(`country/getData`, async () => {
  try {
    const response = await getAPI();
    return response;
  } catch (error: unknown) {
    return error.response?.data || "Something went wrong";
  }
});
