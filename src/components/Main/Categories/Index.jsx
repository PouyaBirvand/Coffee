import { memo } from 'react';
import { CategoryIcon } from './CategoryIcon';
import { useCategories } from '../../../hooks/useCategories';
import { useCategoryData } from '../../../hooks/useCategoryData';
import { useDynamicRouting } from '../../../hooks/useDynamicRouting';
import { getCategoryIcon } from './categoryIcons';

const Categories = memo(function Categories() {
  const { selectedCategory, handleCategoryChange } = useCategories();
  const { data: categories = [] } = useCategoryData();
  const { navigateToCategory } = useDynamicRouting();

  const handleClick = category => {
    handleCategoryChange(category.id);
    navigateToCategory(category);
  };

  return (
    <div className="w-full max-w-full mx-auto">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-3 scale-[0.8] bg-warm-wood bg-opacity-60 rounded-full py-1 px-2 w-max mx-auto">
          {categories.map(category => (
            <CategoryIcon
              key={category.id}
              icon={getCategoryIcon(category.name)}
              isSelected={selectedCategory === category.id}
              onClick={() => handleClick(category)}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Categories;
