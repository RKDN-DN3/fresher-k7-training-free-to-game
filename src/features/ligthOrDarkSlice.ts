import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
  isLight: boolean;
};

const initialState: State = {
  isLight: false,
};

export const LightOfDark = createSlice({
  name: 'lightOfDark',
  initialState,
  reducers: {
    setIsLightRedux: (state: State, action: PayloadAction<boolean>) => {
      state.isLight = action.payload;
    },
  },
});

export const { setIsLightRedux } = LightOfDark.actions;

export default LightOfDark.reducer;
