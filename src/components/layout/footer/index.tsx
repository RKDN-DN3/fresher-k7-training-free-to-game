import {
  FooterContent,
  FooterEnd,
  FooterStyled,
  ListItem,
  Img,
  Item,
  FooterEndContent,
  FooterEndText,
  FooterEndUnstyled,
} from './style';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import RssFeedIcon from '@mui/icons-material/RssFeed';
const Footer = () => {
  return (
    <FooterStyled>
      <FooterContent>
        <ListItem>
          <Item>About Us</Item>
          <Item>API</Item>
          <Item>Contact Us</Item>
        </ListItem>
        <ListItem>
          <Item>Help/FAQ</Item>
          <Item>Support & Bugs</Item>
          <Item>Feature Request</Item>
        </ListItem>
        <ListItem>
          <Item>Privacy Policy</Item>
          <Item>Cookies Policy</Item>
          <Item>Terms of Use</Item>
        </ListItem>
        <Img src="	https://www.freetogame.com/assets/images/logo-footer.png" alt="" />
      </FooterContent>
      <FooterEnd>
        <FooterEndContent>
          <FooterEndText>© Copyright from FreeToGame.</FooterEndText>
          <FooterEndUnstyled>
            <FacebookIcon />
            <TwitterIcon />
            <RssFeedIcon />
          </FooterEndUnstyled>
        </FooterEndContent>
      </FooterEnd>
    </FooterStyled>
  );
};

export default Footer;
