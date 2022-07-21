import { secondaryColor, secondaryTextColor } from './../../styles/theme/index';
import { whiteColor } from 'styles/theme';
import styled from 'styled-components';
import { ReactComponent as IconWindow } from 'assets/icons/IconWindow.svg';
import { ReactComponent as IconSave } from 'assets/icons/IconSave.svg';

export const CardGameContainer = styled.div`
  display: flex;
  padding: 20px;
  background-color: ${secondaryColor};
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.1s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;
export const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  flex: 1;
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
export const Img = styled.img`
  height: 90px;
`;

export const Des = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 5px;
`;

export const ButtonType = styled(Button)`
  display: flex;
  align-items: center;
  background-color: ${secondaryTextColor};
  height: 18px;
  width: 90px;
`;

export const TitleDes = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: ${secondaryTextColor};
`;

export const IconSa = styled(IconSave)`
  width: 20px;
  margin-right: 35px;
  path {
    fill: ${secondaryTextColor} !important;
  }
`;

export const IconWin = styled(IconWindow)`
  width: 20px;
  margin-right: 35px;
  path {
    fill: ${secondaryTextColor} !important;
  }
`;
