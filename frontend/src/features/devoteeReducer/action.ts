import { createAsyncThunk } from "@reduxjs/toolkit";
//import devoteeService from "../../services/devoteeServices";
import { devoteeType } from "../../components/pages/Devotee/constants";
//import ApiService from "../../services/commonServices/apiService";
import { server } from "../../redux/store";
//const DevotService: devoteeService = new devoteeService(ApiService);

export const getDevotees = createAsyncThunk(`devotee/getData`, async () => {
  const response = await fetch(`${server}devotee`);
  const people = await response.json();
  return people;


  //   const res = await DevotService.getData();
  //   return res;
});

export const createDevotee = createAsyncThunk(
  `devotee/createData`,
  async (input: devoteeType) => {

    const response = await fetch(`${server}devotee`);
    const people = await response.json();
    return people;
    // const res = await DevotService.createData(input);
    // return res;
  }
);

export const updateDevotee = createAsyncThunk(
  `devotee/updateData`,
  async (input: devoteeType) => {
    const response = await fetch(`${server}devotee`);
    const people = await response.json();
    return people;
    // const res = await DevotService.updateData(input);
    // return res;
  }
);

export const deleteDevotee = createAsyncThunk(
  `devotee/delete`,
  async (input: devoteeType) => {
    const response = await fetch(`${server}devotee`);
    const people = await response.json();
    return people;
    // const res = await DevotService.deleteData(input);
    // return res;
  }
);
