import React from 'react';
import Link from 'next/link';
import { routes } from '@/app/routes';
import ProductOptions from '@/components/Product/ProductOptions';
import ProductSpecifications from '@/components/Product/ProductSpecifications';
import ProductCarousel from '@/components/ProductCarousel';
import ArrowLeft from '@/icons/ArrowLeft';
import PhoneApi from '@/services/PhoneApi.ts';
import styles from './page.module.css';

interface IProductPageProps {
  params: Promise<{ id: string }>;
}

const ProductPage: React.FC<IProductPageProps> = async ({ params }) => {
  const { id } = await params;
  const phoneApi = PhoneApi();
  const product = await phoneApi.getPhoneById(id);
  return (
    <>
      <Link href={routes.home} className={styles.backLink} prefetch={false}>
        <ArrowLeft />
        <span>BACK</span>
      </Link>
      <div className={styles.pageContainer}>
        <div className={styles.columnContainer}>
          <ProductOptions product={product} />
          <ProductSpecifications product={product} />
          <ProductCarousel title="Similar Items" products={product.similarProducts} />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
