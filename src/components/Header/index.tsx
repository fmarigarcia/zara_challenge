import React from 'react';
import Link from 'next/link';
import { routes } from '@/app/routes';
import Logo from '@/icons/Logo';
import CartLink from './CartLink';
import { testIds } from './index.test';
import styles from './styles.module.css';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Link href={routes.home} data-testid={testIds.link}>
        <Logo />
      </Link>
      <CartLink count={0} />
    </div>
  );
};

export default Header;
