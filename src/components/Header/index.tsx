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
      <Link href={routes.home} data-testid={testIds.link} prefetch={false}>
        <Logo />
      </Link>
      <CartLink />
    </div>
  );
};

export default Header;
