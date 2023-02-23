import { FC } from 'react';

import cx from 'classnames';

import styles from './Footer.module.scss';

interface FooterInterface {}

export const Footer: FC<FooterInterface> = () => <div className={cx(styles.wrap)}>qq</div>;
