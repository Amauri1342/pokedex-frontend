import axios from 'axios';
// config
// import { HOST_API_KEY } from './config';

// ----------------------------------------------------------------------


const API_URL = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({ baseURL: API_URL  });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);


export default axiosInstance;
