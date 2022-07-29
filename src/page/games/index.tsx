import React from 'react';
import {
  Container,
  TextField,
  SearchIcon,
  ContentGame,
  SearchStyled,
} from './style';
import { Game } from 'types';
import { Filter } from 'hook/type';
import { RootState } from 'store/store';
import { translate } from 'util/translate';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from 'hook/hooksStore';
import { setIsSearchRedux } from 'features/actionHeader';
import { CardGameMiniViewGames } from 'components/cardGameMini';
import { GAMES, PLATFORM, RELEASE_DATE, SORT_BY } from 'constants/constants.d';
import Loading from 'components/loading';
import CardGame from 'components/cardGame';
import ListGame from 'components/listGame';
import useFetch from 'hook/hookFetch';
import searchInput from 'util/search';
import HeaderTitle from 'components/headerTitle';
import FilterSelect from 'components/filterSelect';

const Games = () => {
  const { search } = useLocation();
  //Get url
  const sortBy = new URLSearchParams(search).get(SORT_BY);
  const platform = new URLSearchParams(search).get(PLATFORM);

  const dispatch = useAppDispatch();

  const { language, isSearch } = useSelector((state: RootState) => {
    return { ...state.lang, ...state.actionHeader };
  });

  const [filter, setFilter] = React.useState<Filter>({});
  const [searchArr, setSearchArr] = React.useState<Game[]>([]);
  const { games, isLoading } = useFetch(filter);

  React.useEffect(() => {
    if (platform || sortBy) {
      setFilter({
        platform: platform,
        sortBy: RELEASE_DATE,
        genre: sortBy,
      });
    }
    // setFilter when has pathname = /games and no search
    if (window.location.pathname === GAMES && !search) {
      setFilter({
        sortBy: RELEASE_DATE,
      });
    }
  }, [sortBy, platform, search]);

  //Filter
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

  //Input search
  const handleOnChangeInput = (e: any) => {
    const searchArr = searchInput(games, e.target.value);
    setSearchArr(searchArr as any);
  };

  //Return Array search
  const renderWhenSearch = React.useMemo(() => {
    let data = [];
    if (searchArr.length > 0) {
      data = searchArr;
    } else {
      data = games;
    }
    return data;
  }, [games, searchArr]);

  //Set false isSearch
  React.useEffect(() => {
    return () => {
      dispatch(setIsSearchRedux(false));
    };
  }, [dispatch]);

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
      {/* ListGame  render */}
      <ListGame items={games} limit={3} Card={CardGame} />
      {/* Input search */}
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
      {/* FilterSelect */}
      <FilterSelect onChange={onFilterChange} />
      {isLoading && <Loading />}
      <ContentGame>
        {/* ListGame  render */}
        <ListGame items={renderWhenSearch} Card={CardGameMiniViewGames} />
      </ContentGame>
    </Container>
  );
};

export default Games;
