import axios from "axios";
import getCookie from "@/hooks/getCookie";

async function getUser() {
  const accessToken = getCookie("accessToken");

  const axiosInstance = axios.create({
    baseURL: "http://14.39.203.129:13000",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  try {
    const response = await axiosInstance.get(`/user`);
    return response;
  } catch (error) {
    return error;
  }
}

export default getUser;
