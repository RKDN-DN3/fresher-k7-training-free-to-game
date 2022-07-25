import { subColor } from './../../styles/theme/index';
import styled from 'styled-components';
import { secondaryTextColor } from 'styles/theme';

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  color: ${secondaryTextColor};
  box-sizing: border-box;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const Select = styled.select`
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Option = styled.option`
  background-color: ${subColor};
  padding: 10px;
`;
