import { useNavigate } from 'react-router-dom';
import { generateSlug } from '../utils/categoryMapping';

export const useDynamicRouting = () => {
  const navigate = useNavigate();

  const navigateToCategory = category => {
    const slug = generateSlug(category.name);
    navigate(`/${slug}`, { replace: true });
  };

  return { navigateToCategory };
};
