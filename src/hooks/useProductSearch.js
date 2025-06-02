import { useState, useCallback, useEffect } from 'react';
import debounce from 'lodash/debounce';
import { searchService } from '../services/searchService';

export const useProductSearch = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const debouncedSearch = debounce(async () => {
      if (!searchTerm.trim()) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const data = await searchService.searchProducts(searchTerm);
        setResults(data);
      } catch (error) {
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 500);

    debouncedSearch();

    return () => debouncedSearch.cancel();
  }, [searchTerm]);

  const searchProducts = useCallback(query => {
    setSearchTerm(query);
  }, []);

  const clearResults = useCallback(() => {
    setSearchTerm('');
    setResults([]);
  }, []);

  return {
    results,
    isLoading,
    searchProducts,
    setResults: clearResults,
  };
};
