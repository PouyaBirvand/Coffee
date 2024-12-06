import api from "./axios";

export const orderService = {
  completeOrder: (tableNumber) => {
      if (!tableNumber) {
          throw new Error('Table number is required');
      }
      return api.post(`/carts/${tableNumber}/complete-order`, {
          table_number: parseInt(tableNumber)
      });
  },

  getStatus: (tableNumber) => {
      if (!tableNumber) {
          throw new Error('Table number is required');
      }
      return api.get(`/carts/get_status/${parseInt(tableNumber)}`);
  },

  clearCart: (tableNumber) => {
      if (!tableNumber) {
          throw new Error('Table number is required');
      }
      return api.post(`/carts/clear/${parseInt(tableNumber)}`);
  }
};
