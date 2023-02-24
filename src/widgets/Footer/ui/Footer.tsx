import { FC } from 'react';

import Link from 'next/link';

import cx from 'classnames';

import { Logo } from '~shared/ui/Logo';
import { PlayIcon } from '~shared/ui/PlayIcon/PlayIcon';

import { arrayMessengers } from '../data/data';
import styles from './Footer.module.scss';

interface FooterInterface {}

export const Footer: FC<FooterInterface> = () => (
  <footer className={cx(styles.wrap)}>
    <div className={cx(styles.visual)}>
      <Logo className={cx(styles.logo)} widthLogo={49} heightLogo={38} fillLogo="#ECECEC" />
      <p className={cx(styles.rights)}>2022. All rights reserved.</p>
      <div className={cx(styles['design-wrap'])}>
        <p className={cx(styles.design)}>Design by desart</p>
        <PlayIcon />
      </div>
    </div>
    <div className={cx(styles['additional-links'])}>
      <Link className={cx(styles.policy)} href="#">
        Privacy policy
      </Link>
      <Link className={cx(styles.cookie)} href="#">
        Cookie
      </Link>
      <span className={cx(styles['link-messengers'])}>
        {arrayMessengers.map((item) => (
          <Link key={item.id} className={cx(styles[item.style])} href={item.link}>
            {item.element}
          </Link>
        ))}
      </span>
    </div>
  </footer>
);
