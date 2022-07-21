import React from 'react';
import Header from '../header';
import styles from './DefaultLayout.module.scss';

type Props = {
  children?: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default DefaultLayout;
