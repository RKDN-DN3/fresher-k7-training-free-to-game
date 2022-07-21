import styled from 'styled-components';
import { primaryColor, whiteColor, subColor, primaryTextColor } from 'styles/theme';
import { MenuItem, Select } from '@mui/material';
export const SelectStyled = styled(Select)`
  border-radius: 5px;
  padding: 3px;
  height: 25px;
  background-color: transparent;
  color: ${whiteColor} !important;
  font-size: 12px !important;
  fieldset {
    border: none;
  }
  .MuiSvgIcon-root {
    display: none;
  }
  .MuiSelect-select {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .MuiList-root {
    padding: 0;
  }
  .MuiPaper-root {
    top: 58px !important;
    background-color: transparent;
  }
`;

export const ItemSelect = styled(MenuItem)`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px !important;
  height: 25px;
  background-color: ${subColor} !important;
  color: ${whiteColor} !important;
  &:hover {
    background-color: ${primaryColor} !important;
  }
`;
