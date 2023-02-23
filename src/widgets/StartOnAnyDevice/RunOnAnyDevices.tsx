import { FC } from 'react';

import Image from 'next/image';

import cx from 'classnames';

import imageBrowser from '~shared/assets/images/ImageBrowser.png';
import { HeaderOfBlock } from '~shared/ui/HeaderOfBlock/HeaderOfBlock';
import { SmallBtnOfBlock } from '~shared/ui/SmallBtnOfBlock/SmallBtnOfBlock';
import { TitleOfBlock } from '~shared/ui/TitleOfBlock/TitleOfBlock';

import styles from './RunOnAnyDevices.module.scss';

interface RunOnAnyDevicesInterface {}

export const RunOnAnyDevices: FC<RunOnAnyDevicesInterface> = () => (
  <div className={cx(styles.wrap)}>
    <div className={cx(styles.content)}>
      <HeaderOfBlock text="You can play in the browser" />
      <TitleOfBlock className={cx(styles.title)} text="Run on any devices" />
      <p className={cx(styles.text)}>
        Our module is available on all popular operating systems and it works on all computers.
      </p>
      <SmallBtnOfBlock animationDir="left" className={cx(styles.btn)} text="Open in a browser" />
    </div>
    <div className={cx(styles['img-wrap'])}>
      <Image
        style={{ objectFit: 'contain' }}
        className={cx(styles.image)}
        width="1132"
        height="740"
        sizes="80vw"
        quality={98}
        src={imageBrowser}
        alt=""
      />
    </div>
  </div>
);
