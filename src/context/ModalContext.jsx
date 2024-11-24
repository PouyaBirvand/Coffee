import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

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

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
