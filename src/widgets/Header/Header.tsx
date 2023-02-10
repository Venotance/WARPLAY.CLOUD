import { FC } from 'react';

import cx from 'classnames';

import { HdrUser } from '~entities/User';

import { Logo } from '~shared/ui/Logo';
import { Menu, MenuObj } from '~shared/ui/Menu';

import styles from './Header.module.scss';

export const Header: FC = () => (
  <header className={cx(styles.wrap)}>
    <Logo className={cx(styles.logo)} />
    <Menu className={cx(styles.menu)} menuList={MenuObj} />
    <HdrUser className={cx(styles.user)} />
  </header>
);
