import React from 'react';
import { ItemProps } from 'components/cardGame';
import { Container, Link } from 'styles/components/style';
import { RecommendContent } from './style';
import { Game } from 'types';

export type ItemsProps = {
  items: Array<Game>;
  column?: boolean;
  limit?: number;
  Card: (props: ItemProps) => JSX.Element;
  disableName?: boolean;
};

const ListGame = (props: ItemsProps) => {
  const { items, column = false, limit = null, Card, disableName } = props;
  const [listArr, setListArr] = React.useState<Game[]>([]);

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
      <RecommendContent column={column} limit={limit}>
        {listArr?.map((item, i: number) => {
          return (
            <Link to={`/game?id=${item.id}`}>
              <Card key={i} item={item} disableName={disableName} />
            </Link>
          );
        })}
      </RecommendContent>
    </Container>
  );
};

export default ListGame;
