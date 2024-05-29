import createAxiosInstance from "./settings/axiosInstance";

async function deleteScrap(id: any) {
  const axiosInstance = createAxiosInstance();
  try {
    const response = await axiosInstance.delete(
      `/product/scrap?productId=${id}`
    );
    return response;
  } catch (error) {
    return error;
  }
}

export default deleteScrap;
