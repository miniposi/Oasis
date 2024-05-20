import axiosInstance from "./settings/axiosInstance";

async function getRandomKey() {
  try {
    const response = await axiosInstance.get(`/auth/token`);
    return response;
  } catch (error) {
    return error;
  }
}

export default getRandomKey;
