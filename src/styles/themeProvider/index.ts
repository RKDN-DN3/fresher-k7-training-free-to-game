import { secondaryColor } from 'styles/theme/index';
import { hoverColorWhite, subColor } from './../theme/index';
import {
  primaryColor,
  primaryTextColor,
  whiteColor,
  black_1,
  secondaryTextColor,
} from 'styles/theme';
import theme from 'styled-theming';

export const backgroundColor = theme('theme', {
  light: `${whiteColor}`,
  dark: `${primaryColor}`,
});

export const textColor = theme('theme', {
  light: `${black_1}`,
  dark: `${primaryTextColor}`,
});

export const textHoverColor = theme('theme', {
  light: `${secondaryTextColor}`,
  dark: `${whiteColor}`,
});

export const backgroundHoverColor = theme('theme', {
  light: `${hoverColorWhite}`,
  dark: `${black_1}`,
});

export const backgroundMenuSubColor = theme('theme', {
  light: `${whiteColor}`,
  dark: `${subColor}`,
});

export const cardMenuColor = theme('theme', {
  light: `${whiteColor}`,
  dark: `${secondaryColor}`,
});

export const CommunityItemColor = theme('theme', {
  light: `${whiteColor}`,
  dark: `${black_1}`,
});
