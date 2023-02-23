import { FC } from 'react';

import Link from 'next/link';

import cx from 'classnames';

import styles from './SmallBtnOfBlock.module.scss';

type AnimationDirection = 'right' | 'left' | 'center';

interface SmallBtnOfBlockInterface {
  text: string;
  animationDir?: AnimationDirection;
  href?: string;
  className?: string;
}

export const SmallBtnOfBlock: FC<SmallBtnOfBlockInterface> = ({
  text,
  href = '#',
  className,
  animationDir = 'center',
}) => (
  <Link
    href={href}
    className={cx(
      styles.link,
      {
        [styles['link-center']]: animationDir === 'center',
      },
      {
        [styles['link-right']]: animationDir === 'right',
      },
      {
        [styles['link-left']]: animationDir === 'left',
      },
      className
    )}
  >
    {text}
  </Link>
);
