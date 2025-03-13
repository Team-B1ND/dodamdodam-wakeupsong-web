import { Response } from "../Utils/response.type";

export interface RefreshResponse extends Response {
  data: {
    accessToken: string;
  };
}
