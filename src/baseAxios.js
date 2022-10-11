import axios from "axios";
import { API_URL } from "./constant";

axios.defaults.baseURL = API_URL;

// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response.status === 401) {
//     }
//     return error;
//   }
// );

export default axios;
