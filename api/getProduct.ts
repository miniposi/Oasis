import axiosInstance from "./settings/axiosInstance";

async function getProduct(id: any) {
  try {
    const response = await axiosInstance.get(`/product/detail?productId=${id}`);
    return response;
  } catch (error) {
    return error;
  }
}

export default getProduct;
