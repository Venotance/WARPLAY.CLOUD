import { FC } from 'react';

import Link from 'next/link';

import cx from 'classnames';

import styles from './Logo.module.scss';
import { LogoIcon } from './LogoImage';

interface LogoInterface {}

export const Logo: FC<LogoInterface> = () => (
  <Link href="#" className={cx(styles.logo)}>
    <LogoIcon />
    <p className={cx(styles.text)}>WARPLAY.CLOUD</p>
  </Link>
);
