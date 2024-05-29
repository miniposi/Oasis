import createAxiosInstance from "./settings/axiosInstance";

async function putUser(userData: { name: string; breed: string }) {
  const axiosInstance = createAxiosInstance();
  try {
    const response = await axiosInstance.put(`/user`, userData);
    return response;
  } catch (error) {
    return error;
  }
}

export default putUser;
