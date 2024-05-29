import createAxiosInstance from "./settings/axiosInstance";

async function getUser() {
  const axiosInstance = createAxiosInstance();
  try {
    const response = await axiosInstance.get(`/user`);
    return response;
  } catch (error) {
    return error;
  }
}

export default getUser;
