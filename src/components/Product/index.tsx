import { routes } from '@/app/routes';
import { ListProduct } from '@/types/product';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { testIds } from './index.test';
import styles from './styles.module.css';

const ProductCard: React.FC<{ product: ListProduct }> = ({ product }) => {
  return (
    <Link href={`${routes.product}/${product.id}`} data-testid={testIds.link}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <Image src={product.imageUrl} alt={product.name} fill className={styles.image} />
        </div>
        <div className={styles.data}>
          <div className={styles.phoneName}>
            <span className={styles.brand} data-testid={testIds.brand}>
              {product.brand}
            </span>
            <span className={styles.text12} data-testid={testIds.name}>
              {product.name}
            </span>
          </div>
          <div className={clsx(styles.price, styles.text12)} data-testid={testIds.price}>
            {product.basePrice} EUR
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
