import { debounce } from 'lodash';
import api from './axios';

const DEBOUNCE_DELAY = 300;
export const cartService = {
    create: (data) => api.post('/carts', {
        table_number: data.table_number,
        status: data.status
    }),

    addItem: debounce(async (cartId, product) => {
        return await api.post(`/carts/${cartId}/items`, {
            product_id: parseInt(product.id),
            quantity: 1
        });
    }, DEBOUNCE_DELAY),

    viewCart: async (cartId) => {
        if (!cartId) {
            throw new Error('Cart ID is required');
        }
        return await api.get(`/carts/${cartId}`);
    },

    updateQuantity: debounce(async (cartId, itemId, change) => {
        const endpoint = `/carts/${cartId}/items/${itemId}/${change > 0 ? 'increase' : 'decrease'}`;
        return await api.post(endpoint, { 
            quantity: 1,
            item_id: itemId
        });
    }, DEBOUNCE_DELAY),

    removeItem: async (cartId, itemId) => {
        return await api.delete(`/carts/${cartId}/items/${itemId}`);
    }
};

