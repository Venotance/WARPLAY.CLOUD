import { FC } from 'react';

import cx from 'classnames';

import { HeaderOfBlock } from '~shared/ui/HeaderOfBlock/HeaderOfBlock';
import { SmallBtnOfBlock } from '~shared/ui/SmallBtnOfBlock/SmallBtnOfBlock';
import { TitleOfBlock } from '~shared/ui/TitleOfBlock/TitleOfBlock';

import styles from './HowItWork.module.scss';
import { ImgServerHost } from './ImgServerHost/ImgServerHost';

interface HowItWorkInterface {}

export const HowItWork: FC<HowItWorkInterface> = () => (
  <section className={cx(styles.wrap)}>
    <ImgServerHost />
    <div className={cx(styles.description)}>
      <HeaderOfBlock text="Cloud Gaming" />
      <TitleOfBlock className={cx(styles.title)} text="How it works" />
      <p className={cx(styles.text1)}>
        Our servers run the game and send you a picture that you can control in real time!
      </p>
      <p className={cx(styles.text2)}>
        The application will run on a PC with a processor from 1.5 GHz, from 1 Gb RAM and Internet
        access from 15 Mbit/s on all operating systems Windows 7, 8, 10 macOS and Linux.
      </p>
      <SmallBtnOfBlock animationDir="right" className={cx(styles.btn)} text="Download" />
    </div>
  </section>
);
