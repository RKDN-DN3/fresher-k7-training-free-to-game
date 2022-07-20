import { createSlice } from '@reduxjs/toolkit';
export interface ReduxState {
  language: 'vi' | 'en';
}

const initialState: ReduxState = {
  language: 'vi',
};

export const ReduxSlice = createSlice({
  name: 'redux',
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
      console.log(state);
    },
  },
});

export const { changeLanguage } = ReduxSlice.actions;

export default ReduxSlice.reducer;
