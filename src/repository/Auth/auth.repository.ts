import axios from "axios";
import { RefreshResponse } from "types/Auth/auth.type";
import config from "config/config.json";
import { postRefreshTokenParam } from "./auth.param";

class AuthRepository {
  public async postRefreshToken(
    refreshToken: postRefreshTokenParam
  ): Promise<RefreshResponse> {
    const { data } = await axios.post<RefreshResponse>(
      `${config.TEST_SERVER}/auth/reissue`,
      refreshToken
    );
    return data;
  }
}

const authRepository = new AuthRepository();
export default authRepository;
