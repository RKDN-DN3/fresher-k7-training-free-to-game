import { secondaryTextColor } from './../../styles/theme/index';
import { primaryTextColor, whiteColor } from 'styles/theme';
import styled from 'styled-components';

type PropsStyle = {
  outline?: boolean;
};

export const ButtonPrimaryStyled = styled.button`
  border: none;
  height: 48px;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#4799eb),
    color-stop(60%, #4799eb),
    to(#49acff)
  );
  &:hover {
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#358de6),
      color-stop(40%, #358de6),
      to(#2174b9)
    );
  }
`;

export const ButtonOutlineStyled = styled.button`
  border: 1px solid ${secondaryTextColor};
  height: 48px;
  color: ${secondaryTextColor};
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    border-color: ${whiteColor};
    color: ${whiteColor};
  }
`;
