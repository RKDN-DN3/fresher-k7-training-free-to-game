import { Game } from 'types/index';
import {
  getGameRelease,
  getGameRelevance,
  getGamePopularity,
  getGameFilter,
} from './GameSlice';

const dispatchGameRelease = async (dispatch: any, data: Game[]) => {
  dispatch(getGameRelease(data));
};

const dispatchGameRelevance = (dispatch: any, data: Game[]) => {
  dispatch(getGameRelevance(data));
};

const dispatchGamePopularity = (dispatch: any, data: Game[]) => {
  dispatch(getGamePopularity(data));
};

const dispatchGameFilter = (dispatch: any, data: Game[]) => {
  dispatch(getGameFilter(data));
};

export {
  dispatchGameRelease,
  dispatchGameRelevance,
  dispatchGamePopularity,
  dispatchGameFilter,
};
