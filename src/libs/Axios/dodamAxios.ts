import axios from "axios";
import config from "config/config.json";
import { REQUEST_TOKEN_KEY } from "constants/Token/token.contants";
import cookie from "libs/Cookie/cookie";
import { errorInterceptor } from "./errorInterceptor";

const dodamAxios = axios.create({
  baseURL: config.SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
    [REQUEST_TOKEN_KEY]: `Bearer ${cookie.getCookie("access-token")}`, //요청 보낼때 header로 쿠키 보내기 [여기서 잠깐! 왜 header로 쿠키를 보내나요? body도 있지 않나요? 왜냐하면 header는 가벼운 데이터를 보내고 받을 때 사용해요]
  },
});

dodamAxios.interceptors.response.use((response) => response, errorInterceptor);

export default dodamAxios;
