'use client';

import { routes } from '@/app/routes';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { NextRouter } from 'next/router';
import React from 'react';
import CartLink from '.';

export const testIds = {
  count: 'cart-count',
  link: 'cart-link',
};

describe('CartLink', () => {
  const count = 1;

  const router: Partial<NextRouter> = {
    push: jest.fn(),
    prefetch: jest.fn(),
  };

  test('renders correctly', () => {
    render(<CartLink count={count} />);

    expect(screen.getByTestId(testIds.count).textContent).toBe(`${count}`);
  });

  test('should navigate to favorites', () => {
    render(
      <RouterContext.Provider value={router as NextRouter}>
        <CartLink count={count} />
      </RouterContext.Provider>
    );

    const link = screen.getByTestId(testIds.link);
    fireEvent.click(link);

    expect(router.push).toHaveBeenCalledWith(routes.cart, expect.objectContaining({}));
  });
});
