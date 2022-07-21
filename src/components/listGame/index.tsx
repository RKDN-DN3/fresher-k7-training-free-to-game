import React from 'react';
import CardGame, { ItemProps } from 'components/cardGame';
import { Container } from 'styles/components/style';
import { RecommendContent } from './style';

export type Item = {
  tittle: string;
};

type ItemsProps = {
  items: Array<Item>;
  column?: boolean;
  limit?: number;
  Card: (props: ItemProps) => JSX.Element;
  disableName?: boolean;
};

const ListGame = (props: ItemsProps) => {
  const { items, column = false, limit = null, Card, disableName } = props;
  const [listArr, setListArr] = React.useState<Item[]>([]);

  React.useEffect(() => {
    if (limit) {
      const arr = items.slice(0, limit);
      setListArr(arr);
    } else {
      setListArr(items);
    }
  }, [limit, items]);

  return (
    <Container>
      <RecommendContent column={column}>
        {listArr?.map((item, i: number) => {
          return <Card key={i} item={item} disableName={disableName} />;
        })}
      </RecommendContent>
    </Container>
  );
};

export default ListGame;
