import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
  isLight: boolean;
  isSearch: boolean;
};

const initialState: State = {
  isLight: false,
  isSearch: false,
};

export const ActionHeader = createSlice({
  name: 'lightOfDark',
  initialState,
  reducers: {
    setIsLightRedux: (state: State, action: PayloadAction<boolean>) => {
      state.isLight = action.payload;
    },
    setIsSearchRedux: (state: State, action: PayloadAction<boolean>) => {
      state.isSearch = action.payload;
    },
  },
});

export const { setIsLightRedux, setIsSearchRedux } = ActionHeader.actions;

export default ActionHeader.reducer;
