import axios from "axios";

const request = axios.create({
  baseURL: 'http://localhost/backoffice/',
});

export default request;