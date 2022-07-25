import { subColor, primaryTextColor } from './../../styles/theme/index';
import { textHoverColor } from './../../styles/themeProvider/index';
import { secondaryColor } from 'styles/theme/index';
import { textColor } from 'styles/themeProvider';
import styled from 'styled-components';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import AddBoxIcon from '@mui/icons-material/AddBox';

export const DetailContainer = styled.div`
  color: ${textColor};
  height: 100vh;
  display: flex;
  position: relative;
  z-index: 1;
  width: 100%;
  padding-right: 21%;
  padding-left: 21%;
  margin-right: auto;
  margin-left: auto;
  .detail-right {
    flex: 1;
  }
  .detail-left {
    z-index: 1;
    position: fixed;
    top: 80px;
    img {
      width: 356px;
    }
  }
`;

export const BackGroundImgStyled = styled.div`
  height: 38rem !important;
  background: url('https://www.freetogame.com/g/365/background.webp');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  right: 0;
  top: 0rem;
  z-index: 1;
  opacity: 0.5;
  .detail-gradient {
    background: linear-gradient(
        90deg,
        #292e33 0%,
        rgba(35, 46, 46, 0.1) 16.15%,
        rgba(35, 46, 46, 0.1) 80.21%,
        #292e33 100%
      ),
      linear-gradient(
        180deg,
        rgb(39, 43, 48) 0%,
        rgba(0, 0, 0, 0.58) 33.85%,
        #292e33 100%
      );
    height: 101% !important;
  }
`;

export const ActionStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding: 20px 0;
  .detail-free {
    width: 65px;
    height: 48px;
    background-color: ${secondaryColor};
    border-radius: 5px;
    cursor: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: ${subColor};
      color: ${textHoverColor};
    }
  }
  button {
    flex: 1;
    font-weight: 700;
  }
`;

export const GroupBtn = styled.div`
  background-color: ${secondaryColor};
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 5px !important;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  color: ${textColor};

  &:hover {
    color: ${textHoverColor};
    background-color: ${subColor};
  }
  span {
    font-size: 12px;
  }
`;

export const Smile = styled(SentimentSatisfiedAltIcon)`
  color: #62c462;
`;

export const Neutral = styled(SentimentNeutralIcon)`
  color: ${primaryTextColor};
`;

export const SadFace = styled(SentimentVeryDissatisfiedIcon)`
  color: #ee5f5b;
`;

export const AddBox = styled(AddBoxIcon)`
  color: #5bc0de;
`;
