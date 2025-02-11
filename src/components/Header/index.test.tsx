'use client';

import { routes } from '@/app/routes';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { NextRouter } from 'next/router';
import React from 'react';
import Header from '.';

export const testIds = {
  link: 'header-home-link',
};

describe('Header', () => {
  const router: Partial<NextRouter> = {
    push: jest.fn(),
    prefetch: jest.fn(),
  };
  test('should navigate to home', () => {
    render(
      <RouterContext.Provider value={router as NextRouter}>
        <Header />
      </RouterContext.Provider>
    );

    const link = screen.getByTestId(testIds.link);
    fireEvent.click(link);

    expect(router.push).toHaveBeenCalledWith(routes.home, expect.objectContaining({}));
  });
});
