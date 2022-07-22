import { RootState } from 'app/store';
import { Item } from 'components/listGame';
import { CONSTANTS } from 'constants/constants.d';
import { translate } from 'language';
import { useSelector } from 'react-redux';
import { H3 } from 'styles/components/style';
import { CardGameContainer, Name, Button, ButtonAlone, Img } from './style';

export type ItemProps = {
  item?: Item;
  disableName?: boolean;
  size?: 'minium';
};

const CardGame = (props: ItemProps) => {
  const { language } = useSelector((state: RootState) => state.lang);
  const { item, disableName, size } = props;
  return (
    <CardGameContainer>
      <Img size={size} src="https://www.freetogame.com/g/341/thumbnail.jpg" alt="not found" />
      {disableName && <ButtonAlone>{translate(CONSTANTS.FREE, language)}</ButtonAlone>}
      {!disableName && (
        <Name>
          <H3>{item?.tittle}</H3>
          <Button>{translate(CONSTANTS.FREE, language)}</Button>
        </Name>
      )}
    </CardGameContainer>
  );
};

export default CardGame;
