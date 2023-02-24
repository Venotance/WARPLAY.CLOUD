import { FC } from 'react';

import Link from 'next/link';

import cx from 'classnames';

import styles from './Logo.module.scss';
import { LogoIcon } from './LogoIcon/LogoIcon';

interface LogoInterface {
  className?: string;
  widthLogo?: number;
  heightLogo?: number;
  fillLogo?: string;
}

export const Logo: FC<LogoInterface> = ({ className, widthLogo, heightLogo, fillLogo }) => (
  <Link href="/" className={cx(styles.logo, className)}>
    <LogoIcon width={widthLogo} height={heightLogo} fill={fillLogo} />
    <p className={cx(styles.text)}>WARPLAY.CLOUD</p>
  </Link>
);
