import { FC, ReactElement } from 'react';

import Image from 'next/image';

import cx from 'classnames';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ImageArrayItemInterface } from '~shared/lib/ImageHelpers/ImageArrayInterface';

import styles from './Slider.module.scss';

interface SliderInterface {
  imgArray: ImageArrayItemInterface[];
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
          priority
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 90vw,
          (max-width: 1300px) 90vh,
          (max-width: 1500px) 1400px,
          1920px"
          src={imgArray[0].image}
          alt=""
        />
      </SwiperSlide>
      {imgArray.length > 1 &&
        imgArray.slice(1).map((item) => (
          <SwiperSlide key={item.id} className={cx(styles.slide)}>
            <Image quality={90} fill style={{ objectFit: 'cover' }} src={item.image} alt="" />
          </SwiperSlide>
        ))}
    </Swiper>
  </div>
);
