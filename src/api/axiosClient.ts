import { API_HOST, API_KEY } from 'constants/constants.d';
import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: `https://${API_HOST}/api`,
  headers: {
    'Content-Type': 'application/json',
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': API_HOST,
  },
  paramsSerializer: (params) => queryString.stringify({ ...params }),
});

export default axiosClient;
