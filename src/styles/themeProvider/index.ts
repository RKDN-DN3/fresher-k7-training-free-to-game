import theme from 'styled-theming';
import {
  secondaryColor,
  hoverColorWhite,
  subColor,
  gradientBackGroundColorLight,
  gradientBackGroundColorDark,
  primaryColor,
  primaryTextColor,
  whiteColor,
  black_1,
  secondaryTextColor,
} from 'styles/theme';

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

export const gradientColor = theme('theme', {
  light: `${gradientBackGroundColorLight}`,
  dark: `${gradientBackGroundColorDark}`,
});
