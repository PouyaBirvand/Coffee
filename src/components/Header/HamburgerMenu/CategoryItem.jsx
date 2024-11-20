import { cloneElement } from "react";
import PropTypes from 'prop-types';

const CategoryItem = ({ category, isActive, onClick, icon }) => {
    return (
      <li className="group">
        <a
          className={`relative flex items-center ml-2 px-4 py-2 ${
            isActive
              ? "bg-dark-cocoa text-white"
              : "hover:bg-dark-cocoa hover:text-white"
          } rounded-xl cursor-pointer`}
          onClick={() => onClick(category)}
        >
          <div
            className={`absolute w-8 h-[2.5rem] -left-10 bottom-0 rounded-xl bg-dark-cocoa ${
              isActive ? "" : "opacity-0 group-hover:opacity-100"
            } transition-opacity duration-[0.3]`}
          />
          <div className="w-6 h-6 mr-3 flex items-center justify-center">
            {cloneElement(icon, {
              className: `w-6 h-6 ${
                isActive
                  ? "text-white"
                  : "text-dark-cocoa group-hover:text-white"
              } transition-colors duration-300`,
            })}
          </div>
          <span>{category.name}</span>
        </a>
      </li>
    );
  };
  export default CategoryItem

  CategoryItem.propTypes = {
    category: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.element.isRequired
  };