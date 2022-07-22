import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Games, Game } from '../../types';

const initialState: Games = {
  listGamesRelease: [],
  listGamesRelevance: [],
  listGamesPopularity: [],
  loading: false,
  failed: false,
};

export const GameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    getGamesRelease: (state: Games, action: PayloadAction<Game[]>) => {
      state.listGamesRelease = action.payload;
      state.loading = false;
    },
    getGamesRelevance: (state: Games, action: PayloadAction<Game[]>) => {
      state.listGamesRelevance = action.payload;
      state.loading = false;
    },
    getGamePopularity: (state: Games, action: PayloadAction<Game[]>) => {
      state.listGamesPopularity = action.payload;
      state.loading = false;
    },
    getGameFailed: (state: Games) => {
      state.failed = true;
    },
  },
});

export const { getGamesRelevance, getGamesRelease, getGamePopularity, getGameFailed } = GameSlice.actions;

export default GameSlice.reducer;
