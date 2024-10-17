import { createContext, useState, useContext } from 'react';

const AppContext = createContext();
// eslint-disable-next-line react/prop-types
export function AppProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState('Coffee');
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(prev => !prev);
  };

  const value = {
    selectedCategory,
    setSelectedCategory,
    isExpanded,
    setIsExpanded,
    toggleExpanded,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}