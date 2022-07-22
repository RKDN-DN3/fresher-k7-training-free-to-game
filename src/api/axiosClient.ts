import axios from 'axios';
import { API_HOST } from 'constants/constants.d';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: `https://${API_HOST}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify({ ...params }),
});

export default axiosClient;
