import React from 'react';
import {
  HeaderContainer,
  HeaderContent,
  Img,
  Left,
  Li,
  LiItem,
  Right,
  IconDropDown,
  Dropdown,
  Item,
  MenuSub,
  BoxSub,
  IconMenu,
  LinkStyled,
} from './style';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';
import { translate } from 'language';
import SelectLanguage from 'components/selectLanguage';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';
import { GENRES_ALL, GENRES_BROWSER } from 'constants/constants.d';
import { GENRES_ARR, GENRES_BROWSER_ARR, typeListGame } from 'constants/games';
import { useNavigate } from 'react-router-dom';

type headerType = {
  title: string;
  icon?: any;
  type?: string;
};

const headers: headerType[] = [
  { title: 'free-games', icon: IconDropDown, type: GENRES_ALL },
  { title: 'browser-games', icon: IconDropDown, type: GENRES_BROWSER },
  { title: 'special-offer' },
  { title: 'top' },
];

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [openSubMenu, setOpenSubMenu] = React.useState(false);
  const [listSubMenu, setListSubMenu] = React.useState<typeListGame[]>([]);
  const navigate = useNavigate();

  const { language } = useSelector((state: RootState) => state.lang);
  const handleOpenMenuItem = (e: any, item: headerType) => {
    if (item.icon) {
      setAnchorEl(e.currentTarget);
      if (item.type === GENRES_ALL) {
        setListSubMenu(GENRES_ARR);
      }
      if (item.type === GENRES_BROWSER) {
        setListSubMenu(GENRES_BROWSER_ARR);
      }
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickMenuItem = (item: typeListGame) => {
    setAnchorEl(null);
    navigate(`/games?id=${item.value}`);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <HeaderContainer>
      <HeaderContent>
        <Left>
          <LinkStyled to="/">
            <Li>
              <Img src="https://www.freetogame.com/assets/images/freetogame-logo.png" />
            </Li>
          </LinkStyled>
          {headers?.map((item: headerType, index: number) => {
            const Icon = item.icon;
            return (
              <React.Fragment key={index}>
                <LiItem aria-describedby={id} onClick={(e) => handleOpenMenuItem(e, item)}>
                  {translate(item.title, language)}
                  {Icon && <Icon />}
                </LiItem>
              </React.Fragment>
            );
          })}
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
            {listSubMenu?.map((item: typeListGame, i: any) => {
              return (
                <Item key={i} onClick={() => handleClickMenuItem(item)}>
                  {item.display}
                </Item>
              );
            })}
          </Dropdown>
        </Left>
        <Right>
          <SelectLanguage />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton color="inherit" onClick={() => setOpenSubMenu(!openSubMenu)}>
              <IconMenu open={openSubMenu} />
            </IconButton>
          </Box>
        </Right>
      </HeaderContent>
      <BoxSub open={openSubMenu} sx={{ flexGrow: 1, justifyContent: 'flex-start', display: { md: 'none' } }}>
        {headers?.map((item: headerType, index: number) => {
          const Icon = item.icon;
          return (
            <React.Fragment key={index}>
              <MenuSub>
                {translate(item.title, language)}
                {Icon && <Icon />}
              </MenuSub>
            </React.Fragment>
          );
        })}
      </BoxSub>
    </HeaderContainer>
  );
};

export default Header;
