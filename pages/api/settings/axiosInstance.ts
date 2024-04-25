import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://14.39.203.129:13000",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIyM2JiZjZhLTg3ODktNTEyMS1hZjI4LWRhYjgxNWI2YjkxNiIsImlhdCI6MTcxMzg4MjkzMCwiZXhwIjoxNzE0NDg3NzMwfQ.CxSFY20PV6RFCRZtOwD0yj-Ezbf7S8y1nXqQ1qiBkkk`,
  },
});

export default axiosInstance;
