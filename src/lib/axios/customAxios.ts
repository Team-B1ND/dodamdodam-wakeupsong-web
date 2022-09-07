import axios from "axios";
import config from "config/config.json";
import cookie from "lib/cookie/cookie";

const customAxios = axios.create({
  baseURL: config.SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
    ["Authorization"]: `Bearer ${cookie.getCookie("access-token")}`,
  },
});

export default customAxios;
