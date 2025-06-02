import { motion, AnimatePresence } from 'framer-motion';

const SearchOverlay = ({ isSearchOpen }) => (
  <AnimatePresence>
    {isSearchOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-10"
      />
    )}
  </AnimatePresence>
);
export default SearchOverlay;
