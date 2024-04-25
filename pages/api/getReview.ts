import axiosInstance from "./settings/axiosInstance";

async function getReview(id: any) {
  try {
    const response = await axiosInstance.get(
      `/review?productId=${id}&offset=0&limit=20`
    );
    return response;
  } catch (error) {
    return error;
  }
}

export default getReview;
