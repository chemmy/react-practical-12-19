import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const fakeapi = {
  get: (url) => axios.get(`${BASE_URL}${url}`),
  post: (url, data) => axios.post(`${BASE_URL}${url}`, data),
  delete: (url) => axios.delete(`${BASE_URL}${url}`),
};

export default fakeapi;