import React from 'react';
import Banner from '../banner';
import Footer from '../footer';
import Header from '../header';
import { DefaultLayoutContainer, Content } from './style';

type Props = {
  children?: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <DefaultLayoutContainer>
      <Header />
      <Banner />
      <Content>{children}</Content>
      <Footer />
    </DefaultLayoutContainer>
  );
};

export default DefaultLayout;
