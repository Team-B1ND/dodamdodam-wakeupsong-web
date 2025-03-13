import { Response } from "../Util/response.type";

export interface RefreshResponse extends Response {
  data: {
    accessToken: string;
  };
}
