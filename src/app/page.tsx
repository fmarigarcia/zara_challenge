'use client';

import React from 'react';
import ProductList from '@/components/ProductList';
import SearchBar from '@/components/SearchBar';
import useProductList from '@/hooks/useProductList';
import styles from './page.module.css';

const Home: React.FC = () => {
  const { products, searchQuery, setSearchQuery } = useProductList();

  return (
    <div className={styles.contentContainer}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} productQuantity={products.length} />
      <ProductList products={products} />
    </div>
  );
};

export default Home;
