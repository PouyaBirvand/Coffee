import { useMutation, useQueryClient } from "@tanstack/react-query";
import { orderService } from "../services/orderService";

export const useCompleteOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (tableNumber) => {
      try {
        // Complete order directly without status check
        const orderResponse = await orderService.completeOrder(tableNumber);
        return orderResponse;
      } catch (error) {
        // console.error("Order completion error:", error);
        // throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });
};
