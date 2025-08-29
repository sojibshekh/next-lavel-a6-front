import config from '@/config';
import axios from 'axios'



export const axiosInstant = axios.create({
  baseURL: config.baseUrl,
  withCredentials: true,
});


// Add a request interceptor
axiosInstant.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('request from axios instant', config);
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  },

);

// Add a response interceptor
axiosInstant.interceptors.response.use(function onFulfilled(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    console.log('response from axios instant', response);
    return response;
  }, function onRejected(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
