import { useRef, useState } from 'react';

export function useDebounce(callback, delay = 500) {
  const [isProcessing, setIsProcessing] = useState(false);
  const lastCallTime = useRef(0);

  const debouncedFunction = async (...args) => {
    const now = Date.now();
    if (now - lastCallTime.current < delay) return;

    setIsProcessing(true);
    lastCallTime.current = now;
    
    try {
      await callback(...args);
    } finally {
      setIsProcessing(false);
    }
  };

  return [debouncedFunction, isProcessing];
}