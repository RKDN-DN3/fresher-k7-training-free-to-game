import { ButtonPrimary } from 'components/button';
import { useLocation } from 'react-router-dom';
import {
  DetailContainer,
  BackGroundImgStyled,
  ActionStyled,
  GroupBtn,
  Button,
  Smile,
  SadFace,
  Neutral,
  AddBox,
} from './style';

const Detail = () => {
  const { search } = useLocation();
  const id = new URLSearchParams(search).get('id');
  return (
    <DetailContainer>
      <BackGroundImgStyled>
        <div className="detail-gradient"></div>
      </BackGroundImgStyled>
      <div className="detail-left">
        <img src="https://www.freetogame.com/g/522/thumbnail.jpg" alt="" />
        <ActionStyled>
          <div className="detail-free">FREE</div>
          <ButtonPrimary>PLAY NOW</ButtonPrimary>
        </ActionStyled>
        <GroupBtn>
          <Button>
            <Smile />
            <span>69</span>
            <span>LIKE</span>
          </Button>
          <Button>
            <Neutral />
            <span>69</span>
            <span>LIKE</span>
          </Button>
          <Button>
            <SadFace />
            <span>69</span>
            <span>LIKE</span>
          </Button>
          <Button>
            <AddBox />
            <span>69</span>
            <span>LIKE</span>
          </Button>
        </GroupBtn>
      </div>
      <div className="detail-right">aloooooo</div>
    </DetailContainer>
  );
};

export default Detail;
