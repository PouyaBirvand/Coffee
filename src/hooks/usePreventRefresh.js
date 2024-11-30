import { useEffect } from 'react';

export const usePreventRefresh = () => {
  useEffect(() => {
    const preventRefresh = (e) => {
      e.preventDefault();
      e.returnValue = '';
    };

    window.addEventListener('beforeunload', preventRefresh);
    
    return () => {
      window.removeEventListener('beforeunload', preventRefresh);
    };
  }, []);
};
