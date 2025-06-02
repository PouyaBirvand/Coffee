import api from './axios';

export const orderService = {
  completeOrder: tableNumber => {
    if (!tableNumber) {
      throw new Error('Table number is required');
    }
    return api.post(`/carts/${tableNumber}/complete-order`, {
      table_number: parseInt(tableNumber),
    });
  },
  getnewCart: tableNumber => {
    return api.get(`/carts/${tableNumber}/getnew`);
  },
};
