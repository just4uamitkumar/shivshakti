import { createAsyncThunk } from "@reduxjs/toolkit";
import { countryApi, stateApi, cityApi } from "./api";

export const getCountries = createAsyncThunk(`country/getData`, async () => {
  try {
    const response = await countryApi();
    return response;
  } catch (error: unknown) {
    return error.response?.data || "Something went wrong";
  }
});

export const getStates = createAsyncThunk(`state/getData`, async (input:string) => {
  try {
    const response = await stateApi(input);
    return response;
  } catch (error: unknown) {
    return error.response?.data || "Something went wrong";
  }
});

export const getCities = createAsyncThunk(`city/getData`, async ({ input1, input2 }) => {
  try {
    const response = await cityApi({input1, input2});
    return response;
  } catch (error: unknown) {
    return error.response?.data || "Something went wrong";
  }
});
