import { motion } from "framer-motion"
import PropTypes from 'prop-types'

export function ProductImage({ item, isExpanded }) {
  return (
    <div className="relative -top-4">
      <motion.img
        src={item.image}
        alt={item.title}
        loading="eager"
        decoding="async"
        width="300"
        height="300"
        className={`m-auto max-h-[12.5rem] max-w-[100%] md:max-h-[9rem] !scale-[1.4] mb-4 object-contain relative ${
          isExpanded && "!max-h-[12rem] top-[2rem]"
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
