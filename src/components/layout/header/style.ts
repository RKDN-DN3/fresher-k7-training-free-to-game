import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { primaryColor, primaryTextColor, width } from 'styles/theme';
import { breakpoints } from 'styles/breakpoints';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  color: ${primaryTextColor};
  height: 55px;
  background-color: ${primaryColor};
  @media (min-width: ${breakpoints.tablet}) {
    white-space: nowrap;
  }
`;
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  width: ${width};
  color: ${primaryTextColor};
  height: 55px;
  background-color: ${primaryColor};
  @media (min-width: ${breakpoints.tablet}) {
    white-space: nowrap;
  }
`;

export const Img = styled.img`
  height: 45px;
`;

export const Left = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0;
  margin: 0;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
`;
// export const StyledLink = styled(Link)`
//   width: 100%;
//   display: inline-block;
//   background-color: ${secondaryColor};
//   border-radius: 4px;
//   text-decoration: none;
// `;

// export const Title = styled.h2`
//   margin: 0;
//   font-size: 24px;
//   font-weight: 510;
//   color: ${primaryTextColor};
//   @media (min-width: ${breakpoints.tablet}) {
//     overflow: hidden;
//     text-overflow: ellipsis;
//   }
// `;

// export const Details = styled.div`
//   padding: 20px;
//   @media (min-width: ${breakpoints.tablet}) {
//     white-space: nowrap;
//   }
// `;

// export const Description = styled.p`
//   font-size: 16px;
//   color: ${secondaryTextColor};
//   @media (min-width: ${breakpoints.tablet}) {
//     overflow: hidden;
//     text-overflow: ellipsis;
//   }
// `;

// export const Icon = styled.img`
//   width: 20px;
//   height: 20px;
//   margin-right: 8px;
// `;

// export const Genre = styled.p`
//   padding: 2px 4px;
//   margin: 0 8px 0 0;
//   border-radius: 4px;
//   font-size: 12px;
//   font-weight: bold;
//   color: ${tertiaryTextColor};
//   background-color: ${backgroundColor};
//   float: right;
// `;
