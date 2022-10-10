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

      // customAxios.defaults.headers[
      //   REQUEST_TOKEN_KEY
      // ] = `Bearer ${data.data.accessToken}`

      if (originalRequest.headers) {
        cookie.setCookie(ACCESS_TOKEN_KEY, data.data.accessToken);
        originalRequest.headers[
          REQUEST_TOKEN_KEY
        ] = `Bearer ${data.data.accessToken}`;
      }

      return axios(originalRequest);
    } catch (error) {
      // window.alert("토큰이 만료되었습니다 다시 로그인해");
      // window.location.href = "http://dodam.b1nd.com/sign";
    }
  }
};

customAxios.interceptors.response.use((response) => response, errorInterceptor);

export default customAxios;
