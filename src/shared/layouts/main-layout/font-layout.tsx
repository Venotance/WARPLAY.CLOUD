import { FC, ReactElement } from 'react';

import { Roboto } from '@next/font/google';
import localFont from '@next/font/local';

const pulsar = localFont({
  src: '../../assets/fonts/PulsarOriginalRegular.woff2',
  weight: '400',
  variable: '--pulsar-font',
});

export const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--roboto-font',
});

const aireExterior = localFont({
  src: '../../assets/fonts/AireExterior.woff2',
  weight: '400',
  variable: '--aireExterior-font',
});

interface FontLayoutInterface {
  children: ReactElement;
}

export const FontLayout: FC<FontLayoutInterface> = ({ children }) => (
  <div id="__discola" className={`${aireExterior.variable} ${roboto.variable} ${pulsar.variable}`}>
    {children}
  </div>
);
