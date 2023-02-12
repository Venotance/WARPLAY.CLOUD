import { FC } from 'react';

import cx from 'classnames';

import 'swiper/css';
import 'swiper/less/autoplay';
import { ImageForSlider } from '../data/data';
import styles from './Banner.module.scss';
import { Slider } from './Slider/Slider';

interface BannerInterface {}

export const Banner: FC<BannerInterface> = () => (
  <div className={cx(styles.wrap)}>
    <Slider imgArray={ImageForSlider} />
  </div>
);
