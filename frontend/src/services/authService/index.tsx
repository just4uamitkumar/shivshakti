interface RequestOptions {
  method: string;
  headers?: Headers;
  body?: string | FormData;
}

class HttpInterceptor {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async handleRequest(
    url: string,
    options: RequestOptions
  ): Promise<Response> {
    const apiUrl = `${this.baseUrl}${url}`;
    const defaultHeaders = new Headers({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });

    const requestOptions: RequestOptions = {
      ...options,
      headers: new Headers(options.headers || defaultHeaders),
    };

    try {
      const response = await fetch(apiUrl, requestOptions);

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      return response;
    } catch (error: unknown) {
      console.log(error);
      throw new Error(`Request failed: ${error.message}`);
    }
  }

  public async get(url: string): Promise<Response> {
    const response = await this.handleRequest(url, { method: "GET" });
    return await response.json();
  }

  public async post(url: string, data: unknown): Promise<Response> {
    const response = await this.handleRequest(url, {
      method: "POST",
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  public async put(url: string, data: unknown): Promise<Response> {
    const response = await this.handleRequest(url, {
      method: "PUT",
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  public async delete(url: string): Promise<Response> {
    const response = await this.handleRequest(url, { method: "DELETE" });
    if (response.status !== 204) {
      throw new Error(`Delete request failed with status ${response.status}`);
    }
    return await response.json();
  }
}

export default HttpInterceptor;
