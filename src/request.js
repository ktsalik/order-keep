import axios from "axios";

const request = axios.create({
  baseURL: 'https://tsalikidis.dev/customers-manager/',
});

export default request;