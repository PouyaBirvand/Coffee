import api from './axios';

export const searchService = {
  searchProducts: async query => {
    if (!query.trim()) return [];

    const response = await api.get(`/products/search?query=${query}`);
    return response.data.products.map(product => ({
      ...product,
      price: Number(product.price),
    }));
  },
};
