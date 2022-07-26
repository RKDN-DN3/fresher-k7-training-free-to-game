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
import { ReviewsStyle } from 'components/reviews/style';

export const CONFIGURATION: GameDetails = {
  developer: 'Blizzard Entertainment',
  freetogame_profile_url: 'https://www.freetogame.com/diablo-immortal',
  game_url: 'https://www.freetogame.com/open/diablo-immortal',
  genre: 'MMOARPG',
  id: 521,
  platform: 'PC (Windows)',
  publisher: 'Blizzard Entertainment',
  release_date: '2022-06-02',
  short_description:
    'Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.',
  thumbnail: 'https://www.freetogame.com/g/521/thumbnail.jpg',
  title: 'Diablo Immortal',
  minimum_system_requirements: {
    os: 'Windows 7 64-Bit (SP1) or Windows 10 64-Bit',
    processor: 'Intel Core i3-4340 or AMD FX-6300',
    memory: '8GB RAM',
    graphics: 'NVIDIA GeForce GTX 670 / GeForce GTX 1650 or Radeon HD 7950',
    storage: '175GB HD space',
  },
  screenshots: [
    {
      id: 1124,
      image: 'https://www.freetogame.com/g/452/Call-of-Duty-Warzone-1.jpg',
    },
    {
      id: 1125,
      image: 'https://www.freetogame.com/g/452/Call-of-Duty-Warzone-2.jpg',
    },
    {
      id: 1126,
      image: 'https://www.freetogame.com/g/452/Call-of-Duty-Warzone-3.jpg',
    },
    {
      id: 1127,
      image: 'https://www.freetogame.com/g/452/Call-of-Duty-Warzone-4.jpg',
    },
  ],
};

const Detail = () => {
  const { search } = useLocation();
  const id = new URLSearchParams(search).get('id');
  const [game, setGame] = React.useState<GameDetails>({});

  React.useEffect(() => {
    const fetch = async () => {
      const res = await requestApi.getGame(id);
      if (res && res.status === STATUS_SUCCESS) {
        setGame(res.data);
      }
    };
    fetch();
  }, []);
  return (
    <DetailContainer>
      <BackGroundImgStyled>
        <div className="detail-gradient"></div>
      </BackGroundImgStyled>
      <div className="detail-left">
        <div className="detail-card">
          <img src={game?.thumbnail} alt="" />
          <ActionStyled>
            <div className="detail-free">FREE</div>
            <ButtonPrimary>PLAY NOW</ButtonPrimary>
          </ActionStyled>
          {/* GroupBtnState */}
          <GroupBtnState />
        </div>
      </div>
      <div className="detail-right">
        {/* Breadcrumbs */}
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link color="inherit" to="/">
            Home
          </Link>
          <Link to="/games">Free Games</Link>
          <Typography>{game?.title}</Typography>
        </Breadcrumbs>
        <h1>{game?.title}</h1>
        {/* Reviews */}
        <ReviewsStyle />
        <Comment />
        <H4>About {game?.title}</H4>
        <Text>{game?.description}</Text>
        <InformationTitle>
          <HeaderTitleStyled
            topTile={`Additional Information`}
            bottomTitle={`Please note this free-to-play game may or may not offer optional in-game purchases.`}
            IconBottom={ErrorIcon}
          />
        </InformationTitle>
        <Information item={game} />
        <H4>RIFT Screenshots</H4>
        <Screenshots>
          {game?.screenshots?.map((item, i) => {
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
        <H4>Minimum System Requirements (Windows)</H4>
        <InformationTitle>
          <SystemRequirements item={game} />
        </InformationTitle>
        <p>
          All material on this page is copyrighted by ©Trion Worlds and their
          respective licensors. All other trademarks are the property of their
          respective owners.
        </p>
      </div>
    </DetailContainer>
  );
};

export default Detail;
