import { useQuery } from '@tanstack/react-query';
import { productService } from '../services/productService';
import { CATEGORIES } from '../utils/categoryMapping';

export function useProducts(categoryId) {
  return useQuery({
    queryKey: ['products', categoryId],
    queryFn: async () => {
      const response = await productService.getAll();
      const { products } = response.data;
      
      // For PersonalFoods, return Foods products directly
      if (categoryId === CATEGORIES.PERSONALFOODS) {
        return products.filter(product => product.category_id === CATEGORIES.FOODS);
      }
      
      // For other categories, return their respective products
      return products.filter(product => product.category_id === categoryId);
    }
  });
}