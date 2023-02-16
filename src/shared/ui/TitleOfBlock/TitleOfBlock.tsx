import { FC } from 'react';

import cx from 'classnames';

import styles from './TitleOfBlock.module.scss';

interface TitleOfBlockInterface {
  text: string;
  className?: string;
}

export const TitleOfBlock: FC<TitleOfBlockInterface> = ({ text, className }) => (
  <h2 className={cx(styles.text, className)}>{text}</h2>
);
