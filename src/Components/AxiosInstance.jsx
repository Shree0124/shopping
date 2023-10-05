import axios from "axios";
let axiosInstance = axios.create({
  baseURL: "http://localhost:4321/",
});
export default axiosInstance;
