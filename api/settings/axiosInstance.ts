import axios from "axios";
import config from "@/config";
import getCookie from "@/hooks/getCookie";

function createAxiosInstance() {
  const accessToken = getCookie("accessToken");

  return axios.create({
    baseURL: config.baseURL,
    headers: { Authorization: `Bearer ${accessToken}` },
  });
}

export default createAxiosInstance;
