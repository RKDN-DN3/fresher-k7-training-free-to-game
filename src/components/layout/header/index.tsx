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
} from './style';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';
import { translate } from 'language';
import SelectLanguage from 'components/selectLanguage';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';

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
  const [openSubMenu, setOpenSubMenu] = React.useState(false);

  const { language } = useSelector((state: RootState) => state.lang);
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
                <LiItem aria-describedby={id} onClick={(e) => handleOpenMenuItem(e, item)}>
                  {translate(item.title, language)}
                  {Icon && <Icon />}
                </LiItem>
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
