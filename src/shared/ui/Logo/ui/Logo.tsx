import { FC } from 'react';

import Link from 'next/link';

import cx from 'classnames';

import styles from './Logo.module.scss';
import { LogoIcon } from './LogoImage';

interface LogoInterface {
  className?: string;
}

export const Logo: FC<LogoInterface> = ({ className }) => (
  <Link href="/" className={cx(styles.logo, className)}>
    <LogoIcon />
    <p className={cx(styles.text)}>WARPLAY.CLOUD</p>
  </Link>
);
