import { routes } from '@/app/routes';
import { mockProduct } from '@/mocks/product';
import { fireEvent, render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { NextRouter } from 'next/router';
import React from 'react';
import ProductCard from '.';

describe('Product', () => {
  const router: Partial<NextRouter> = {
    push: jest.fn(),
    prefetch: jest.fn(),
  };

  test('renders correctly', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText(mockProduct.brand));
    expect(screen.getByText(mockProduct.name));
    expect(screen.getByText(`${mockProduct.basePrice} EUR`));
  });

  test('should navigate to product page', () => {
    render(
      <RouterContext.Provider value={router as NextRouter}>
        <ProductCard product={mockProduct} />
      </RouterContext.Provider>
    );
    const link = screen.getByRole('link');
    fireEvent.click(link);
    expect(router.push).toHaveBeenCalledWith(`${routes.product}/${mockProduct.id}`, expect.objectContaining({}));
  });
});
