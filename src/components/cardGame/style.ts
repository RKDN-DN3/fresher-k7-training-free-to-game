import styled from 'styled-components';

export const CardGameContainer = styled.div`
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  border-radius: 3px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
export const Name = styled.div`
  padding: 20px;
`;
