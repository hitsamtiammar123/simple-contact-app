import axios from 'axios';

const api = axios.create({
  baseURL: 'https://simple-contact-crud.herokuapp.com',
  timeout: 10000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*'
  },
});

export default api;