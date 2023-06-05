import axios from "axios";

const request = axios.create({
  baseURL: 'http://localhost/customers-manager/',
});

export default request;