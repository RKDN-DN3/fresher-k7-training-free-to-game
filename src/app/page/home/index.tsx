import { useSelector } from 'react-redux';
import { translate } from 'language';
import { RootState } from 'app/store';
import ListGame from 'components/listGame';
import { Container } from 'styles/components/style';
import {
  ContentGame,
  ContentLeft,
  ContentRight,
  Community,
  CommunityItem,
  CommunityDes,
  CommunityAuth,
  CommunityText,
} from './style';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import HelpIcon from '@mui/icons-material/Help';
import HeaderTitle from 'components/headerTitle';
import CardGame from 'components/cardGame';
import CardGameMini from 'components/cardGameMini';
import { ButtonOutline } from 'components/button';
interface State {
  tittle: string;
}
const arr: State[] = [
  { tittle: 'tien' },
  { tittle: 'tien' },
  { tittle: 'tien' },
  { tittle: 'tien' },
  { tittle: 'tien' },
  { tittle: 'tien' },
  { tittle: 'tien' },
];

const Home = () => {
  const { language } = useSelector((state: RootState) => state.lang);

  return (
    <Container>
      <HeaderTitle
        topTile={translate('recommendations', language)}
        bottomTitle={translate('help', language)}
        IconTop={SmartToyIcon}
        IconBottom={HelpIcon}
      />
      <ListGame items={arr} limit={3} Card={CardGame} />
      <ContentGame>
        <ContentLeft>
          <HeaderTitle topTile={translate('recently-added', language)} />
          <ListGame items={arr} limit={6} Card={CardGameMini} column />
          <div style={{ float: 'right', marginTop: '20px' }}>
            <ButtonOutline>{translate('more-games', language)}</ButtonOutline>
          </div>
        </ContentLeft>
        <ContentRight>
          <HeaderTitle topTile={translate('most-play-today', language)} />
          <ListGame items={arr} column limit={4} Card={CardGame} disableName />
        </ContentRight>
      </ContentGame>
      <HeaderTitle topTile={translate('community-recommendations', language)} />
      <Community>
        <CommunityItem>
          <CardGame item={{ tittle: 'tien tran' }} size={'minium'} />
          <CommunityDes>
            <CommunityText>
              If you have been looking for a game like Breath of the Wild on pc, look no further. It is clear that they
              took a lot of inspiration from this game and made a fantastic game on pc. I can reccommend this game for
              everyone that likes open wor
            </CommunityText>
            <CommunityAuth>
              <img src="https://www.freetogame.com/assets/images/avatars/default/default-small.png" alt="" />
              <p>By reggert32</p>
            </CommunityAuth>
          </CommunityDes>
        </CommunityItem>
        <CommunityItem>
          <CardGame item={{ tittle: 'tien tran' }} size={'minium'} />
          <CommunityDes>
            <CommunityText>Amazing play this game you will have very good dreams play and download!</CommunityText>
            <CommunityAuth>
              <img src="https://www.freetogame.com/assets/images/avatars/default/default-small.png" alt="" />
              <p>By engaji</p>
            </CommunityAuth>
          </CommunityDes>
        </CommunityItem>
      </Community>
    </Container>
  );
};

export default Home;
