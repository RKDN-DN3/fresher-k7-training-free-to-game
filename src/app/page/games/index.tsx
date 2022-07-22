import { useSelector } from 'react-redux';
import { translate } from 'language';
import { RootState } from 'app/store';
import ListGame from 'components/listGame';
import { Container } from 'styles/components/style';
import { ContentGame } from './style';
import HeaderTitle from 'components/headerTitle';
import CardGame from 'components/cardGame';
import { CardGameMiniViewGames } from 'components/cardGameMini';
import React from 'react';
import { Filter } from 'hook/type';
import useFetch from 'hook';
import { useAppDispatch } from 'app/hooks';
import { getAllGameReleaseRedux } from 'features/games/GameApi';
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
  const { language, listGamesRelease } = useSelector((state: RootState) => {
    return { ...state.lang, ...state.games };
  });

  const dispatch = useAppDispatch();
  const [filter, setFilter] = React.useState<Filter>({
    platform: 'browser',
    sortBy: 'release-date',
  });

  const { games, error } = useFetch(filter);

  React.useEffect(() => {
    if (listGamesRelease.length === 0) {
      getAllGameReleaseRedux(dispatch, games, error);
    }
  }, [games]);

  const onFilterChange = React.useCallback((event: React.ChangeEvent<HTMLFormElement>) => {
    setFilter((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
    event.preventDefault();
  }, []);

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
      <ListGame items={listGamesRelease} limit={3} Card={CardGame} />
      <ContentGame>
        <ListGame items={listGamesRelease} Card={CardGameMiniViewGames} />
      </ContentGame>
    </Container>
  );
};

export default Games;
