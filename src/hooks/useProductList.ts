import { useEffect, useState } from 'react';
import PhoneApi from '@/services/PhoneApi.ts';
import { ListProduct } from '@/types/product';

const useProductList = () => {
  const phoneApi = PhoneApi();
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<ListProduct[]>([]);

  useEffect(() => {
    setLoading(true);
    const doQuery = async () => {
      const queriedProducts = await phoneApi.getPhones(searchQuery);
      setProducts(queriedProducts);
      setLoading(false);
    };

    doQuery();
  }, [searchQuery]);

  return {
    loading,
    searchQuery,
    setSearchQuery,
    products,
  };
};

export default useProductList;
