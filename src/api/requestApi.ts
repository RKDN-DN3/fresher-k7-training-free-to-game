import axiosClient from './axiosClient';

const requestApi = {
  getAllGame: (sortBy: string) => {
    return axiosClient.get('/games', {
      params: { 'sort-by': sortBy, platform: 'browser' },
    });
  },
};

export default requestApi;
