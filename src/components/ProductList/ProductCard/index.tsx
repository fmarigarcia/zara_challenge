import { routes } from '@/app/routes';
import { ListProduct } from '@/types/product';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';

const ProductCard: React.FC<{ product: ListProduct }> = ({ product }) => {
  return (
    <Link href={`${routes.product}/${product.id}`}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
            priority
          />
        </div>
        <div className={styles.data}>
          <div className={styles.phoneName}>
            <span className={styles.brand}>{product.brand}</span>
            <span className={styles.text12}>{product.name}</span>
          </div>
          <div className={clsx(styles.price, styles.text12)}>{product.basePrice} EUR</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
