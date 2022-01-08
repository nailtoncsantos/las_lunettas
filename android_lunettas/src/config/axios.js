import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.0.103:8080',
  timeout: 9000,
});
export {api};
