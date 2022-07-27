import { STATUS_SUCCESS } from 'constants/constants.d';
import axiosClient from './axiosClient';

const requestApi = {
  getGame: async (id: string | null) => {
    let data = {};
    const res = await axiosClient.get('/game', {
      params: { id: id },
    });
    if (res && res.status === STATUS_SUCCESS) {
      data = res.data;
    }
    return data;
  },
};

export default requestApi;
