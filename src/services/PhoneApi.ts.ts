import { ListProduct } from '@/types/product';

const API_KEY = process.env.API_KEY;
const PHONE_LIST_LIMIT = 20;

const PhoneApi = () => {
  const getPhones = (): Promise<ListProduct[]> => {
    const url = new URL('https://prueba-tecnica-api-tienda-moviles.onrender.com/products');
    url.searchParams.set('limit', `${PHONE_LIST_LIMIT}`);
    return fetch(url, {
      headers: {
        'X-API-KEY': API_KEY ?? '',
      },
    }).then((res) => res.json());
  };

  return {
    getPhones,
  };
};

export default PhoneApi;
