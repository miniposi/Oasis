import axiosInstance from "./settings/axiosInstance";

async function getUser() {
  try {
    const response = await axiosInstance.get(`/user`);
    return response;
  } catch (error) {
    return error;
  }
}

export default getUser;
