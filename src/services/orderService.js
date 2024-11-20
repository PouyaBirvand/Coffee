import api from "./axios";

export const orderService = {
  completeOrder: (tableNumber) => {
    return api.post('/carts/complete-order', {
      table_number: tableNumber
    });
  }
};
