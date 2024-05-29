import axios from "axios";
import config from "@/config";

async function postLogin(authCode: string | null) {
  const axiosInstance = axios.create({
    baseURL: config.baseURL,
  });
  try {
    const response = await axiosInstance.post("/auth/google/login", {
      authCode: authCode,
    });
    return response;
  } catch (error) {
    return error;
  }
}

export default postLogin;
