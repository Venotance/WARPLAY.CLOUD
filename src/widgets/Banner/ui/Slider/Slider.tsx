import { FC, ReactElement } from 'react';

import Image from 'next/image';

import cx from 'classnames';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Slider.module.scss';

interface SliderInterface {
  imgArray: string[];
  children?: ReactElement;
}

export const Slider: FC<SliderInterface> = ({ imgArray, children }) => (
  <div className={cx(styles.wrap)}>
    {children}
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      speed={1000}
      className={cx(styles['swiper-style'])}
      loop
      autoplay={{
        delay: 3200,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide className={cx(styles.slide)}>
        <Image
          quality={90}
          loading="eager"
          fill
          style={{ objectFit: 'cover' }}
          src={imgArray[0]}
          alt=""
        />
      </SwiperSlide>
      {imgArray.length > 1 &&
        imgArray.slice(1).map((item) => (
          <SwiperSlide className={cx(styles.slide)}>
            <Image quality={90} fill style={{ objectFit: 'cover' }} src={item} alt="" />
          </SwiperSlide>
        ))}
    </Swiper>
  </div>
);
