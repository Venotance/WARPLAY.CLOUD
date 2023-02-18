import { FC, ReactElement } from 'react';

import cx from 'classnames';

import styles from './WrapperContent.module.scss';

interface WrapperContentInterface {
  children: ReactElement;
}

export const WrapperContent: FC<WrapperContentInterface> = ({ children }) => (
  <div className={cx(styles.wrap)}>{children}</div>
);
