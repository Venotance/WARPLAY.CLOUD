import { FC } from 'react';

import Image from 'next/image';

import cx from 'classnames';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Slider.module.scss';

interface SliderInterface {
  imgArray: string[];
}

export const Slider: FC<SliderInterface> = ({ imgArray }) => (
  <div className={cx(styles['slider-wrap'])}>
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      speed={1000}
      loop
      autoplay={{
        delay: 3000,
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
