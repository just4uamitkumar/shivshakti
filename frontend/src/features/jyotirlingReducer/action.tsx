import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../redux/store";

export const getJyotirling = createAsyncThunk(
  `jyotirling/getData`,
  async () => {
    const data = await fetch(`${server}jyotirlings`);
    const data2 = await data.json();
    return data2;
  }
);
