import axios from 'axios';

export const AxiosInstance = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    key: '294249d3-584d-4d4a-b157-38cb630692ed',
  },
});