import axios from "axios";

// create base url For reusable our proj  if all api changed
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

// create http for reusable if we decide change axios method
const http = {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
};
export default http;
