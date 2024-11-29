import { categoryIcons } from "./categoryIcons";
import { CategoryIcon } from "./CategoryIcon";
import { useCategories } from "../../../hooks/useCategories";

function Categories() {
  const { selectedCategory, handleCategoryChange } = useCategories();

  return (
    <div className="mx-auto md:w-min w-[70%]">
      <div className="bg-warm-wood bg-opacity-60 rounded-full 
                    flex
                    py-0.5 px-0.5 gap-[0.1rem] justify-between xs:gap-[0.8rem]">
        {categoryIcons.map((category) => (
          <div key={category.categoryId} 
               className={`scale-[0.9]`}>
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
