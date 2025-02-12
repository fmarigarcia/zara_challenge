import React from 'react';
import Link from 'next/link';
import { routes } from '@/app/routes';
import Bag from '@/icons/Bag';
import { testIds } from './index.test';
import styles from './styles.module.css';

interface ICartLinkProps {
  count: number;
}

const CartLink: React.FC<ICartLinkProps> = ({ count }) => {
  return (
    <Link href={routes.cart} className={styles.cartLink} data-testid={testIds.link}>
      <Bag />
      <span data-testid={testIds.count}>{count}</span>
    </Link>
  );
};

export default CartLink;
