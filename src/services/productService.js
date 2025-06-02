import api from './axios';

export const productService = {
  getAll: () => api.get('/products'),
  getById: id => api.get(`/products/${id}`),
  create: data => api.post('/products', data),
  delete: id => api.delete(`/products/${id}`),
};
