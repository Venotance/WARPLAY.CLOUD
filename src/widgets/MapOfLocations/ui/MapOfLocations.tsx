import { FC } from 'react';

import Image from 'next/image';

import cx from 'classnames';

import Map from '~shared/assets/images/Map.png';
import { HeaderOfBlock } from '~shared/ui/HeaderOfBlock/HeaderOfBlock';
import { TitleOfBlock } from '~shared/ui/TitleOfBlock/TitleOfBlock';

import styles from './MapOfLocations.module.scss';

interface MapOfLocationsInterface {}

export const MapOfLocations: FC<MapOfLocationsInterface> = () => (
  <section className={cx(styles.wrap)}>
    <HeaderOfBlock text="Game servers on the map" />
    <TitleOfBlock className={cx(styles.title)} text="Map of locations" />
    <div className={cx(styles['wrap-img'])}>
      <Image
        className={cx(styles.img)}
        style={{ objectFit: 'contain' }}
        sizes="40vw"
        quality={100}
        fill
        src={Map}
        alt=""
      />
    </div>
  </section>
);
