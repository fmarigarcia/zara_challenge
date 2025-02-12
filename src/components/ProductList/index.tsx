import React from 'react';
import { ListProduct } from '@/types/product';
import ProductCard from './ProductCard';
import styles from './styles.module.css';

interface IProductListProps {
  products: ListProduct[];
}

const ProductList: React.FC<IProductListProps> = ({ products }) => {
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
