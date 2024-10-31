import { useState, useEffect } from 'react';

export const useTableForm = () => {
  const [showForm, setShowForm] = useState(() => {
    return !localStorage.getItem('hasVisited');
  });

  const handleClose = () => {
    setShowForm(false);
    localStorage.setItem('hasVisited', 'true');
  };

  useEffect(() => {
    if (!localStorage.getItem('hasVisited')) {
      setShowForm(true);
    }
  }, []);

  return { showForm, handleClose };
};