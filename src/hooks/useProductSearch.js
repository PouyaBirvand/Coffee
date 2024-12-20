import { useState, useCallback } from 'react';
import debounce from 'lodash/debounce';
import api from '../services/axios';

export const useProductSearch = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchProducts = useCallback(
    debounce(async (searchQuery) => {
      if (!searchQuery.trim()) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const response = await api.get(`/products/search?query=${searchQuery}`);
        const formattedResults = response.data.products.map(product => ({
          ...product,
          price: Number(product.price)
        }));
        setResults(formattedResults);
      } catch (error) {
        // console.log("Search error:", error);
      } finally {
        setIsLoading(false);
      }
    }, 500),
    []
  );

  return {
    results,
    isLoading,
    searchProducts,
    setResults
  };
};
