import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const fakeapi = {
  get: (url) => axios.get(`${BASE_URL}${url}`),
};

export default fakeapi;