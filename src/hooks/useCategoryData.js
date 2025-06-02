import { useQuery } from '@tanstack/react-query';
import { categoryService } from '../services/categoryService';

export const useCategoryData = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await categoryService.getAll();
      return response.data.categories;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 30 * 60 * 1000, // 30 minutes
  });
};
