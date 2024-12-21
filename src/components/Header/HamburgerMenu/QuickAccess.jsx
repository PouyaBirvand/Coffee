import { useMemo } from "react";
import { useCategoryData } from "../../../hooks/useCategoryData";
import { useCategoryNavigation } from "../../../hooks/useCategoryNavigation";
import CategoryItem from "./CategoryItem";
const CATEGORY_ICONS = {
  1: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 256 256"
    >
      <path
        fill="currentColor"
        d="M206 98.83V96a78 78 0 0 0-156 0v2.83A22 22 0 0 0 56 142h4.45l55.39 97a14 14 0 0 0 24.32 0l55.39-97H200a22 22 0 0 0 6-43.17M129.74 233a2 2 0 0 1-3.48 0l-52-91h24L140 215.06Zm6.26-91l22.89 40.06l-12 20.91l-34.84-61Zm29.8 28l-16-28h32Zm34.2-40H56a10 10 0 0 1 0-20a6 6 0 0 0 6-6v-8a66 66 0 0 1 132 0v8a6 6 0 0 0 6 6a10 10 0 0 1 0 20"
      />
    </svg>
  ),
  2: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 1024 1024"
    >
      <path
        fill="currentColor"
        d="M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.06 192.06 0 0 1 768 64M656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64l129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928l304-404.928z"
      />
    </svg>
  ),
  3: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 7V4.348c0-2.187.374-2.716 2.497-2.12L18 3.21M6 7l1.14 11.16c.171 1.677.257 2.515.828 3.021c1.178 1.044 6.78 1.139 8.064 0c.571-.506.657-1.344.828-3.02L18 7M5 7h14M7 12h10M7 16h10"
      />
    </svg>
  ),
  4: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 256 256"
    >
      <path
        fill="currentColor"
        d="M80 56V24a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0m40 8a8 8 0 0 0 8-8V24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 0a8 8 0 0 0 8-8V24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m96 56v8a40 40 0 0 1-37.51 39.91a96.6 96.6 0 0 1-27 40.09H208a8 8 0 0 1 0 16H32a8 8 0 0 1 0-16h24.54A96.3 96.3 0 0 1 24 136V88a8 8 0 0 1 8-8h176a40 40 0 0 1 40 40m-48-24H40v40a80.27 80.27 0 0 0 45.12 72h69.76A80.27 80.27 0 0 0 200 136Zm32 24a24 24 0 0 0-16-22.62V136a96 96 0 0 1-1.2 15a24 24 0 0 0 17.2-23Z"
      />
    </svg>
  ),
  5: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M9 10.99a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5 1.998a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 3.998a1 1 0 1 0 0-2a1 1 0 0 0 0 2M5 4.66c0-1.497 1.23-2.805 2.82-2.648A20.78 20.78 0 0 1 21.262 8.84c1.07 1.193.737 2.964-.479 3.845c-1.582 1.148-3.94 2.857-5.283 3.833c-.002.437-.002.721-.001 1.092v.628a1.75 1.75 0 0 1-2.056 1.724c-.204.826-.932 1.527-1.944 1.527c-.7 0-1.262-.335-1.609-.815l-1.325.957c-1.488 1.074-3.57.011-3.569-1.826zm2.673-1.155c-.609-.06-1.174.443-1.174 1.155v.52a17.55 17.55 0 0 1 12.985 6.594l.419-.304c.578-.42.652-1.173.242-1.63A19.28 19.28 0 0 0 7.673 3.507m-1.177 16.3a.75.75 0 0 0 1.19.608l2.128-1.533a.75.75 0 0 1 1.188.608c0 .27.209.5.497.5a.497.497 0 0 0 .502-.5v-1.251a.75.75 0 0 1 1.5 0c0 .14.111.25.248.25a.25.25 0 0 0 .25-.25v-.622c-.001-.47-.002-.808.005-1.489a.75.75 0 0 1 .308-.6c.902-.656 2.496-1.812 3.956-2.87a16.04 16.04 0 0 0-11.77-5.974z"
      />
    </svg>
  ),
  6: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill={"none"}
      color="currentColor"
    >
      <path
        d="M12 9C7.67909 9 3.98995 11.9368 2.53353 16.0723C2.00628 17.5695 1.74265 18.318 2.34852 19.159C2.95439 20 3.94331 20 5.92117 20H18.0788C20.0567 20 21.0456 20 21.6515 19.159C22.2573 18.318 21.9937 17.5695 21.4665 16.0723C20.0101 11.9368 16.3209 9 12 9Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M21.3292 15C22.2972 13.7279 22.2176 11.9699 21.0901 10.7778C20.5725 10.2305 20.2571 9.53455 20.1924 8.80334C20.0438 7.12573 18.626 5.78671 16.8478 5.65884L16.6438 5.64417C15.8567 5.58757 15.1028 5.30226 14.4905 4.83203C13.0458 3.72266 10.9542 3.72266 9.50953 4.83203C8.89717 5.30226 8.14332 5.58757 7.35624 5.64417L7.15218 5.65884C5.37401 5.78671 3.95622 7.12573 3.80765 8.80334C3.74289 9.53455 3.42752 10.2305 2.90986 10.7778C1.78245 11.9699 1.70277 13.7279 2.67083 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16.0078 14L15.9988 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0078 16L12.9988 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.0078 17L17.9988 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

// eslint-disable-next-line react/prop-types
const QuickAccess = ({ closeMenu }) => {
  const { categories } = useCategoryData();
  const { activeItem, handleItemClick } = useCategoryNavigation(
    categories,
    closeMenu
  );

  const memoizedCategories = useMemo(
    () =>
      categories?.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          isActive={activeItem === category.name}
          onClick={handleItemClick}
          icon={CATEGORY_ICONS[category.id]}
        />
      )),
    [categories, activeItem, handleItemClick]
  );

  return (
    <>
      <p className="mt-1 text-[0.8rem]">Quick access</p>
      <ul className="border-b border-opacity-30 pb-1 border-dark-cocoa">
        {memoizedCategories}
      </ul>
    </>
  );
};

export default QuickAccess;
