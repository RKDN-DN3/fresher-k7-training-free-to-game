import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import LightOfDarkReducer from 'features/ligthOrDarkSlice';
import gamesReducer from 'features/games/GameSlice';
import reduxReducer from 'features/language/LanguageSlice';

export const store = configureStore({
  reducer: {
    lang: reduxReducer,
    games: gamesReducer,
    lightOfDark: LightOfDarkReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
