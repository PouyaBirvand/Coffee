import { useQuery } from '@tanstack/react-query';
import { productService } from '../services/productService';
import { CATEGORIES } from '../utils/categoryMapping';

export function useProducts(categoryId) {
  return useQuery({
    queryKey: ['products', categoryId],
    queryFn: async () => {
      const response = await productService.getAll();
      const { products } = response.data;
      return products.filter(product =>
        categoryId === CATEGORIES.PERSONALFOODS
          ? product.category_id === CATEGORIES.FOODS
          : product.category_id === categoryId
      );
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 30 * 60 * 1000, // 30 minutes
  });
}
