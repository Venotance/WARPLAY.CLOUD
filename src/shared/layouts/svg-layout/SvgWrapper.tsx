import { FC, ReactElement } from 'react';

import cx from 'classnames';

import styles from './SvgWrapper.module.scss';

interface SvgWrappWithChild extends SvgWrapperInterface {
  children: ReactElement;
}

export interface SvgWrapperInterface {
  width?: number;
  height?: number;
  className?: string;
}

export const SvgWrapper: FC<SvgWrappWithChild> = ({
  width = 30,
  height = 30,
  children,
  className,
}) => (
  <div
    className={(cx(styles.wrap), className)}
    style={{ width: `${width}px`, height: `${height}px` }}
  >
    {children}
  </div>
);
