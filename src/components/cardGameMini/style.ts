import {
  cardMenuColor,
  textColor,
  backgroundHoverColor,
} from './../../styles/themeProvider/index';
import { buttonColor } from 'styles/theme/index';
import {
  secondaryColor,
  secondaryTextColor,
  black_1,
} from 'styles/theme/index';
import { whiteColor } from 'styles/theme';
import styled from 'styled-components';
import { ReactComponent as IconWindow } from 'assets/icons/IconWindow.svg';
import { ReactComponent as IconSave } from 'assets/icons/IconSave.svg';

export const CardGameContainer = styled.div`
  display: flex;
  padding: 20px;
  background-color: ${cardMenuColor};
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
  background-color: ${buttonColor};
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
  justify-content: center;
  background-color: ${secondaryTextColor};
  height: 18px;
  width: 80px;
`;

export const TitleDes = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: ${secondaryTextColor};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 380px;
`;

export const IconSa = styled(IconSave)`
  width: 18px !important;
  height: 18px !important;
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

export const CardGameMiniViewGamesStyled = styled.div`
  .cardGameMini {
    flex-direction: column;
    width: 270px;
    height: 280px;
    padding: 0;
    img {
      flex: 1;
      height: 152px;
    }
    .card-game-mini_des-container {
      display: flex;
      flex-direction: column;
      padding: 20px;
    }
    .card-game-mini_des {
      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .card-game-mini_battle {
      display: flex;
      justify-content: flex-end;
      gap: 5px;
      margin-top: 15px;

      svg {
        margin: 0;
        width: 15px;
        height: 15px;
      }
      button {
        height: 13px;
        min-width: 90px;
        color: ${backgroundHoverColor};
      }
    }
    .card-game-mini_name {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5px;
      h3 {
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20px;
        font-size: 9px !important;
        min-width: 55px;
      }
    }
  }
`;
