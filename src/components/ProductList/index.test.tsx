import { getMockProductArray } from '@/mocks/product';
import { render, screen } from '@testing-library/react';
import React from 'react';
import ProductList from '.';

describe('Product List', () => {
  const productQuantity = 5;
  const products = getMockProductArray(productQuantity);

  test('renders correctly', () => {
    render(<ProductList products={products} />);

    expect(screen.getAllByRole('link')).toHaveLength(productQuantity);
  });
});
