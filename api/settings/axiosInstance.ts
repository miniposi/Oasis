import axios from 'axios';
import getCookie from '@/hooks/getCookie';

function createAxiosInstance() {
  const accessToken = getCookie("accessToken");

  return axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: { Authorization: `Bearer ${accessToken}` },
  });
}

export default createAxiosInstance;