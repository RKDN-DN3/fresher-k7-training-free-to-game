import React from 'react';
import Header from '../header';
import { DefaultLayoutContainer, Content } from './style';

type Props = {
  children?: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <DefaultLayoutContainer>
      <Header />
      <Content>{children}</Content>
    </DefaultLayoutContainer>
  );
};

export default DefaultLayout;
