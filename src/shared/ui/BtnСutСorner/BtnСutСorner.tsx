import { FC } from 'react';

import Link from 'next/link';

import cx from 'classnames';

import styles from './BtnСutСorner.module.scss';

interface BtnСutСornerInterface {
  href: string;
  text: string;
  cutCorner?: boolean;
  smooth?: boolean;
  className?: string;
}

export const BtnСutСorner: FC<BtnСutСornerInterface> = ({
  href,
  text,
  className,
  cutCorner = false,
}) => (
  <Link href={href} className={cx(className, styles.wrap, { [styles['cut-corner']]: cutCorner })}>
    {text}
  </Link>
);
