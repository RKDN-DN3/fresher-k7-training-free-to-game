import styled from 'styled-components';
import { width } from 'styles/theme';

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

export const ContentLeft = styled.div`
  flex: 2;
`;

export const ContentRight = styled.div``;
