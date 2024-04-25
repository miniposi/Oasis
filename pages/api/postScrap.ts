import axiosInstance from "./settings/axiosInstance";

async function postScrap(id: any) {
  try {
    const response = await axiosInstance.post(`/product/scrap?productId=${id}`);
    return response;
  } catch (error) {
    return error;
  }
}

export default postScrap;
