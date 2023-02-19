import { FC } from 'react';

import cx from 'classnames';

import { HeaderOfBlock } from '~shared/ui/HeaderOfBlock/HeaderOfBlock';
import { SmallBtnOfBlock } from '~shared/ui/SmallBtnOfBlock/SmallBtnOfBlock';
import { TitleOfBlock } from '~shared/ui/TitleOfBlock/TitleOfBlock';

import { StepsArray } from '../data/data';
import styles from './StartPlaying.module.scss';
import { Step } from './Step/Step';

interface StartPlayingInterface {}

export const StartPlaying: FC<StartPlayingInterface> = () => (
  <section className={cx(styles.wrap)}>
    <HeaderOfBlock className={cx(styles.header)} text="Quick start" />
    <TitleOfBlock className={cx(styles.title)} text="Start playing" />
    <div className={cx(styles.steps)}>
      {StepsArray.map((item, index) => (
        <Step
          rightLine={index !== StepsArray.length - 1}
          key={item.id}
          text={item.text}
          img={item.image}
        />
      ))}
    </div>
    <SmallBtnOfBlock className={cx(styles.btn)} text="Begin" />
  </section>
);
