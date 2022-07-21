import { RootState } from 'app/store';
import { Item } from 'components/listGame';
import { CONSTANTS } from 'constants/constants.d';
import { translate } from 'language';
import { useSelector } from 'react-redux';
import { H3 } from 'styles/components/style';
import { CardGameContainer, Name, Button, Img, Des, ButtonType, TitleDes, IconWin } from './style';
type ItemProps = {
  item?: Item;
};

const CardGameMini = (props: ItemProps) => {
  const { language } = useSelector((state: RootState) => state.lang);
  const { item } = props;
  return (
    <CardGameContainer>
      <Img src="https://www.freetogame.com/g/341/thumbnail.jpg" alt="not found" />
      <Name>
        <Des>
          <H3>{item?.tittle}</H3>
          <TitleDes>
            Play the most competitive massively multiplayer party royale game featuring beans ever for free on a variety
            of platforms.
          </TitleDes>
          <ButtonType>Battle Royale</ButtonType>
        </Des>
        <IconWin />
        <Button>{translate(CONSTANTS.FREE, language)}</Button>
      </Name>
    </CardGameContainer>
  );
};

export default CardGameMini;
