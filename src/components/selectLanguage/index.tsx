import React from 'react';
import { ItemSelect, SelectStyled } from './style';
import { RootState } from 'app/store';
import { translate } from 'language';
import { LANGUAGES } from 'constants/language.d';
import { ReactComponent as IconVi } from 'assets/icons/IconVi.svg';
import { ReactComponent as IconEn } from 'assets/icons/IconEn.svg';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from 'features/language/LanguageSlice';

const SelectLanguage = () => {
  const { language } = useSelector((state: RootState) => state.lang);

  const dispatch = useDispatch();

  const handleChangeLanguage = () => {
    if (language === LANGUAGES.VI) {
      const en: any = LANGUAGES.EN;
      dispatch(changeLanguage(en));
    } else {
      const vi: any = LANGUAGES.VI;
      dispatch(changeLanguage(vi));
    }
  };

  return (
    <>
      <SelectStyled
        onChange={handleChangeLanguage}
        value={language}
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
          },
          disablePortal: true,
        }}
      >
        <ItemSelect value={LANGUAGES.VI}>
          <IconVi />
          <p style={{ margin: '0px' }}>{translate('vi', language)}</p>
        </ItemSelect>
        <ItemSelect value={LANGUAGES.EN}>
          <IconEn />
          <p style={{ margin: '0px' }}>{translate('en', language)}</p>
        </ItemSelect>
      </SelectStyled>
    </>
  );
};

export default SelectLanguage;
