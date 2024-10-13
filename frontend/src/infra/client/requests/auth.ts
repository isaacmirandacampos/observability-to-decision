import { ApiService } from "../api/ApiService";

export class Auth {
  private readonly url = process.env.NEXT_PUBLIC_API_URL;
  constructor(private readonly apiService: ApiService) {}

  async google(credential: string): Promise<void> {
    await this.apiService.post<void>(this.url + "/auth/google", {
      body: JSON.stringify({ credential }),
      credentials: "omit",
    });
  }
}
