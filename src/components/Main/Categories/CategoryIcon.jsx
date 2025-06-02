import { memo } from 'react';

export const CategoryIcon = memo(function CategoryIcon({
  icon,
  isSelected,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center justify-center
        w-14 h-14
        rounded-full transition-all duration-300 cursor-pointer
        ${
          isSelected
            ? 'bg-deep-mahogany text-soft-cream shadow-md'
            : 'bg-soft-cream/50 hover:bg-deep-mahogany/80 hover:text-soft-cream'
        }
      `}
    >
      <div className="w-8 h-8 flex items-center justify-center">{icon}</div>
    </div>
  );
});
