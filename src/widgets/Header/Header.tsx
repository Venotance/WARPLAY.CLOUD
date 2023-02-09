import { FC } from 'react';

import cx from 'classnames';

import { Logo } from '~shared/ui/Logo';
import { Menu, MenuObj } from '~shared/ui/Menu';
import { Profile } from '~shared/ui/Profile/Profile';

import styles from './Header.module.scss';

export const Header: FC = () => (
  <header className={cx(styles.wrap)}>
    <Logo className={cx(styles.logo)} />
    <Menu menuList={MenuObj} />
    <Profile />
  </header>
);
