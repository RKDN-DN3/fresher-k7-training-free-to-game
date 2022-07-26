import { primaryTextColor, borderColor } from './../../styles/theme/index';
import { subColor, width, secondaryTextColor } from 'styles/theme/index';
import { textHoverColor } from './../../styles/themeProvider/index';
import { secondaryColor } from 'styles/theme/index';
import { textColor } from 'styles/themeProvider';
import styled from 'styled-components';
import { Breadcrumbs as BreadcrumbsStyle } from '@mui/material';

import HeaderTitle from 'components/headerTitle';

export const DetailContainer = styled.div`
  height: 300vh;
  display: flex;
  width: ${width};
  margin: 20px auto 0 auto;
  color: ${textColor};
  .detail-right {
    flex: 2;
    color: white;
    z-index: 1;
  }
  .detail-left {
    flex: 1;
    img {
      width: 356px;
    }
  }
  .detail-card {
    z-index: 1;
    position: fixed;
    top: 80px;
  }
`;

export const Breadcrumbs = styled(BreadcrumbsStyle)`
  .MuiTypography-root,
  nav,
  li {
    font-size: 12px;
    color: ${textColor};
    cursor: pointer;
  }
  .MuiTypography-root {
    cursor: auto;
    color: ${secondaryTextColor};
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

export const H4 = styled.h4`
  color: ${primaryTextColor};
  border-bottom: 0.5px solid ${borderColor};
  padding-bottom: 10px;
`;

export const Text = styled.p`
  color: ${primaryTextColor};
  margin-bottom: 50px;
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

export const HeaderTitleStyled = styled(HeaderTitle)``;

export const InformationTitle = styled.div`
  border-bottom: 0.5px solid ${borderColor} !important;
  padding-bottom: 10px;
`;

export const Screenshots = styled.div`
  display: flex;
  margin: 15px 0;
  img {
    width: 168px;
  }
`;
