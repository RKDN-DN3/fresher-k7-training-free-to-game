import React from 'react';
import { ButtonPrimary, ButtonOutline } from 'components/button';
import { BannerStyled, H1, BannerContent, BannerText, BannerAction } from './style';
import { useSelector } from 'react-redux';
import { translate } from 'language';
import { RootState } from 'app/store';
const Banner = () => {
  const { language } = useSelector((state: RootState) => state.lang);

  return (
    <BannerStyled>
      <BannerContent>
        <H1>{translate('banner-header-title', language)}</H1>
        <BannerText>{translate('banner-text', language)}</BannerText>
        <BannerAction>
          <ButtonPrimary>{translate('get-started', language)}</ButtonPrimary>
          <ButtonOutline>{translate('browser-games', language)}</ButtonOutline>
        </BannerAction>
      </BannerContent>
    </BannerStyled>
  );
};

export default Banner;
