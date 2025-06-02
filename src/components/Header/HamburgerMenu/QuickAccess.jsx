import { useMemo } from 'react';
import { useCategoryData } from '../../../hooks/useCategoryData';
import { useCategoryNavigation } from '../../../hooks/useCategoryNavigation';
import CategoryItem from './CategoryItem';
import {
  CoffeeIcon,
  DefaultIcon,
  DessertIcon,
  FastFoodIcon,
  IceCreamIcon,
  PersonalFoodIcon,
  ShakeIcon,
} from '../../Icons';

const DEFAULT_ICON = <DefaultIcon />;

const CATEGORY_ICONS = {
  1: <IceCreamIcon />,
  2: <DessertIcon />,
  3: <ShakeIcon />,
  4: <CoffeeIcon />,
  5: <FastFoodIcon />,
  6: <PersonalFoodIcon />,
  default: DEFAULT_ICON,
};

const QuickAccess = ({ closeMenu }) => {
  const { data: categories } = useCategoryData();
  const { activeItem, handleItemClick } = useCategoryNavigation(
    categories,
    closeMenu
  );

  const memoizedCategories = useMemo(
    () =>
      categories?.map(category => (
        <CategoryItem
          key={category.id}
          category={category}
          isActive={activeItem === category.name}
          onClick={handleItemClick}
          icon={CATEGORY_ICONS[category.id] || CATEGORY_ICONS.default}
        />
      )),
    [categories, activeItem, handleItemClick]
  );

  return (
    <>
      <p className="mt-1 text-[0.9rem] text-right ">دسترسی سریع</p>
      <ul className="border-b border-opacity-30 pb-1 border-dark-cocoa pr-2">
        {memoizedCategories}
      </ul>
    </>
  );
};

export default QuickAccess;
