import { server } from "../../redux/store";
import { handleFetchError } from "../../utils/errorHandler";

interface HttpClient {
  get(url: string): Promise<Response>;
  post(url: string, data: unknown): Promise<Response>;
  update(url: string, data: unknown): Promise<Response>;
  delete(url: string, data: unknown): Promise<Response>;
}

class devoteeService {
  private httpClient: HttpClient;
  private url: string;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.url = `${server}devotee`;
  }

  async getData(): Promise<unknown> {
    try {
      const response = await this.httpClient.get(this.url);
      return response;
    } catch (error) {
      const errorMessage = handleFetchError(error);
      console.error("API Error:", errorMessage);
    }
  }

  async createData(el: unknown): Promise<unknown> {
    try {
      const response = await this.httpClient.post(`${server}devotee`, el);

      if (response.status === 200) {
        return response.json();
      } else {
        const errorMessage = handleFetchError(response);
        console.error("API Error:", errorMessage);
      }
    } catch (error) {
      const errorMessage = handleFetchError(error);
      console.error("API Error:", errorMessage);
    }
  }

  async updateData(el: unknown): Promise<unknown> {
    try {
      const response = await this.httpClient.update(`${server}devotee`, el);

      if (response.status === 201) {
        return response.json();
      } else {
        const errorMessage = handleFetchError(response);
        console.error("API Error:", errorMessage);
      }
    } catch (error) {
      const errorMessage = handleFetchError(error);
      console.error("API Error:", errorMessage);
    }
  }

  async deleteData(el: unknown): Promise<unknown> {
    try {
      const response = await this.httpClient.delete(`${server}devotee`, el);

      if (response.status === 200) {
        return response.json();
      } else {
        const errorMessage = handleFetchError(response);
        console.error("API Error:", errorMessage);
      }
    } catch (error) {
      const errorMessage = handleFetchError(error);
      console.error("API Error:", errorMessage);
    }
  }
}

export default devoteeService;
