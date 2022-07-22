import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import gamesReducer from './../features/games/GameSlice';
import reduxReducer from '../features/language/LanguageSlice';

export const store = configureStore({
  reducer: {
    lang: reduxReducer,
    games: gamesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
