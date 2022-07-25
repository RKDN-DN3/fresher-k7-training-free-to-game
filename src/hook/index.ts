import { STATUS_SUCCESS } from 'constants/constants.d';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Game } from 'types';
import { API_HOST, API_KEY } from 'constants/constants.d';
import { Filter } from './type';
import _ from 'lodash';

type Response = {
  games: Game[];
  error: string;
  isLoading: boolean;
};

const useFetch = (params: Filter): Response => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { platform, genre, tag, sortBy } = params;

  useEffect(() => {
    if (!_.isEmpty(params)) {
      setIsLoading(true);
      axios
        .get('/games', {
          baseURL: `https://${API_HOST}/api`,
          headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': API_HOST,
          },
          params: {
            platform,
            category: genre,
            tag,
            'sort-by': sortBy,
          },
        })
        .then((res) => {
          if (res && res.status === STATUS_SUCCESS) {
            setGames(res.data);
            setIsLoading(false);
          }
        })
        .catch((e) => setErr(e.message));
    }
  }, [platform, genre, tag, sortBy, params]);

  return {
    games,
    error: err,
    isLoading: isLoading,
  };
};

export default useFetch;
