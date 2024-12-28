import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cartService } from "../services/cartService";
import { useAppContext } from "../context/AppContext";

export function useTableManagement() {
  const [showForm, setShowForm] = useState(
    () => !localStorage.getItem("tableNumber")
  );
  const [tableNumber, setTableNumber] = useState("");
  const { setCartId } = useAppContext();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  // Add beforeunload event listener
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("cartId");
      localStorage.removeItem("tableNumber");
      localStorage.removeItem("formSubmittedAt");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const createCartMutation = useMutation({
    mutationFn: () =>
      cartService.create({
        table_number: tableNumber,
        status: "active",
      }),
    onSuccess: (response) => {
      setShowForm(false);
      const cartId = response.data.id;
      localStorage.setItem("cartId", cartId);
      localStorage.setItem("tableNumber", tableNumber);
      localStorage.setItem("formSubmittedAt", Date.now().toString());

      setCartId(cartId);
      queryClient.invalidateQueries(["cart", cartId]);
    },
  });

  useEffect(() => {
    const formSubmittedAt = localStorage.getItem("formSubmittedAt");
    const tableNumber = localStorage.getItem("tableNumber");

    if (formSubmittedAt && tableNumber) {
      setShowForm(false);
    }
  }, []);

  const handleSubmit = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      await createCartMutation.mutateAsync();
    } catch (error) {
      // console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return {
    showForm,
    tableNumber,
    setTableNumber,
    handleSubmit,
    handleCancel,
    isLoading,
  };
}
