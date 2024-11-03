import { useQuery } from '@tanstack/react-query'
import { initialItems } from '../components/initialItems';


  export function useProducts(category) {
    return useQuery({
        queryKey: ['products', category],
        queryFn: () => {
            return initialItems.filter(item => item.category === category);
        },
        staleTime: Infinity,
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false
    });
}