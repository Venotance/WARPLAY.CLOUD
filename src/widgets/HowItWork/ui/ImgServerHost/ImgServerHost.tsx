import { FC } from 'react';

import Image from 'next/image';

import cx from 'classnames';

import serverHost from '~shared/assets/images/ImageServerHost.png';

import styles from './ImgServerHost.module.scss';

interface ImgServerHostInterface {}

export const ImgServerHost: FC<ImgServerHostInterface> = () => (
  <div className={cx(styles.wrap)}>
    <Image
      className={cx(styles.img)}
      style={{ objectFit: 'contain' }}
      fill
      sizes="(max-width: 768px) 100vw,
      800px"
      src={serverHost}
      alt=""
    />
  </div>
);
