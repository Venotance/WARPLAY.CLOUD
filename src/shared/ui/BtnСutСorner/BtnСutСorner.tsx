import { FC } from 'react';

import Link from 'next/link';

import cx from 'classnames';

import styles from './BtnСutСorner.module.scss';

interface BtnСutСornerInterface {
  href: string;
  text: string;
  classNames?: string;
}

export const BtnСutСorner: FC<BtnСutСornerInterface> = ({ href, text, classNames }) => (
  <Link href={href} className={cx(classNames, styles.wrap)}>
    {text}
  </Link>
);
