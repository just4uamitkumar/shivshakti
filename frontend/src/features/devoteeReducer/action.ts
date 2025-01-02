import { createAsyncThunk } from "@reduxjs/toolkit";
import { devoteeType } from "../../components/pages/Devotee/constants";
import { createAPI, deleteAPI, getAPI, updateAPI } from "./api";

export const getDevotees = createAsyncThunk(`devotee/getData`, async () => {
  try {
    const response = await getAPI();
    return response.data;
  } catch (error: unknown) {
    return error.response?.data || "Something went wrong";
  }
});

export const createDevotee = createAsyncThunk(
  "devotee/createData",
  async (data: devoteeType, { rejectWithValue }) => {
    try {
      const response = await createAPI(data);
      return response.data;
    } catch (error: unknown) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

export const updateDevotee = createAsyncThunk(
  "devotee/updateData",
  async (data: devoteeType, { rejectWithValue }) => {
    try {
      const response = await updateAPI(data);
      return response.data;
    } catch (error: unknown) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

export const deleteDevotee = createAsyncThunk(
  "devotee/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await deleteAPI(id);
      return response.message;
    } catch (error: unknown) {
      return rejectWithValue(
        error.response?.data || "Failed to delete devotee"
      );
    }
  }
);
