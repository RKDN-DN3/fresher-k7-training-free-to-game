import { Link as LinkStyle } from 'react-router-dom';
import styled from 'styled-components';
import { primaryTextColor } from 'styles/theme';

export const Container = styled.div`
  color: ${primaryTextColor};
`;

export const H3 = styled.h3`
  color: ${primaryTextColor};
  font-size: 20px;
  margin: 0;
  font-weight: 500;
`;

export const Link = styled(LinkStyle)`
  text-decoration: none;
`;
