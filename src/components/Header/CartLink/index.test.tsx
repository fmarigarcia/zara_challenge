'use client';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { NextRouter } from 'next/router';
import { routes } from '@/app/routes';
import CartLink from '.';

describe('CartLink', () => {
  const router: Partial<NextRouter> = {
    push: jest.fn(),
    prefetch: jest.fn(),
  };

  test('should navigate to cart', () => {
    render(
      <RouterContext.Provider value={router as NextRouter}>
        <CartLink />
      </RouterContext.Provider>
    );

    const link = screen.getByRole('link');
    fireEvent.click(link);

    expect(router.push).toHaveBeenCalledWith(routes.cart, expect.objectContaining({}));
  });
});
