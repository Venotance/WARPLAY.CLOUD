import { FC } from 'react';

import Image from 'next/image';

import cx from 'classnames';

import styles from './Step.module.scss';

interface StepsInterface {
  text: string;
  img: string;
  rightLine?: boolean;
}

export const Step: FC<StepsInterface> = ({ text, img, rightLine = false }) => (
  <div className={cx(styles.wrap, { [styles.right]: rightLine })}>
    <div className={cx(styles['img-wrap'])}>
      <Image className={cx(styles['img-icon'])} src={img} alt="" />
    </div>
    <p className={cx(styles['text-style'])}>{text}</p>
  </div>
);
