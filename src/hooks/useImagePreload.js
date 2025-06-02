import { useEffect, useState, useCallback } from 'react';

export const useImagePreload = src => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const img = new Image();

    // Reset state when src changes
    setIsLoaded(false);

    if (src) {
      img.src = src;
      // Check if image is already cached
      if (img.complete) {
        handleLoad();
      } else {
        img.onload = handleLoad;
      }
    }

    return () => {
      img.onload = null;
    };
  }, [src, handleLoad]);

  return isLoaded;
};
