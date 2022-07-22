import { API_HOST, API_KEY } from './../constants/constants.d';
import axios from 'axios';
export const fetchDataDispatch = async (setDispatch: any, sortBy: string, dispatch: any) => {
  try {
    const res = await axios.get('/games', {
      baseURL: `https://${API_HOST}/api`,
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST,
      },
      params: {
        'sort-by': sortBy,
      },
    });
    if (res) {
      setDispatch(dispatch, res.data);
    }
  } catch (error) {
    console.log(error);
  }
};
