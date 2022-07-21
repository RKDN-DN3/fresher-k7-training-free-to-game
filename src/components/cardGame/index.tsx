import { Item } from 'components/recommend';
import { H3 } from 'styles/components/style';
import { CardGameContainer, Name } from './style';

type ItemProps = {
  item?: Item;
};

const CardGame = (props: ItemProps) => {
  const { item } = props;
  return (
    <CardGameContainer>
      <img src="https://www.freetogame.com/g/341/thumbnail.jpg" alt="not found" />
      <Name>
        <H3>{item?.tittle}</H3>
      </Name>
    </CardGameContainer>
  );
};

export default CardGame;
