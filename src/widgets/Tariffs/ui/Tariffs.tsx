import { FC } from 'react';

import cx from 'classnames';

import { HeaderOfBlock } from '~shared/ui/HeaderOfBlock/HeaderOfBlock';
import { TitleOfBlock } from '~shared/ui/TitleOfBlock/TitleOfBlock';

import { TariffArray } from '../data/data';
import { TariffBlock } from './TariffBlock/TariffBlock';
import styles from './Tariffs.module.scss';

interface TariffsInterface {}

export const Tariffs: FC<TariffsInterface> = () => (
  <section className={cx(styles.wrap)}>
    <HeaderOfBlock className={cx(styles.header)} text="Flexible tariffs" />
    <TitleOfBlock className={cx(styles.title)} text="Available subscriptions" />
    <div className={cx(styles['subscribtions-wrap'])}>
      {TariffArray.map((item) => (
        <TariffBlock key={item.id} description={item} />
      ))}
    </div>
  </section>
);
