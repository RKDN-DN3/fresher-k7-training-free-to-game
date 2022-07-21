import { RootState } from 'app/store';
import { Item } from 'components/listGame';
import { CONSTANTS } from 'constants/constants.d';
import { translate } from 'language';
import { useSelector } from 'react-redux';
import { H3 } from 'styles/components/style';
import { CardGameContainer, Name, Button, Img } from './style';

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
        <H3>{item?.tittle}</H3>
        <Button>{translate(CONSTANTS.FREE, language)}</Button>
      </Name>
    </CardGameContainer>
  );
};

export default CardGameMini;
