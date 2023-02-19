import { FC } from 'react';

import cx from 'classnames';

import 'swiper/css';
import 'swiper/less/autoplay';
import { ImageForSlider } from '../data/data';
import styles from './Banner.module.scss';
import { ContentSlider } from './ContentSlider/ContentSlider';
import { Slider } from './Slider/Slider';

interface BannerInterface {}

export const Banner: FC<BannerInterface> = () => (
  <section className={cx(styles.wrap)}>
    <Slider imgArray={ImageForSlider}>
      <ContentSlider />
    </Slider>
  </section>
);
