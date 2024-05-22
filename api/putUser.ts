import axios from "axios";
import getCookie from "@/hooks/getCookie";

async function putUser(userData: { name: string; breed: string }) {
  const accessToken = getCookie("accessToken");

  const axiosInstance = axios.create({
    baseURL: "http://14.39.203.129:13000",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  try {
    const response = await axiosInstance.put(`/user`, userData);
    return response;
  } catch (error) {
    return error;
  }
}

export default putUser;
