import api from './axios';

export const cartService = {
    create: (data) => api.post('/carts', {
        table_number: data.table_number,
        status: data.status
    }),

    addItem: async (cartId, product) => {
        return await api.post(`/carts/${cartId}/items`, {
            product_id: parseInt(product.id),
            quantity: 1
        });
    },

    viewCart: async (cartId) => {
        if (!cartId) {
            throw new Error('Cart ID is required');
        }
        return await api.get(`/carts/${cartId}`);
    },

    updateQuantity: (cartId, itemId, change) => {
        const endpoint = `/carts/${cartId}/items/${itemId}/${change > 0 ? 'increase' : 'decrease'}`;
        const payload = {
          quantity: 1
        };
        return api.post(endpoint, payload);
    },

    removeItem: (cartId, itemId) => {
        return api.delete(`/carts/${cartId}/items/${itemId}`);
    },
};
