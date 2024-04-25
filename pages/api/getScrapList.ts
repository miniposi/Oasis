import axiosInstance from "./settings/axiosInstance";

async function getScrapList() {
  try {
    const response = await axiosInstance.get(
      `/product/scrap?offset=0&limit=20`
    );
    return response;
  } catch (error) {
    return error;
  }
}

export default getScrapList;
