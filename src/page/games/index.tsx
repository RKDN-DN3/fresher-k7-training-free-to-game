import React from 'react';
import { translate } from 'util/translate';
import { RootState } from 'store/store';
import { Container } from 'styles/components/style';
import { ContentGame } from './style';
import { Filter } from 'hook/type';
import { useSelector } from 'react-redux';
import { CardGameMiniViewGames } from 'components/cardGameMini';
import { useLocation } from 'react-router-dom';
import { GAMES, RELEASE_DATE } from 'constants/constants.d';
import HeaderTitle from 'components/headerTitle';
import CardGame from 'components/cardGame';
import ListGame from 'components/listGame';
import useFetch from 'hook';
import Loading from 'components/loading';

const Games = () => {
  const { search } = useLocation();
  const sortBy = new URLSearchParams(search).get('sort-by');
  const platform = new URLSearchParams(search).get('platform');

  const { language } = useSelector((state: RootState) => {
    return { ...state.lang, ...state.games };
  });

  const [filter, setFilter] = React.useState<Filter>({});

  const { games, isLoading } = useFetch(filter);

  React.useEffect(() => {
    if (platform || sortBy) {
      setFilter({
        platform: platform,
        sortBy: RELEASE_DATE,
        genre: sortBy,
      });
    }
    if (window.location.pathname === GAMES && !search) {
      setFilter({
        sortBy: RELEASE_DATE,
      });
    }
  }, [sortBy, platform, search]);

  // const onFilterChange = React.useCallback(
  //   (event: React.ChangeEvent<HTMLFormElement>) => {
  //     setFilter((current) => ({
  //       ...current,
  //       [event.target.name]: event.target.value,
  //     }));
  //     event.preventDefault();
  //   },
  //   [],
  // );

  return (
    <Container>
      {isLoading && <Loading />}
      <HeaderTitle
        topTile={
          <div>
            {translate('best-free', language)}{' '}
            {sortBy && (
              <span style={{ textTransform: 'capitalize' }}>{sortBy}</span>
            )}{' '}
            {translate(
              `${platform ? 'games-title-browser' : 'games-title-header'}`,
              language,
            )}
          </div>
        }
        bottomTitle={
          <div>
            <b>{games?.length}</b> {translate('free-to-play', language)}{' '}
            <b style={{ textTransform: 'capitalize' }}>{sortBy && sortBy}</b>{' '}
            {translate('found', language)}
          </div>
        }
      />
      <ListGame items={games} limit={3} Card={CardGame} />
      <ContentGame>
        <ListGame items={games} Card={CardGameMiniViewGames} />
      </ContentGame>
    </Container>
  );
};

export default Games;
