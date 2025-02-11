import { ListProduct } from '@/types/product';

export const mockProduct: ListProduct = {
  id: 'SMG-S24U',
  brand: 'Samsung',
  name: 'Galaxy S24 Ultra',
  basePrice: 1329,
  imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-violet.png',
};

export const getMockProductArray = (length: number): ListProduct[] =>
  Array.apply(null, Array(length)).map((_, i) => ({ ...mockProduct, id: `${mockProduct.id}_${i}` }));
