import React from 'react';
import { STATUS_SUCCESS, API_HOST, API_KEY } from 'constants/constants.d';
import { Filter } from './type';
import { Game } from 'types';
import axios from 'axios';
import _ from 'lodash';

type Response = {
  games: Game[];
  error: string;
  isLoading: boolean;
};

const useFetch = (params: Filter): Response => {
  const [games, setGames] = React.useState<Game[]>([]);
  const [err, setErr] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { platform, genre, tag, sortBy } = params;

  React.useEffect(() => {
    if (!_.isEmpty(params)) {
      setIsLoading(true);
      let urlFetch = '/games';
      if (tag) {
        urlFetch = 'filter';
      }
      axios
        .get(urlFetch, {
          baseURL: `https://${API_HOST}/api`,
          headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': API_HOST,
          },
          params: {
            platform: platform,
            category: genre,
            tag: tag,
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
