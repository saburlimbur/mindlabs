import axios from "axios";

const axiosInstace = axios.create({
  baseURL: "https://quizapi.io/api/v1",
  timeout: 9000,
});

axiosInstace.interceptors.request.use(
  (config) => {
    const apiKey = import.meta.env.VITE_QUIZ_API_KEY; //querystring param
    // console.log("apiKey:", apiKey);

    if (apiKey) {
      config.headers["x-api-key"] = apiKey; // http header
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstace;
