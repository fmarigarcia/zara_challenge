'use client';

import { render, screen } from '@testing-library/react';
import React from 'react';
import { getMockProductArray } from '@/mocks/product';
import ProductCarousel from '.';

describe('Product Carousel', () => {
  const productQuantity = 5;
  const products = getMockProductArray(productQuantity);

  test('renders correctly', () => {
    render(<ProductCarousel title="Carousel" products={products} />);

    expect(screen.getAllByRole('link')).toHaveLength(productQuantity);
  });
});
