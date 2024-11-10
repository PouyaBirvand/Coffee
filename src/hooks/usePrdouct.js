import { useQuery } from '@tanstack/react-query';
import { productService } from '../services/productSerivce';

export function useProducts(categoryId) {
  return useQuery({
    queryKey: ['products', categoryId],
    queryFn: async () => {
      const response = await productService.getAll();
      // همه اطلاعات رو مستقیماً از API میگیریم
      const { products, success } = response.data;
      
      // فیلتر بر اساس category_id که از API میاد
      return products.filter(product => product.category_id === categoryId);
    }
  });
}
