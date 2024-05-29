import createAxiosInstance from "./settings/axiosInstance";

async function getRandomKey() {
  const axiosInstance = createAxiosInstance();
  try {
    const response = await axiosInstance.get(`/auth/token`);
    return response;
  } catch (error) {
    return error;
  }
}

export default getRandomKey;
