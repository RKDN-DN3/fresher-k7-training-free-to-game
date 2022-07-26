import { Container as ContainerStyle } from 'styles/components/style';
import styled from 'styled-components';
import { width } from 'styles/theme';

export const Container = styled(ContainerStyle)`
  width: ${width};
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
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
