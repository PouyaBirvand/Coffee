import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { useModal } from '../context/ModalContext';

export const useBackButton = () => {
  const { orderDetails } = useAppContext();
  const { setShowOrderModal } = useModal();

  useEffect(() => {
    const handleBackButton = (e) => {
      if (orderDetails?.success) {
        e.preventDefault();
        setShowOrderModal(true);
        window.history.pushState(null, '', window.location.pathname);
      }
    };

    window.history.pushState(null, '', window.location.pathname);
    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [orderDetails?.success, setShowOrderModal]);
};
