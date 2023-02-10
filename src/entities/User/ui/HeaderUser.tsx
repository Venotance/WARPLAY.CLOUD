import { FC, useState } from 'react';

import Link from 'next/link';

import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import cx from 'classnames';

import styles from './HeaderUser.module.scss';

interface HeaderUserInterface {
  className: string;
}

export const HeaderUser: FC<HeaderUserInterface> = ({ className }) => {
  const [Auth, setAuth] = useState(false);
  return (
    <div className={cx(styles.wrap, className)}>
      {!Auth && (
        <Link onClick={() => setAuth(!Auth)} className={cx(styles['noauth-wrap'])} href="#">
          <Avatar className={cx(styles['user-ico'])} icon={<UserOutlined />} />
          <p>Login</p>
        </Link>
      )}
      {Auth && <div>NotAuth</div>}
    </div>
  );
};
