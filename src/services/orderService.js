import api from "./axios";

export const orderService = {
  completeOrder: (tableNumber) => {
    return api.post('/carts/complete-order', {
      table_number: tableNumber
    });
  },
  clearCart: (tableNumber) => {
    return api.post(`/carts/clear/${tableNumber}`);
  },
  getStatus: (tableNumber) => {
    return api.get(`/carts/get_status/${tableNumber}`);
  },
};
