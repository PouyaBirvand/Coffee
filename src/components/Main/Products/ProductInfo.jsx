import { memo, useMemo } from "react";
import { motion } from "framer-motion";

function ProductInfoComponent({ item, isExpanded, isSearchResult }) {
  const commonClasses = useMemo(
    () => `text-white drop-shadow-2xl ${isSearchResult ? "search-result" : ""}`,
    [isSearchResult]
  );

  const containerClasses = useMemo(
    () =>
      isExpanded
        ? "fixed left-0 right-0 bottom-14 backdrop-blur-sm bg-[#835a36] bg-opacity-50 rounded-2xl p-8 z-[1000] max-w-[75%] mx-auto h-[17rem] sm:h-[15rem]"
        : "",
    [isExpanded]
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={containerClasses}
    >
      <h1
        className={`${commonClasses} ${
          isExpanded ? "text-[1.4rem] -mt-2 mb-2" : "text-2xl mb-0"
        } font-extrabold sm:text-[1.3rem]`}
      >
        {item.title}
      </h1>

      <p
        className={`${commonClasses} ${
          isExpanded ? "sm:text-sm" : "text-base"
        } ml-1`}
      >
        {item.description}
      </p>

      {isExpanded && (
        <p className="text-white font-bold mt-2 text-2xl">
          ${parseFloat(item.price).toLocaleString()}
        </p>
      )}
    </motion.div>
  );
}


ProductInfoComponent.displayName = "ProductInfo";

export const ProductInfo = memo(ProductInfoComponent);
