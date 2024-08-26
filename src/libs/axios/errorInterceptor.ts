import axios, { AxiosError } from "axios";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "constants/token/token.contants";
import authRepository from "repository/auth/auth.repository";
import dodamAxios from "./dodamAxios";
import cookie from "libs/cookie/cookie";

export const errorInterceptor = async (config: AxiosError) => {
  const refresh_token = cookie.getCookie(REFRESH_TOKEN_KEY);

  const STATUS = config.response?.status;
  if (config.response) {
    if (STATUS === 401) {
      const originalRequest = config.config;

      try {
        const { data: newAccessToken } = await authRepository.postRefreshToken({
          refreshToken: refresh_token!,
        });

        dodamAxios.defaults.headers.common[
          REQUEST_TOKEN_KEY
        ] = `Bearer ${newAccessToken.accessToken}`;

        cookie.setCookie(ACCESS_TOKEN_KEY, newAccessToken.accessToken);

        originalRequest.headers![
          REQUEST_TOKEN_KEY
        ] = `Bearer ${newAccessToken.accessToken}`;
        return axios(originalRequest);
      } catch (error) {
        window.location.href = "http://dodam.b1nd.com/sign";
      }
    }
  }

  return Promise.reject(config);
};
