import styled from 'styled-components';

type styleProps = {
  column?: boolean;
};

export const RecommendContent = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-direction: ${({ column }: styleProps) => (column ? 'column' : 'row')}; ;
`;
