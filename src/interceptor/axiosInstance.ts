import axiosClient from 'axios';
import type { AxiosRequestConfig } from 'axios';
import { AxiosResponse } from 'axios';

/**
 * Intercepts an Axios 'request' to add the Authorization header
 */
axiosClient.interceptors.request.use(
  async function (config) {
    // set the domain for the api calls
    config.baseURL = `${process.env.REACT_APP_BASE_URL}`;
  
    config.headers!['Content-Type'] = 'application/json; charset=utf-8';
    config.headers!.Accept = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

/**
 * Handle all responses. It is possible to add handlers
 * for requests, but it is omitted here for brevity.
 */
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },

  async (err) => {
    const error = await err;
    const {
      response: {
        status,
        data: { message }
      }
    } = error;
 
    

    return Promise.reject(message);
  }
);

/**
 * Replaces main `axios` instance with the custom-one.
 * @param cfg - Axios configuration object.
 * @returns A promise object of a response of the HTTP request with the 'data' object already
 * destructured.
 */
const axios = <T>(cfg: AxiosRequestConfig) => axiosClient.request<any, T>(cfg);

export default axios;
