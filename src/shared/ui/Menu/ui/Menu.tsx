import { FC } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import cx from 'classnames';

import { LinkNavInterface } from '../data/Data';
import styles from './Menu.module.scss';

// import { LinkType } from '..';

interface MenuInterface {
  menuList: LinkNavInterface[];
  className: string;
}

export const Menu: FC<MenuInterface> = ({ menuList, className }) => {
  const router = useRouter();
  const pathName = router.pathname;
  return (
    <nav className={cx(styles.wrap, className)}>
      <ul className={cx(styles['link-list'])}>
        {pathName &&
          menuList.map((item) => (
            <li
              className={cx(styles['li-item'], {
                [styles['li-item_active']]: pathName === item.link,
              })}
              key={item.id}
            >
              <Link className={cx(styles.link)} href={item.link}>
                {item.name}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};
