import { FC } from 'react';

import cx from 'classnames';

import styles from './Menu.module.scss';

interface MenuInterface {}

export const Menu: FC<MenuInterface> = () => <div className={cx(styles.logo)}>qq</div>;
