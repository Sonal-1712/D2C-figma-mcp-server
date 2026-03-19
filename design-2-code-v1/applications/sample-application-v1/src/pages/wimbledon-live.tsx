// wimbledon-live.tsx
import React from 'react';
import Head from 'next/head';
import WimbledonLiveScreen from '../components/WimbledonLiveScreen';
import styles from '../styles/formPage.module.scss';

const WimbledonLivePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Wimbledon Live | Sample Application</title>
        <meta name="description" content="Wimbledon Live Stream" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <WimbledonLiveScreen />
      </main>
    </>
  );
};

export default WimbledonLivePage;