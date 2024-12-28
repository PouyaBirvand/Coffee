import { memo } from "react";
import { motion } from "framer-motion";
import { useImagePreload } from "../../../hooks/useImagePreload";

function ProductImageComponent({ item, isExpanded, isSearchResult }) {
  const imageSrc = `https://bittercaffeine.ir/CafeApi/public/storage/${item.image}`;
  const isLoaded = useImagePreload(imageSrc);

  return (
    <div className={`relative -top-4 ${isSearchResult ? "search-item" : ""}`}>
      <motion.img
        src={imageSrc}
        alt={item.title}
        loading="eager"
        fetchpriority="high"
        decoding="async"
        width="300"
        height="300"
        className={`m-auto transform-gpu max-h-[12.5rem] max-w-[100%] md:max-h-[9rem] !scale-[1.4] mb-4 object-contain relative 
          ${isExpanded ? "!max-h-[14rem] top-[4rem]" : ""}
          ${isLoaded ? 'opacity-100' : 'opacity-0'} 
          transition-opacity duration-200`}
        style={{
          willChange: "transform",
          contain: "paint",
          contentVisibility: "auto",
        }}
      />
    </div>
  );
}

export const ProductImage = memo(ProductImageComponent);