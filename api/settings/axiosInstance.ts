import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://14.39.203.129:13000",
});

export default axiosInstance;
