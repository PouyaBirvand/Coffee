import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export function ModalProvider({ children }) {
  const [showOrderModal, setShowOrderModal] = useState(false);

  const handleBackClick = (isCompleted) => {
    if (isCompleted) {
      setShowOrderModal(true);
    }
  };

  return (
    <ModalContext.Provider value={{ showOrderModal, setShowOrderModal, handleBackClick }}>
      {children}
    </ModalContext.Provider>
  );
}
