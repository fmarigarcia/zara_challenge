'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import { routes } from '@/app/routes';
import Bag from '@/icons/Bag';
import { CartContext } from '@/services/CartProvider';
import styles from './styles.module.css';

const CartLink: React.FC = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <Link href={routes.cart} className={styles.cartLink}>
      <Bag />
      <span>{cartItems.length}</span>
    </Link>
  );
};

export default CartLink;
