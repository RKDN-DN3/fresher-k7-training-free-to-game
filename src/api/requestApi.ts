import axiosClient from './axiosClient';

const requestApi = {
  getGame: (id: any) => {
    return axiosClient.get('/game', {
      params: { id: id },
    });
  },
};

export default requestApi;
