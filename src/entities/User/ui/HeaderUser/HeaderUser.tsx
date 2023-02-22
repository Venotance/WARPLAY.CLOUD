import { FC, useRef, useState } from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown } from 'antd';
import cx from 'classnames';

import { useClickOutside } from '~shared/hooks/useClickOutside';
import { ButtonSmooth } from '~shared/ui/ButtonSmooth/ButtonSmooth';

import { DropdownUser } from './DropdownUser/DropdownUser';
import styles from './HeaderUser.module.scss';

interface HeaderUserInterface {
  className: string;
}

export const HeaderUser: FC<HeaderUserInterface> = ({ className }) => {
  const [Auth, setAuth] = useState(false);
  const refDropdown = useRef(null);
  const refDropWrapper = useRef(null);
  const [openDrop, setOpenDrop] = useState(false);
  useClickOutside({
    refDrop: refDropdown,
    refDropWrap: refDropWrapper,
    callback: () => setOpenDrop(false),
  });
  return (
    <div className={cx(styles.wrap, className)}>
      {!Auth && (
        <ButtonSmooth
          ico={<Avatar className={cx(styles['ico-noauth'])} icon={<UserOutlined />} />}
          text="Login"
          onClick={() => setAuth(!Auth)}
          className={cx(styles['noauth-wrap'])}
        />
      )}
      {Auth && (
        <div ref={refDropWrapper}>
          <Dropdown
            className={cx(styles.auth)}
            trigger={['click']}
            placement="bottomRight"
            overlayClassName={cx(styles['auth-overlay'])}
            open={openDrop}
            dropdownRender={() => (
              <DropdownUser refDrop={refDropdown} mail="stas010798@gmail.com" tariff="Basic" />
            )}
          >
            <UserOutlined onClick={() => setOpenDrop(!openDrop)} />
          </Dropdown>
        </div>
      )}
    </div>
  );
};
