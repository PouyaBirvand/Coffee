import { useQuery } from "@tanstack/react-query";
import { categoryService } from "../services/categoryService";

export const useCategoryData = () => {
    const { data: categories } = useQuery({
      queryKey: ["categories"],
      queryFn: async () => {
        const response = await categoryService.getAll();
        return response.data.categories;
      },
    });
  
    return { categories };
  };
  