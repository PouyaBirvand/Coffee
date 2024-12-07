import api from './axios';

export const cartService = {
  
  create: (data) => api.post('/carts', {
    table_number: data.table_number,
    status: data.status
}),

  addItem: async (cartId, product) => {
    console.log('Cart Service - Adding:', { cartId, product });
    return await api.post(`/carts/${cartId}/items`, {
        product_id: parseInt(product.id),
        quantity: 1
    });
},

  viewCart: (cartId) => {
    if (!cartId) {
        throw new Error('Cart ID is required');
    }
    return api.get(`/carts/${cartId}`);
},

  updateQuantity: (cartId, itemId, change) => {
    const endpoint = `/carts/${cartId}/items/${itemId}/${change > 0 ? 'increase' : 'decrease'}`;
    
    // Adding the quantity parameter in the request body
    const payload = {
      quantity: 1
    };
    
    return api.post(endpoint, payload)
      .then(response => {
        console.log('Success:', {
          endpoint,
          response: response.data,
          cartId,
          itemId,
          change
        });
        return response;
      })
      .catch(error => {
        console.log('Error details:', error.response?.data);
        throw error;
      });
  },
  
  removeItem: (cartId, itemId) => {
    return api.delete(`/carts/${cartId}/items/${itemId}`)
      .then(response => {
        console.log('Item removed successfully:', response.data);
        return response;
      });
  },
  
  getCartOrder: async (cartId) => {
    const response = await api.get(`/carts/${cartId}/viewcartorder`);
    return response.data;
  }

  
};

