import createAxiosInstance from "./settings/axiosInstance";

async function getScrapList() {
  const axiosInstance = createAxiosInstance();
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
