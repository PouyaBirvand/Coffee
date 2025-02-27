import { memo } from 'react';

export const CategoryIcon = memo(function CategoryIcon({ icon, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`
        w-14 h-14 xl:w-11 xl:h-11 lg:w-10 lg:h-10 md:w-9 md:h-9 sm:w-8 sm:h-8 xs:w-10 xs:h-10
        p-2 xl:p-2 lg:p-2 md:p-1.5 sm:p-1.5 xs:p-1.5
        rounded-full transition duration-300 cursor-pointer flex items-center justify-center
        ${
          isSelected
            ? "bg-deep-mahogany text-soft-cream"
            : "bg-soft-cream bg-opacity-50 hover:bg-deep-mahogany hover:text-soft-cream"
        }
      `}
    >
      {icon}
    </div>
  );
});
