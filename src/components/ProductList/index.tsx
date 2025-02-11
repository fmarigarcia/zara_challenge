import { ListProduct } from '@/types/product';
import React from 'react';
import ProductCard from '../ProductCard';
import styles from './styles.module.css';

const ProductList: React.FC<{ products: ListProduct[] }> = ({ products }) => {
  return (
    <div className={styles.listContainer}>
      <div className={styles.list}>
        {products.map((product, i) => (
          <ProductCard product={product} key={`${product.id}-${i}`} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
