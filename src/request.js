import axios from "axios";

const request = axios.create({
  baseURL: 'https://arxagelwn.gr/backoffice/',
});

export default request;