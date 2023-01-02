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
    [REQUEST_TOKEN_KEY]: `Bearer ${cookie.getCookie("access-token")}`, //요청 보낼때 header로 쿠키 보내기 [여기서 잠깐! 왜 header로 쿠키를 보내나요? body도 있지 않나요? 왜냐하면 header는 가벼운 데이터를 보내고 받을 때 사용해요]
  },
});

const errorInterceptor = async (config: AxiosError) => {
  const refresh_token = cookie.getCookie(REFRESH_TOKEN_KEY);

  const STATUS = config.response?.status;
  if (config.response) {
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

        customAxios.defaults.headers.common[
          REQUEST_TOKEN_KEY
        ] = `Bearer ${data.data.accessToken}`;
        cookie.setCookie(ACCESS_TOKEN_KEY, data.data.accessToken);
        originalRequest.headers![
          REQUEST_TOKEN_KEY
        ] = `Bearer ${data.data.accessToken}`;
        return axios(originalRequest);
      } catch (error) {
        window.location.href = "http://dodam.b1nd.com/sign";
      }
    }
  }
};

customAxios.interceptors.response.use((response) => response, errorInterceptor);

export default customAxios;
