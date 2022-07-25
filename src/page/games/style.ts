import { textColor } from 'styles/themeProvider';
import styled from 'styled-components';
import { width } from 'styles/theme';
import { TextField as TextFieldStyle } from '@mui/material';
import { SearchIconStyled } from 'components/layout/header/style';

export const Container = styled.div`
  background-color: red !important;
  width: ${width};
  margin: auto;
`;

export const ContentGame = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 50px;
`;

export const TextField = styled(TextFieldStyle)`
  height: 46px;
  width: 425px;
  color: ${textColor} !important;
  input {
    color: ${textColor} !important;

    padding: 15px;
    ::placeholder {
      color: ${textColor} !important;
      font-size: 20px;
    }
    caret-color: ${textColor};
  }
  fieldset {
    border: none;
  }
`;

export const SearchStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
  .games_search-icon-title {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
  }
`;

export const SearchIcon = styled(SearchIconStyled)`
  font-size: 30px !important;
  margin: 0;
`;
