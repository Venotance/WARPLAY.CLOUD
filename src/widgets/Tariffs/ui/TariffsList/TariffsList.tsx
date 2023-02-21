import { FC, useState } from 'react';

import cx from 'classnames';

import { Tariff, TariffArray } from '~entities/Tariff';

import styles from './TariffsList.module.scss';

interface TariffsListInterface {}

export const TariffsList: FC<TariffsListInterface> = () => {
  const [activeTariff, setActiveTariff] = useState(1);
  const [tariffData] = useState(TariffArray);
  return (
    <ul className={cx(styles.wrap)}>
      {tariffData.map((item, index) => (
        <li
          key={item.id}
          className={cx(styles['tariff-wrap'])}
          onMouseEnter={() => setActiveTariff(index)}
          onMouseLeave={() => setActiveTariff(1)}
        >
          <Tariff active={index === activeTariff} description={item} />
        </li>
      ))}
    </ul>
  );
};
