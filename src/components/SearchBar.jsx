import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
function SearchBar({ onClose }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex items-center bg-soft-cream px-4 py-1 mt-2 w-full rounded-full shadow-md relative z-30"
    >
      <form className="flex-grow flex items-center px-2  relative top-[0.2rem]">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search anything you want ..."
          className="w-full py-2 focus:outline-none bg-soft-cream placeholder:text-dark-cocoa"
        />
        <button type="submit" className="focus:outline-none ml-2 mb-1">
          <img src="/assets/images/searchbar.png" alt="Search" />
        </button>
      </form>
    </motion.div>
  );
}

export default SearchBar;