import { FC, ReactElement } from 'react';

import { Footer } from '~widgets/Footer';
import { Header } from '~widgets/Header/Header';

interface MainLayoutInterface {
  children: ReactElement;
}

export const MainLayout: FC<MainLayoutInterface> = ({ children }) => (
  <div className="main-layout">
    <Header />
    <main className="content">{children}</main>
    <Footer />
  </div>
);
