import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export const useProductSelection = clearSearch => {
  const navigate = useNavigate();
  const { setCurrentItem, setIsExpanded, setSelectionSource } = useAppContext();

  const handleProductClick = product => {
    const newProduct = JSON.parse(JSON.stringify(product));
    setSelectionSource('search');
    setCurrentItem(newProduct);
    setIsExpanded(true);
    clearSearch();
    navigate('/', { replace: true });
  };

  return { handleProductClick };
};
