export interface ApiService {
  get<T>(url: string, options: RequestInit): Promise<T>;
  post<T>(url: string, options: RequestInit): Promise<T>;
}
