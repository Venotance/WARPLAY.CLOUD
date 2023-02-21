import { FC } from 'react';

import cx from 'classnames';

import { BtnСutСorner } from '~shared/ui/BtnСutСorner/BtnСutСorner';

import { TariffData } from '../data/Data';
import styles from './TariffBlock.module.scss';

interface TariffBlockInterface {
  description: TariffData;
  active: boolean;
}

export const TariffBlock: FC<TariffBlockInterface> = ({ description, active }) => {
  const time =
    description.duration > 1
      ? `${description.duration} ${description.unitsDuration}s`
      : description.unitsDuration;
  return (
    <div
      className={cx(styles.wrap, {
        [styles['wrap-active']]: active,
      })}
    >
      <p className={cx(styles.title)}>{description.title}</p>
      <p className={cx(styles.price)}>
        {description.price} $ - {time}
      </p>
      {description.privilege.length > 0 && (
        <ul className={cx(styles['privilege-wrap'])}>
          <li className={cx(styles.privelege)}>Available:</li>
          {description.privilege.map((item) => (
            <li key={item} className={cx(styles.privelege)}>
              {item}
            </li>
          ))}
        </ul>
      )}
      <BtnСutСorner className={cx(styles.btn)} href="#" text="Choose" />
    </div>
  );
};
