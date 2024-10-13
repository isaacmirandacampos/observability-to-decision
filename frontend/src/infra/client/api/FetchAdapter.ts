import { ApiService } from "./ApiService";

export class FetchAdapter implements ApiService {
  async get<T>(url: string, options: RequestInit): Promise<T> {
    return this.execute<T>(url, { method: "GET", ...options });
  }

  async post<T>(
    url: string,
    options: RequestInit = {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ): Promise<T> {
    return this.execute<T>(url, {
      method: "POST",
      headers: options.headers,
      body: options.body,
      credentials: options.credentials,
    });
  }

  async execute<T>(url: string, options: RequestInit): Promise<T> {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json() as T;
  }
}
