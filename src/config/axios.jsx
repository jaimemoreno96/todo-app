import axios from "axios";

const URL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: URL
});

export default api;
