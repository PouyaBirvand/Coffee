import {
  CoffeeIcon,
  DefaultIcon,
  DessertIcon,
  FastFoodIcon,
  IceCreamIcon,
  PersonalFoodIcon,
  ShakeIcon,
} from '../../Icons';

export const getCategoryIcon = categoryName => {
  switch (categoryName.toLowerCase()) {
    case 'بستنی':
      return <IceCreamIcon />;

    case 'دسر':
      return <DessertIcon />;

    case 'شیک':
      return <ShakeIcon />;

    case 'قهوه':
      return <CoffeeIcon />;

    case 'فست فود':
      return <FastFoodIcon />;

    case 'غذای شخصی':
      return <PersonalFoodIcon />;

    default:
      return <DefaultIcon />;
  }
};
