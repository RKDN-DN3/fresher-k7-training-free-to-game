import React from 'react';
import { Container } from 'styles/components/style';
import { TopTittle, BottomTittle, H3 } from './style';

interface HeaderTitleProps {
  IconTop?: any;
  IconBottom?: any;
  topTile?: string;
  bottomTitle?: string;
}

const HeaderTitle = (props: HeaderTitleProps) => {
  const { IconTop, IconBottom, topTile, bottomTitle } = props;
  return (
    <Container>
      <TopTittle>
        {IconTop && <IconTop />}
        <H3>{topTile}</H3>
      </TopTittle>
      <BottomTittle>
        {IconBottom && <IconBottom />}
        {bottomTitle}
      </BottomTittle>
    </Container>
  );
};

export default HeaderTitle;
