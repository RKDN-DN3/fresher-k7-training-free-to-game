import { Game } from './../../types/index';
import { getGamesRelease, getGamesRelevance, getGamePopularity, getGameFailed } from './GameSlice';

const getAllGameReleaseRedux = async (dispatch: any, data: Game[], error: any) => {
  if (!error) {
    dispatch(getGamesRelease(data));
  } else {
    dispatch(getGameFailed());
  }
};

const getGamesRelevanceRedux = async (dispatch: any, data: Game[]) => {
  dispatch(getGamesRelevance(data));
};

const getGamePopularityRedux = async (dispatch: any, data: Game[]) => {
  dispatch(getGamePopularity(data));
};
export { getAllGameReleaseRedux, getGamesRelevanceRedux, getGamePopularityRedux };
