import { ReactElement, ReactNode } from 'react';

import '~shared/assets/styles/globals.scss';

import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';

// import { Roboto } from '@next/font/google';
// import localFont from '@next/font/local';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// const pulsar = localFont({
//   src: '../shared/assets/fonts/PulsarOriginalRegular.woff2',
//   weight: '400',
// });

// export const roboto = Roboto({
//   weight: ['300', '400', '500', '700', '900'],
//   subsets: ['latin'],
// });

// const aireExterior = localFont({
//   src: '../shared/assets/fonts/AireExterior.woff2',
//   weight: '400',
//   variable: '--aireExterior-font',
// });

export default function MyApp({ Component, pageProps }: AppPropsWithLayout): ReactNode {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      {/* <style>{`
        :root {
          --aireExterior-font: ${aireExterior.style.fontFamily};
        }
      `}</style> */}
      <Head>
        <title>WARPLAY.CLOUD</title>
        <link rel="icon" href="/favicon.ico?" />
        <meta name="description" content="Cloud Gaming Service" />
      </Head>
      {getLayout(
        // <div id="__discola" className={`${aireExterior.variable} font-sans`}>
        <Component {...pageProps} />
      )}
    </>
  );
}
