import axiosInstance from "./settings/axiosInstance";

async function postLogin(authCode: string | null) {
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
