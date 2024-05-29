import createAxiosInstance from "./settings/axiosInstance";

async function postScrap(id: any) {
  const axiosInstance = createAxiosInstance();
  try {
    const response = await axiosInstance.post(`/product/scrap?productId=${id}`);
    return response;
  } catch (error) {
    return error;
  }
}

export default postScrap;
