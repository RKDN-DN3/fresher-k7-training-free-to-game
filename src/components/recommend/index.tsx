import React from 'react';
import CardGame from 'components/cardGame';
import HeaderTitle from 'components/headerTitle';
import { Container } from 'styles/components/style';
import { RecommendContent } from './style';
import { translate } from 'language';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import HelpIcon from '@mui/icons-material/Help';
export type Item = {
  tittle: string;
};

type ItemsProps = {
  items: Array<Item>;
};

const Recommend = (props: ItemsProps) => {
  const { language } = useSelector((state: RootState) => state.lang);
  const { items } = props;

  return (
    <Container>
      <HeaderTitle
        topTile={translate('recommendations', language)}
        bottomTitle={translate('help', language)}
        IconTop={SmartToyIcon}
        IconBottom={HelpIcon}
      />
      <RecommendContent>
        {items?.map((item, i: number) => {
          return <CardGame key={i} item={item} />;
        })}
      </RecommendContent>
    </Container>
  );
};

export default Recommend;
