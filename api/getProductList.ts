import axiosInstance from "./settings/axiosInstance";

async function getProductList(pcg: any, scg: any, dcg: any) {
  try {
    const response = await axiosInstance.get(
      `/product?pcg=${pcg}&scg=${scg}&dcg=${dcg}&offset=0&limit=60`
    );
    return response;
  } catch (error) {
    return error;
  }
}

export default getProductList;
