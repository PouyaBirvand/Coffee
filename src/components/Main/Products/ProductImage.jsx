import { memo } from 'react';
import { motion } from 'framer-motion';
import { useImagePreload } from '../../../hooks/useImagePreload';

function ProductImageComponent({ item, isExpanded, isSearchResult }) {
  const images = 'coffee.png';
  const isLoaded = useImagePreload(images);

  return (
    <div className={`relative ${isSearchResult ? 'search-item' : ''}`}>
      <motion.img
        src={images}
        alt={item.title}
        loading="eager"
        fetchpriority="high"
        decoding="async"
        width="300"
        height="300"
        initial={{ scale: 1, y: 0 }}
        animate={{
          scale: isExpanded ? 1.5 : 1.4,
          y: isExpanded ? -20 : -16,
        }}
        transition={{ duration: 0.3 }}
        className={`m-auto transform-gpu max-w-[100%] object-contain relative
          ${isExpanded ? 'max-h-[16rem] mt-10' : 'max-h-[12.5rem] md:max-h-[9rem]'}
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
          transition-all duration-300`}
        style={{
          willChange: 'transform',
          contain: 'paint',
          contentVisibility: 'auto',
        }}
      />
    </div>
  );
}

export const ProductImage = memo(ProductImageComponent);
