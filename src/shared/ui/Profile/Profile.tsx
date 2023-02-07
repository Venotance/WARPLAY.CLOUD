import { FC } from 'react';

import cx from 'classnames';

import styles from './Profile.module.scss';

interface ProfileInterface {}

export const Profile: FC<ProfileInterface> = () => <div className={cx(styles.profile)}>qq</div>;
