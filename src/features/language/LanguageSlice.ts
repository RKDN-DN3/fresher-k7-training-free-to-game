import { EN } from 'constants/constants.d';
import { PayloadType } from 'types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LanguageState } from 'types';
const localStorageLang = localStorage.getItem('language');

const initialState: LanguageState = {
  language: localStorageLang ? localStorageLang : EN,
};

export const LanguageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (
      state: LanguageState,
      action: PayloadAction<PayloadType>,
    ) => {
      state.language = action.payload;
      localStorage.setItem('language', action.payload);
    },
  },
});

export const { changeLanguage } = LanguageSlice.actions;

export default LanguageSlice.reducer;
