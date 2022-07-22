import styled from 'styled-components';
import { width, primaryColor } from 'styles/theme';
import { breakpoints } from 'styles/breakpoints';

export const DefaultLayoutContainer = styled.div`
  background-color: ${primaryColor};
`;
export const Content = styled.div`
  width: ${width};
  margin: 50px auto;
`;
