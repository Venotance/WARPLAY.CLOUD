import { FC } from 'react';

import cx from 'classnames';

import styles from './HeaderOfBlock.module.scss';

interface HeaderOfBlockInterface {
  text: string;
  className?: string;
}

export const HeaderOfBlock: FC<HeaderOfBlockInterface> = ({ text, className }) => (
  <div className={cx(styles.wrap, className)}>
    <span className={cx(styles.line)} />
    <h2 className={cx(styles.text)}>{text}</h2>
  </div>
);
