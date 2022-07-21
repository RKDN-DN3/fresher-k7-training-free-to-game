import styled from 'styled-components';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { primaryColor, primaryTextColor, width, whiteColor } from 'styles/theme';
import { breakpoints } from 'styles/breakpoints';
import { MenuItem, Popover, Select } from '@mui/material';
import { ReactComponent as IconVi } from 'assets/icons/IconVi.svg';

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
  justify-content: space-between;
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
  cursor: pointer;
  &:hover {
    color: ${whiteColor};
  }
`;

export const IconDropDown = styled(ArrowDropDownIcon)`
  font-size: 50px;
`;
export const Dropdown = styled(Popover)`
  width: 100%;
`;

export const Item = styled(MenuItem)`
  width: 100%;
`;

export const SelectStyled = styled(Select)`
  border-radius: 5px;
  padding: 3px;
  height: 25px;
  background-color: transparent;
  color: ${whiteColor} !important;
  font-size: 12px !important;
  fieldset {
    border: none;
  }
  svg {
    color: ${whiteColor} !important;
  }
  .MuiSelect-select {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .MuiPaper-root {
    top: 50px !important;
  }
`;

export const ItemSelect = styled(MenuItem)`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px !important;
  height: 25px;
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
