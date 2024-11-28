import { categoryIcons } from "./categoryIcons";
import { CategoryIcon } from "./CategoryIcon";
import { useCategories } from "../../../hooks/useCategories";

function Categories() {
  const { selectedCategory, handleCategoryChange } = useCategories();

  return (
    <div className="mx-auto scale-[0.86]
                    w-[100%] max-w-[400px] xl:max-w-[380px] lg:max-w-[360px] 
                    md:max-w-[340px] sm:max-w-[320px] xs:max-w-[270px]">
      <div className="bg-warm-wood bg-opacity-60 rounded-full 
                    flex justify-between items-center
                    py-0.5 px-1">
        {categoryIcons.map((category) => (
          <div key={category.categoryId} 
               className={`flex-shrink-0 p-0.5
                        [min-width:350px]:scale-[0.65]
                        [min-width:400px]:scale-[0.75]
                        [min-width:450px]:scale-[0.82]`}>
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
