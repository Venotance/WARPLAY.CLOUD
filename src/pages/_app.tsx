import { ReactElement, ReactNode } from 'react';

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
        <meta name="description" content="Сервис облачного гейминга" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
