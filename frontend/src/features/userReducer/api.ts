import axios from "axios";
import { server } from "../../redux/store";
import { loginCred, userDetail } from "../../components/pages/Auth/constants";

interface Response {
  success: boolean;
  data: {
    message:string,
    userDetail:userDetail
  }
  isAuthenticated:boolean
}

export const loginAPI = async (data: loginCred) => {
  const response = await axios.post<Response>(`${server}user/login`, data);
  return response?.data;
};

export const logoutAPI = async () => {
  const response = await axios.get<Response>(`${server}user/logout`);
  return response?.data;
};


export const getAPI = async () => {
  const response = await axios.get(`${server}user/me`);
  return response.data;
};

