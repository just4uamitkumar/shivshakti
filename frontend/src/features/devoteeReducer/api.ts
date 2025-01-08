import axios from "axios";
import { devotee, devoteeType } from "../../components/pages/Devotee/constants";
import { server } from "../../redux/store";

interface Response {
  success: boolean;
  data: devotee;
}

interface DeleteResponse {
    success: boolean;
    message: string;
  }

export const getAPI = async () => {
  const response = await axios.get(`${server}devotee`);
  return response.data;
};

export const createAPI = async (data: devotee): Promise<Response> => {
  const response = await axios.post<Response>(`${server}devotee`, data);
  return response.data;
};

export const updateAPI = async (data: devoteeType): Promise<Response> => {
  const response = await axios.put<Response>(
    `${server}devotee/${data._id}`,
    data
  );
  return response.data;
};

export const deleteAPI = async (id: string): Promise<DeleteResponse> => {
    const response = await axios.delete<DeleteResponse>(`${server}devotee/${id}`);
    return response.data;
};
