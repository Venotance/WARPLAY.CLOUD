import { FC } from 'react';

import { Logo } from '~shared/ui/Logo';
import { Menu } from '~shared/ui/Menu/Menu';
import { Profile } from '~shared/ui/Profile/Profile';

export const Header: FC = () => (
  <header>
    <Logo />
    <Menu />
    <Profile />
  </header>
);
