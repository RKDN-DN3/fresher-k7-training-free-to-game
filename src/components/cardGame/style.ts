import { secondaryColor } from './../../styles/theme/index';
import { whiteColor } from 'styles/theme';
import styled from 'styled-components';

export const CardGameContainer = styled.div`
  position: relative;
  background-color: ${secondaryColor};
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
export const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const Button = styled.button`
  background-color: #4799eb;
  border: none;
  border-radius: 5px;
  padding: 8px;
  color: ${whiteColor};
  font-size: 11px !important;
  font-weight: 700;
  cursor: pointer;
`;

export const Img = styled.img``;

export const ButtonAlone = styled(Button)`
  position: absolute;
  right: 15px;
  bottom: 15px;
`;
