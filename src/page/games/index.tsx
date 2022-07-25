import React from 'react';
import { translate } from 'util/translate';
import { RootState } from 'store/store';
import { Container } from 'styles/components/style';
import { ContentGame, TextField, SearchStyled, SearchIcon } from './style';
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
import FilterSelect from 'components/filterSelect';
import { useAppDispatch } from 'hook/hooksStore';
import { setIsSearchRedux } from 'features/actionHeader';
import searchInput from 'util/search';
import { Game } from 'types';

const Games = () => {
  const { search } = useLocation();
  const sortBy = new URLSearchParams(search).get('sort-by');
  const platform = new URLSearchParams(search).get('platform');

  const dispatch = useAppDispatch();

  const { language, isSearch } = useSelector((state: RootState) => {
    return { ...state.lang, ...state.actionHeader };
  });

  const [filter, setFilter] = React.useState<Filter>({});
  const { games, isLoading } = useFetch(filter);
  const [searchArr, setSearchArr] = React.useState<Game[]>([]);

  React.useEffect(() => {
    return () => {
      dispatch(setIsSearchRedux(false));
    };
  }, [dispatch]);

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

  const onFilterChange = React.useCallback(
    (event: React.ChangeEvent<HTMLFormElement>) => {
      setFilter((current) => ({
        ...current,
        [event.target.name]: event.target.value,
      }));
      event.preventDefault();
      setSearchArr([]);
    },
    [],
  );

  const handleOnChangeInput = (e: any) => {
    const searchArr = searchInput(games, e.target.value);
    setSearchArr(searchArr as any);
  };

  const renderWhenSearch = () => {
    let data = [];
    if (searchArr.length > 0) {
      data = searchArr;
    } else {
      data = games;
    }
    return data;
  };

  return (
    <Container>
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
      {isSearch && (
        <SearchStyled>
          <div className="games_search-icon-title">
            <SearchIcon />
            <TextField
              onChange={handleOnChangeInput}
              variant="filled"
              placeholder={translate('find-games', language)}
              autoFocus
            />
          </div>
        </SearchStyled>
      )}
      <FilterSelect onChange={onFilterChange} />
      {isLoading && <Loading />}
      <ContentGame>
        <ListGame items={renderWhenSearch()} Card={CardGameMiniViewGames} />
      </ContentGame>
    </Container>
  );
};

export default Games;
