import { FC } from 'react';

import cx from 'classnames';

import styles from './Logo.module.scss';

interface LogoInterface {}

export const Logo: FC<LogoInterface> = () => <div className={cx(styles.wrapper)}>qeqeq</div>;
