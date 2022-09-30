import axios, { AxiosError } from "axios";
import config from "config/config.json";
import {
  REQUEST_TOKEN_KEY,
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "constants/token/token.contants";
import cookie from "lib/cookie/cookie";

const customAxios = axios.create({
  baseURL: config.SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
    [REQUEST_TOKEN_KEY]: `Bearer ${cookie.getCookie("access-token")}`,
  },
});

const errorInterceptor = async (config: AxiosError) => {
  const refresh_token = cookie.getCookie(REFRESH_TOKEN_KEY);

  const STATUS = config.response?.status;

  if (STATUS === 401) {
    const originalRequest = config.config;

    try {
      const { data } = await customAxios.get(
        "token/refresh", //토큰키 가져오기
        {
          headers: {
            [REQUEST_TOKEN_KEY]: `Bearer ${refresh_token}`,
          },
        }
      );
      cookie.setCookie(ACCESS_TOKEN_KEY, data.data.accessToken);

      // customAxios.defaults.headers[
      //   REQUEST_TOKEN_KEY
      // ] = `Bearer ${data.data.accessToken}`
      if (originalRequest.headers) {
        originalRequest.headers[
          REQUEST_TOKEN_KEY
        ] = `Bearer ${data.data.accessToken}`;
      }

      return axios(originalRequest);
    } catch (error) {
      window.alert("리프레쉬 만료");
    }
  }
};

customAxios.interceptors.response.use((response) => response, errorInterceptor);

export default customAxios;
