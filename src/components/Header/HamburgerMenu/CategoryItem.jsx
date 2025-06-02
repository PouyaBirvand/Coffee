import { cloneElement } from 'react';

const CategoryItem = ({ category, isActive, onClick, icon }) => {
  return (
    <li className="group">
      <button
        className={`relative flex items-center px-4 py-3 mr-2 w-full text-right ${
          isActive
            ? 'bg-dark-cocoa text-white'
            : 'hover:bg-dark-cocoa hover:text-white'
        } rounded-xl cursor-pointer active:scale-95 transition-transform`}
        onClick={() => onClick(category)}
        aria-current={isActive ? 'page' : undefined}
      >
        <div
          className={`absolute w-8 h-[2.5rem] -right-10 bottom-0 rounded-xl bg-dark-cocoa ${
            isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          } transition-opacity duration-300`}
        />
        <div className="w-6 h-6 ml-3 flex items-center justify-center">
          {cloneElement(icon, {
            className: `w-6 h-6 ${
              isActive ? 'text-white' : 'text-dark-cocoa group-hover:text-white'
            } transition-colors duration-300`,
          })}
        </div>
        <span>{category.name}</span>
      </button>
    </li>
  );
};

export default CategoryItem;
