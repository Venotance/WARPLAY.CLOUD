import { FC } from 'react';

import cx from 'classnames';

import { TariffData } from '~widgets/Tariffs/data/data';

import { BtnСutСorner } from '~shared/ui/BtnСutСorner/BtnСutСorner';

import styles from './TariffBlock.module.scss';

interface TariffBlockInterface {
  description: TariffData;
}

export const TariffBlock: FC<TariffBlockInterface> = ({ description }) => {
  const time =
    description.duration > 1
      ? `${description.duration} ${description.unitsDuration}s`
      : description.unitsDuration;
  return (
    <div className={cx(styles.wrap)}>
      <p className={cx(styles.title)}>{description.title}</p>
      <p className={cx(styles.price)}>
        {description.price} $ - {time}
      </p>
      {description.privilege.length > 0 && (
        <div className={cx(styles['privilege-wrap'])}>
          <p className={cx(styles.privelege)}>Available:</p>
          {description.privilege.map((item) => (
            <p key={item} className={cx(styles.privelege)}>
              {item}
            </p>
          ))}
        </div>
      )}
      <BtnСutСorner className={cx(styles.btn)} href="#" text="Choose" />
    </div>
  );
};
