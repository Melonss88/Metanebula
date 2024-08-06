import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const createAxiosInstance = (baseURL) => {
  const instance = axios.create({
    baseURL,
    timeout: 10000,
    withCredentials: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json"
    }
  });
  return instance;
};

const axiosInstance = createAxiosInstance(API_BASE_URL);

export { axiosInstance };
