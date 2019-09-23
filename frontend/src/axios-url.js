import axios from 'axios';

const defaultOptions = {
  baseURL: 'http://localhost:8080/api/',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
};

let instance = axios.create(defaultOptions);

// instance.interceptors.request.use(function(config) {
//   const token = localStorage.getItem('user');
//   config.headers.Authorization = token ? `Bearer ${token}` : '';
//   return config;
// });

export default instance;
