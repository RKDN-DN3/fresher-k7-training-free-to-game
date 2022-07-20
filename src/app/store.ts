import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reduxReducer from '../features/counter/ReduxSlice';

export const store = configureStore({
  reducer: {
    counter: reduxReducer,
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
