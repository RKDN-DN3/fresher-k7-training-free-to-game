import { RootState } from 'app/store';
import { Item } from 'components/listGame';
import { CONSTANTS } from 'constants/constants.d';
import { translate } from 'language';
import { useSelector } from 'react-redux';
import { H3 } from 'styles/components/style';
import {
  CardGameContainer,
  Name,
  Button,
  Img,
  Des,
  ButtonType,
  TitleDes,
  IconWin,
  CardGameMiniViewGamesStyled,
} from './style';
type ItemProps = {
  item?: Item;
  className?: string;
  cartViewGames?: boolean;
};

const CardGameMini = (props: ItemProps) => {
  const { language } = useSelector((state: RootState) => state.lang);

  const { item, className, cartViewGames } = props;

  return (
    <CardGameContainer className={className}>
      <Img src="https://www.freetogame.com/g/341/thumbnail.jpg" alt="not found" />
      <Name className="card-game-mini_des-container">
        {cartViewGames ? (
          <>
            <Des>
              <div className="card-game-mini_name">
                <H3>{item?.tittle}</H3> <Button>{translate(CONSTANTS.FREE, language)}</Button>
              </div>
              <TitleDes className="card-game-mini_des">
                Play the most competitive massively multiplayer party royale game featuring beans ever for free on a
                variety of platforms.
              </TitleDes>
              <div className="card-game-mini_battle">
                <ButtonType>Battle Royale</ButtonType>
                <IconWin />
              </div>
            </Des>
          </>
        ) : (
          <>
            <Des>
              <H3>{item?.tittle}</H3>
              <TitleDes className="card-game-mini_des">
                Play the most competitive massively multiplayer party royale game featuring beans ever for free on a
                variety of platforms.
              </TitleDes>
              <ButtonType>Battle Royale</ButtonType>
            </Des>
            <IconWin />
            <Button>{translate(CONSTANTS.FREE, language)}</Button>
          </>
        )}
      </Name>
    </CardGameContainer>
  );
};

export const CardGameMiniViewGames = (props: ItemProps) => {
  return (
    <CardGameMiniViewGamesStyled>
      <CardGameMini {...props} className="cardGameMini" cartViewGames={true} />
    </CardGameMiniViewGamesStyled>
  );
};

export default CardGameMini;
