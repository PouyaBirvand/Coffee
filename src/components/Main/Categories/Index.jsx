import { categoryIcons } from "./categoryIcons";
import { CategoryIcon } from "./CategoryIcon";
import { useCategories } from "../../../hooks/useCategories";

function Categories() {
  const { selectedCategory, handleCategoryChange } = useCategories();

  return (
    <div className="mt-8 xl:mt-12 lg:mt-12 md:mt-10 sm:mt-8 xs:mt-5 mx-auto w-[80%] max-w-2xl xl:max-w-[20rem] lg:max-w-lg md:max-w-md sm:max-w-sm xs:max-w-xs">
      <div className="bg-warm-wood bg-opacity-60 rounded-full flex justify-between items-center py-1 px-1 xl:px-1 lg:px-2 md:px-1 sm:px-1 xs:px-0.5">
        {categoryIcons.map((category) => (
          <div key={category.categoryId}>
            <CategoryIcon
              icon={category.icon}
              isSelected={selectedCategory === category.categoryId}
              onClick={() => handleCategoryChange(category.categoryId)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
