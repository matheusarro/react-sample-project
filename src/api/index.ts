import axios, { AxiosResponse } from 'axios';

import { AUTH_METHOD } from '@/constants';
import { getStoredToken } from '@/utils/auth';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
});

api.interceptors.request.use((config) => {
  const token = getStoredToken();
  const ngrok = import.meta.env.VITE_ACTIVE_NGROK as string;

  config.headers['Content-Type'] = 'application/json';

  if (ngrok === 'TRUE') {
    config.headers['ngrok-skip-browser-warning'] = '1';
  }

  if (token) {
    config.headers.Authorization = `${AUTH_METHOD} ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response.data as AxiosResponse<string, unknown>;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const request = api;
