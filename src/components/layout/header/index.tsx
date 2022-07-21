import { HeaderContainer, HeaderContent, Img, Left, Li, Right } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from 'features/language/LanguageSlice';
import { RootState } from 'app/store';
import { translate } from 'language';

type headerType = {
  title: string;
  icon?: React.ReactNode;
};
const headers: headerType[] = [
  { title: 'free-games' },
  { title: 'browser-games' },
  { title: 'special-offer' },
  { title: 'top' },
];

const Header = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((state: RootState) => state.lang);
  const handleChangeLanguage = () => {
    if (language === 'VI') {
      dispatch(changeLanguage('EN'));
    } else {
      dispatch(changeLanguage('VI'));
    }
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Left>
          <Li>
            <Img src="https://www.freetogame.com/assets/images/freetogame-logo.png" />
          </Li>
          {headers?.map((item: headerType, index: number) => {
            return <Li key={index}>{translate(item.title, language)}</Li>;
          })}
        </Left>
        <Right></Right>
        <button onClick={handleChangeLanguage}>{translate('home', language)}</button>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
