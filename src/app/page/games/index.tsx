import { useSelector } from 'react-redux';
import { translate } from 'language';
import { RootState } from 'app/store';
import ListGame from 'components/listGame';
import { Container } from 'styles/components/style';
import { ContentGame } from './style';
import HeaderTitle from 'components/headerTitle';
import CardGame from 'components/cardGame';
import { CardGameMiniViewGames } from 'components/cardGameMini';
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

const Games = () => {
  const { language } = useSelector((state: RootState) => state.lang);

  return (
    <Container>
      <HeaderTitle
        topTile={`${translate('best-free', language)} Loai game ${translate('games-title-header', language)}`}
        bottomTitle={
          <div>
            <b>162</b> {translate('free-to-play', language)} <b>Loai game</b> {translate('found', language)}
          </div>
        }
      />
      <ListGame items={arr} limit={3} Card={CardGame} />
      <ContentGame>
        <ListGame items={arr} Card={CardGameMiniViewGames} />
      </ContentGame>
    </Container>
  );
};

export default Games;
