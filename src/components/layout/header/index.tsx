import React from 'react';
import {
  HeaderContainer,
  HeaderContent,
  Img,
  Left,
  Li,
  Right,
  IconDropDown,
  Dropdown,
  Item,
  SelectStyled,
  ItemSelect,
} from './style';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from 'features/language/LanguageSlice';
import { RootState } from 'app/store';
import { translate } from 'language';
import { LANGUAGES } from '../../../constants/language.d';
import { ReactComponent as IconVi } from 'assets/icons/IconVi.svg';
import { ReactComponent as IconEn } from 'assets/icons/IconEn.svg';

type headerType = {
  title: string;
  icon?: any;
};

const headers: headerType[] = [
  { title: 'free-games', icon: IconDropDown },
  { title: 'browser-games', icon: IconDropDown },
  { title: 'special-offer' },
  { title: 'top' },
];

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const dispatch = useDispatch();
  const { language } = useSelector((state: RootState) => state.lang);

  const handleChangeLanguage = () => {
    if (language === LANGUAGES.VI) {
      const en: any = LANGUAGES.EN;
      dispatch(changeLanguage(en));
    } else {
      const vi: any = LANGUAGES.VI;
      dispatch(changeLanguage(vi));
    }
  };

  const handleOpenMenuItem = (e: any, item: headerType) => {
    if (item.icon) {
      setAnchorEl(e.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <HeaderContainer>
      <HeaderContent>
        <Left>
          <Li>
            <Img src="https://www.freetogame.com/assets/images/freetogame-logo.png" />
          </Li>
          {headers?.map((item: headerType, index: number) => {
            const Icon = item.icon;
            return (
              <React.Fragment key={index}>
                <Li aria-describedby={id} onClick={(e) => handleOpenMenuItem(e, item)}>
                  {translate(item.title, language)}
                  {Icon && <Icon />}
                </Li>
                <Dropdown
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <Item>alo</Item>
                  <Item>alo</Item>
                  <Item>alo</Item>
                </Dropdown>
              </React.Fragment>
            );
          })}
        </Left>
        <Right></Right>
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
            <p>{translate('vi', language)}</p>
          </ItemSelect>
          <ItemSelect value={LANGUAGES.EN}>
            <IconEn />
            <p>{translate('en', language)}</p>
          </ItemSelect>
        </SelectStyled>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
