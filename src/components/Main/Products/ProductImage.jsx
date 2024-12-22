import { memo, useState } from "react";
import { motion } from "framer-motion";

function ProductImageComponent({ item, isExpanded, isSearchResult }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageSrc = `http://127.0.0.1:8000/storage/${item.image}`;

  return (
    <div className={`relative -top-4 ${isSearchResult ? "search-item" : ""}`}>
      <motion.img
        src={imageSrc}
        alt={item.title}
        loading="eager"
        decoding="async"
        width="300"
        height="300"
        onLoad={() => {
          setIsLoaded(true);
        }}
        onError={(e) => {
          // console.log("Image Error:", e.target.src);
        }}
        className={`m-auto transform-gpu max-h-[12.5rem] max-w-[100%] md:max-h-[9rem] !scale-[1.4] mb-4 object-contain relative 
          ${isExpanded ? "!max-h-[14rem] top-[4rem]" : ""}
          opacity-100`}
        style={{
          willChange: "transform",
          contain: "layout",
          contentVisibility: "auto",
        }}
      />
    </div>
  );
}


export const ProductImage = memo(ProductImageComponent);
