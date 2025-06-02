import api from './axios';

export const categoryService = {
  getAll: () => api.get('/categories'),
  getById: id => api.get(`/categories/${id}`),
  create: data => api.post('/categories', data),
  delete: id => api.delete(`/categories/${id}`),
};
