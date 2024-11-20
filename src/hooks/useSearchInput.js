import { useState, useEffect, useRef, useCallback } from 'react';

export const useSearchInput = (onSearch) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSearch = useCallback(() => {
    onSearch(query);
  }, [query, onSearch]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  return {
    query,
    setQuery,
    inputRef
  };
};
