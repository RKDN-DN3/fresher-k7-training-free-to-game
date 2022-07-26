import { ButtonPrimary } from 'components/button';
import { useLocation } from 'react-router-dom';
import { Link } from 'styles/components/style';
import {
  BackGroundImgStyled,
  DetailContainer,
  ActionStyled,
  Breadcrumbs,
  H4,
  Text,
  HeaderTitleStyled,
  InformationTitle,
  Screenshots,
} from './style';
import { Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import GroupBtnState from 'components/groupBtnState';
import Comment from 'components/comment';
import ErrorIcon from '@mui/icons-material/Error';
import Information from 'components/information';
import { GameDetails } from 'types';
import SystemRequirements from 'components/systemRequirements';
import { STATUS_SUCCESS } from 'constants/constants.d';
import React from 'react';
import requestApi from 'api/requestApi';
import Reviews from 'components/reviews';
import { RootState } from 'store/store';
import { useSelector } from 'react-redux';
import { translate } from 'util/translate';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Detail = () => {
  const { search } = useLocation();
  const id = new URLSearchParams(search).get('id');
  const [game, setGame] = React.useState<GameDetails>({});
  const { language } = useSelector((state: RootState) => state.lang);

  React.useEffect(() => {
    const fetch = async () => {
      const res = await requestApi.getGame(id);
      if (res && res.status === STATUS_SUCCESS) {
        setGame(res.data);
      }
    };
    fetch();
  }, [id]);

  return (
    <DetailContainer>
      <BackGroundImgStyled>
        <div className="detail-gradient"></div>
      </BackGroundImgStyled>
      <div className="detail-left">
        <div className="detail-card">
          <img src={game?.thumbnail} />
          <ActionStyled>
            <div className="detail-free">{translate('FREE', language)}</div>
            <ButtonPrimary>
              <a href={game?.game_url}>
                {translate('play-now', language)}
                <PlayArrowIcon />
              </a>
            </ButtonPrimary>
          </ActionStyled>
          {/* GroupBtnState */}
          <GroupBtnState like={translate('like', language)} />
        </div>
      </div>
      <div className="detail-right">
        {/* Breadcrumbs */}
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link color="inherit" to="/">
            {translate('home', language)}
          </Link>
          <Link to="/games">{translate('free-games', language)} </Link>
          <Typography>{game?.title}</Typography>
        </Breadcrumbs>
        <h1>{game?.title}</h1>
        {/* Reviews */}
        <Reviews />
        {/* Comment */}
        <Comment />
        <H4>
          {translate('about', language)} {game?.title}
        </H4>
        <Text>{game?.description}</Text>
        <InformationTitle>
          <HeaderTitleStyled
            topTile={translate('additional-information', language)}
            bottomTitle={translate('please-note', language)}
            IconBottom={ErrorIcon}
          />
        </InformationTitle>
        <Information item={game} />
        <H4>
          {game?.title} {translate('screenshots', language)}
        </H4>
        {/* Screenshots */}
        <Screenshots>
          {game?.screenshots?.map((item) => {
            return (
              <div key={item?.id} className="col-lg-3 col-md-4 col-6">
                <img
                  className="thumb-gallery shadow-sm rounded"
                  src={item?.image}
                  alt="RIFT Thumbnail 1"
                />
              </div>
            );
          })}
        </Screenshots>
        <H4>
          {translate('system-requirements', language)} ({game?.platform})
        </H4>
        <InformationTitle>
          <SystemRequirements item={game} />
        </InformationTitle>
        <p className="detail-title-end">
          {translate('license-note', language)}
        </p>
      </div>
    </DetailContainer>
  );
};

export default Detail;
