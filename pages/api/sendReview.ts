import axiosInstance from "./settings/axiosInstance";

async function sendReview(Props: any) {
  const formData = new FormData();
  formData.append("productId", Props.productId);
  formData.append("content", Props.content);
  formData.append("score", Props.score);
  formData.append("photos", Props.photos);

  try {
    const response = await axiosInstance.post("/review", formData);
    return response.data;
  } catch (error) {
    console.error("Error sending review:", error);
    throw error;
  }
}

export default sendReview;
