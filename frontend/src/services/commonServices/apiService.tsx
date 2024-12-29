//import { server } from '../../redux/store';
import HttpInterceptor from '../authService/index';

export const baseURL = "http://localhost:5000/api/";

class ApiService {
  private httpInterceptor: HttpInterceptor;

  constructor() {
    this.httpInterceptor = new HttpInterceptor(baseURL);
  }

  public async get(url: string): Promise<Response> {
    return this.httpInterceptor.get(url);
  }

  public async post(url: string, data: unknown): Promise<Response> {
    return this.httpInterceptor.post(url, data);
  }

  public async update(url: string, data: unknown): Promise<Response> {
    return this.httpInterceptor.put(url, data);
  }

  public async delete(url: string): Promise<Response> {
    return this.httpInterceptor.delete(url);
  }
}

export default new ApiService();