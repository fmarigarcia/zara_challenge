// import { routes } from '@/app/routes';
// import { mockProduct } from '@/mocks/product';
// import { fireEvent, render, screen } from '@testing-library/react';
// import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
// import { NextRouter } from 'next/router';
// import React from 'react';
// import ProductCard from '.';

export const testIds = {
  link: 'product_card-link',
  brand: 'product_card-brand',
  name: 'product_card-name',
  price: 'product_card-price',
};

// describe('Product', () => {
//   const router: Partial<NextRouter> = {
//     push: jest.fn(),
//     prefetch: jest.fn(),
//   };

//   test('renders correctly', () => {
//     render(<ProductCard product={mockProduct} />);

//     expect(screen.getByTestId(testIds.brand).textContent).toBe(mockProduct.brand);
//     expect(screen.getByTestId(testIds.name).textContent).toBe(mockProduct.name);
//     expect(screen.getByTestId(testIds.price).textContent).toBe(`${mockProduct.basePrice} EUR`);
//   });

//   test('should navigate to product page', () => {
//     render(
//       <RouterContext.Provider value={router as NextRouter}>
//         <ProductCard product={mockProduct} />
//       </RouterContext.Provider>
//     );

//     const link = screen.getByTestId(testIds.link);
//     fireEvent.click(link);

//     expect(router.push).toHaveBeenCalledWith(`${routes.product}/${mockProduct.id}`, expect.objectContaining({}));
//   });
// });
