import { useQuery } from '@tanstack/react-query';
import { productService } from '../services/productService';

export function useProducts(categoryId) {
  return useQuery({
    queryKey: ['products', categoryId],
    queryFn: async () => {
      const response = await productService.getAll();
      
      const { products } = response.data;
      
      return products.filter(product => product.category_id === categoryId);
    }
  });
}
