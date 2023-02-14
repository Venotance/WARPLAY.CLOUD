import { FC } from 'react';

import { ExportOutlined, SettingOutlined } from '@ant-design/icons';
import cx from 'classnames';

import { TariffType } from '~entities/Tariff';

import { ButtonSmooth } from '~shared/ui/ButtonSmooth/ButtonSmooth';

import styles from './DropdownUser.module.scss';

interface DropdownUserInterface {
  mail: string;
  tariff: TariffType;
}

export const DropdownUser: FC<DropdownUserInterface> = ({ mail, tariff }) => (
  <div className={cx(styles.wrap)}>
    <ul className={cx(styles.info)}>
      <li>
        <p className={cx(styles.mail)}>{mail}</p>
      </li>
      <li>
        <p
          className={cx(
            styles.tariff,
            { [styles.basic]: tariff === 'Basic' },
            { [styles.standart]: tariff === 'Standart' },
            { [styles.premium]: tariff === 'Premium' }
          )}
        >
          {tariff}
        </p>
      </li>
    </ul>
    <ul className={cx(styles['link-wrap'])}>
      <li>
        <ButtonSmooth
          ico={<SettingOutlined />}
          text="Settings"
          className={cx(styles['settings-ico'])}
        />
      </li>
      <li>
        <ButtonSmooth
          ico={<ExportOutlined />}
          text="Log out"
          className={cx(styles['logout-ico'])}
        />
      </li>
    </ul>
  </div>
);
