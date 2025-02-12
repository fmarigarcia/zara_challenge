import { ListProduct, Product } from '@/types/product';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const PHONE_LIST_LIMIT = 20;

const PhoneApi = () => {
  const getPhones = (searchQuery?: string): Promise<ListProduct[]> => {
    const url = new URL('https://prueba-tecnica-api-tienda-moviles.onrender.com/products');
    if (searchQuery?.length) {
      url.searchParams.set('search', `${searchQuery}`);
    }
    url.searchParams.set('limit', `${PHONE_LIST_LIMIT}`);
    return fetch(url, {
      headers: {
        'X-API-KEY': API_KEY ?? '',
      },
      cache: 'force-cache',
    }).then((res) => res.json());
  };

  const getPhoneById = (phoneId: string): Promise<Product> => {
    const url = new URL(`https://prueba-tecnica-api-tienda-moviles.onrender.com/products/${phoneId}`);
    return fetch(url, {
      headers: {
        'X-API-KEY': API_KEY ?? '',
      },
      cache: 'force-cache',
    }).then((res) => res.json());
  };

  return {
    getPhones,
    getPhoneById,
  };
};

export default PhoneApi;
