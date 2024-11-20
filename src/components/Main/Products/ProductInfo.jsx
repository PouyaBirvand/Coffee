import { motion } from "framer-motion"
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
export function ProductInfo({item, isExpanded, isSearchResult}) {
    const commonClasses = `text-white drop-shadow-2xl ${isSearchResult ? 'search-result' : ''}`;

  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={isExpanded ? "fixed left-0 right-0 bottom-14 backdrop-blur-sm bg-[#835a36] bg-opacity-50 rounded-2xl p-8 z-[1000] max-w-[75%] mx-auto h-[17rem] sm:h-[15rem]" : ""}
    >
      <h1 className={`${commonClasses} ${isExpanded ? 'text-[1.4rem] -mt-2 mb-5' : 'text-2xl mb-0'} font-extrabold sm:text-[1.3rem]`}>
        {item.title}
      </h1>
      <p className={`${commonClasses} ${isExpanded ? 'sm:text-sm' : 'text-base'} ml-1`}>
        {item.description}
      </p>
      {isExpanded && (
        <p className="text-white font-bold mt-2 text-2xl">
  ${parseFloat(item.price).toLocaleString()}
</p>
      )}
    </motion.div>
  )
}

ProductInfo.propTypes = {
    item: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired
    }).isRequired,
    isExpanded: PropTypes.bool.isRequired
  }