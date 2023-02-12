import { CSSProperties, FC, ReactNode } from 'react';

import Link from 'next/link';

import cx from 'classnames';

import styles from './ButtonSmooth.module.scss';

interface ButtonSmoothInterface {
  text: string;
  className?: string;
  onClick?: (e: any) => void;
  style?: CSSProperties;
  href?: string;
  ico?: ReactNode;
}

export const ButtonSmooth: FC<ButtonSmoothInterface> = ({
  style,
  className,
  href = '#',
  ico,
  text,
  onClick,
}) => (
  <Link onClick={onClick} href={href} style={style} className={cx(styles.wrap, className)}>
    {ico}
    <p className={cx(styles.text)}>{text}</p>
  </Link>
);
