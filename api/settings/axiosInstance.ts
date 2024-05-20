import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://14.39.203.129:13000",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNhZTVkMjY4LTc4YTItNDQ2MS04MzA5LWEwMWM1YmU2ZDhjMiIsImlhdCI6MTcxNTc5MzY3NywiZXhwIjoxNzE2Mzk4NDc3fQ.I-USqP24Ys0K_mbNYBnuNmDDx7rnPgKD5cpL0kDSr68`,
  },
});

export default axiosInstance;
