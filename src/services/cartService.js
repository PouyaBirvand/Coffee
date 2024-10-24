import api from './axios'

export const cartService = {
    createCart: () => api.post('/carts'),
    viewCart: (cartId) => api.get(`/carts/${cartId}`),
    addItem: (cartId, itemData) => api.post(`/carts/${cartId}/items`, itemData),
    increaseItem: (cartId, itemId) => api.post(`/carts/${cartId}/items/${itemId}/increase`),
    decreaseItem: (cartId, itemId) => api.post(`/carts/${cartId}/items/${itemId}/decrease`)
};