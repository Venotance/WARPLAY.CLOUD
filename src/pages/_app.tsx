import { ReactElement, ReactNode } from 'react';

import '~shared/assets/styles/globals.scss';

import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout): ReactNode {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <title>WARPLAY.CLOUD</title>
        <link rel="icon" href="/favicon.ico?" />
        <meta
          name="description"
          content="Cloud gaming service that allows you to enjoy the novelties of the gaming industry. Feel like a gamer with our service."
        />
        <meta
          name="keywords"
          content="Cloud gaming, games, quick start, best rates, game enjoyment"
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
