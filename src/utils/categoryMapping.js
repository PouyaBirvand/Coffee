export const CATEGORIES = {
  ICECREAM: 1,
  DESSERT: 2,
  SHAKE: 3,
  COFFEE: 4,
  FOODS: 5,
  PERSONALFOODS: 6,
};

export const CATEGORY_NAMES = {
  1: 'Icecream',
  2: 'Dessert',
  3: 'Shake',
  4: 'Coffee',
  5: 'Food',
  6: 'PersonalFoods',
};

export const generateSlug = name => {
  return name.toLowerCase().replace(/\s+/g, '-');
};

export const normalizeSlug = slug => {
  return slug.toLowerCase().replace(/-/g, '');
};

export const convertApiDataToLegacyFormat = apiCategories => {
  const categories = {};
  const categoryNames = {};

  apiCategories.forEach(cat => {
    const key = cat.name.toUpperCase().replace(/\s+/g, '');
    categories[key] = cat.id;
    categoryNames[cat.id] = cat.name;
  });

  return { categories, categoryNames };
};
