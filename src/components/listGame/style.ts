import { breakpoints } from 'styles/breakpoints';
import styled from 'styled-components';

type styleProps = {
  column?: boolean;
  limit?: number | null;
};

export const RecommendContent = styled.div`
  display: flex;
  gap: 15px;
  justify-content: flex-start;
  flex-direction: ${({ column }: styleProps) => (column ? 'column' : 'row')};
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    justify-content: center;
  }
`;
