import ProductList from '@/components/ProductList';
import PhoneApi from '@/services/PhoneApi.ts';
import React from 'react';
import styles from './page.module.css';

const Home: React.FC = async () => {
  const phoneApi = PhoneApi();
  const products = await phoneApi.getPhones();

  return (
    <div className={styles.contentContainer}>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
