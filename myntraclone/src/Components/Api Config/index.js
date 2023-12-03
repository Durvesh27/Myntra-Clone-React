import axios from "axios";

const token = JSON.parse(localStorage.getItem("Token1"));
if (token) {
  var api = axios.create({
    baseURL: "https://myntra-react-clone.onrender.com/api/v1",
    headers: { Authorization: `Bearer${token}` },
  });
} else {
  var api = axios.create({
    baseURL: "https://myntra-react-clone.onrender.com/api/v1",
  });
}
export default api;
