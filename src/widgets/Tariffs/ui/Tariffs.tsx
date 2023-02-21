import { FC } from 'react';

import cx from 'classnames';

import { HeaderOfBlock } from '~shared/ui/HeaderOfBlock/HeaderOfBlock';
import { TitleOfBlock } from '~shared/ui/TitleOfBlock/TitleOfBlock';

import styles from './Tariffs.module.scss';
import { TariffsList } from './TariffsList/TariffsList';

interface TariffsInterface {}

export const Tariffs: FC<TariffsInterface> = () => (
  <section className={cx(styles.wrap)}>
    <HeaderOfBlock className={cx(styles.header)} text="Flexible tariffs" />
    <TitleOfBlock className={cx(styles.title)} text="Available subscriptions" />
    <TariffsList />
    <span className={cx(styles.line)} />
  </section>
);
