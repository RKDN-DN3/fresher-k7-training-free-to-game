import ListGame from 'components/listGame';
import { Container } from 'styles/components/style';
import { ContentGame, ContentLeft, ContentRight, Banner } from './style';
import { translate } from 'language';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import HelpIcon from '@mui/icons-material/Help';
import HeaderTitle from 'components/headerTitle';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';
import CardGame from 'components/cardGame';
import CardGameMini from 'components/cardGameMini';
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
      <Banner>
        Find & track the best free-to-play games! Track what you've played and search for what to play next! Plus get
        free premium loot!
      </Banner>
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
        </ContentLeft>
        <ContentRight>
          <HeaderTitle topTile={translate('most-play-today', language)} />
          <ListGame items={arr} column limit={4} Card={CardGame} disableName />
        </ContentRight>
      </ContentGame>
    </Container>
  );
};

export default Home;
