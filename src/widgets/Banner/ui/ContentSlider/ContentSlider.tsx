import { FC } from 'react';

import cx from 'classnames';

import { BtnСutСorner } from '~shared/ui/BtnСutСorner/BtnСutСorner';

import styles from './ContentSlider.module.scss';

interface ContentSliderInterface {}

export const ContentSlider: FC<ContentSliderInterface> = () => (
  <div className={cx(styles.wrap)}>
    <div className={cx(styles['text-wrap'])}>
      <h1 className={cx(styles.subtitle)}>Cloud Gaming Service</h1>
      <h3 className={cx(styles.title)}>Turn your device into a gaming device!</h3>
    </div>
    <BtnСutСorner cutCorner href="#" text="UPGRADE" className={cx(styles.btn)} />
  </div>
);
