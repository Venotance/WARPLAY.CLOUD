import { FC } from 'react';

import cx from 'classnames';

import styles from './Decor.module.scss';

interface DecorInterface {}

export const Decor: FC<DecorInterface> = () => (
  <div className={cx(styles.wrap)}>
    <div className={cx(styles['text-wrap'])}>
      <p className={cx(styles.subtitle)}>Cloud Gaming Service</p>
      <p className={cx(styles.title)}>Turn your device into a gaming device!</p>
    </div>
  </div>
);
