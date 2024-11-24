import { motion } from "framer-motion"
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
export function ProductImage({  item, isExpanded, isSearchResult }) {
  const images = (`http://127.0.0.1:8000/storage/${item.image}`);
  
  
  return (
    <div className={`relative -top-4 ${isSearchResult ? 'search-item' : ''}`}>
      <motion.img
        src={images}
        alt={item.title}
        loading="eager"
        decoding="async"
        width="300"
        height="300"
        className={`m-auto max-h-[12.5rem] max-w-[100%] md:max-h-[9rem] !scale-[1.4] mb-4 object-contain relative ${
          isExpanded && "!max-h-[14rem] top-[4rem]"
        }`}
        style={{
          willChange: "transform",
          contain: "layout",
        }}
      />
    </div>
  )
}

ProductImage.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  isExpanded: PropTypes.bool.isRequired
}
