import React from 'react';
import Image from 'next/image';
import { CartProduct } from '@/types/cart';
import styles from './styles.module.css';

interface ICartProductCardProps {
  item: CartProduct;
  onDelete: () => void;
}

const CartProductCard: React.FC<ICartProductCardProps> = ({ item, onDelete }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          fill
          src={item.imageUrl}
          priority
          sizes="(max-width: 1200px) 50vw, 25vw"
          alt={item.name}
          className={styles.image}
        />
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.textContainer}>
          <span>{item.name}</span>
          <span>
            {item.storage} | {item.color}
          </span>
          <span>{item.price} EUR</span>
        </div>
        <button className={styles.delete} onClick={onDelete}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
