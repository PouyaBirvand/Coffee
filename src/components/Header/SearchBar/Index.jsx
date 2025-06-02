import { motion } from 'framer-motion';
import { useProductSelection } from '../../../hooks/useProductSelection';
import { useSearchInput } from '../../../hooks/useSearchInput';
import { useProductSearch } from '../../../hooks/useProductSearch';
import { SearchResults } from './SearchResualts';

function SearchBar() {
  const { results, isLoading, searchProducts, setResults } = useProductSearch();
  const { query, setQuery, inputRef } = useSearchInput(searchProducts);
  const { handleProductClick } = useProductSelection(() => {
    setQuery('');
    setResults([]);
  });

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex items-center bg-soft-cream px-3 py-1 mt-2 w-full rounded-full shadow-md relative z-30"
      >
        <form
          className="flex-grow flex items-center px-3 relative top-[0.2rem]"
          onSubmit={e => e.preventDefault()}
          dir="rtl"
        >
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="هر چیزی میخوای رو سرچ کن..."
            className="w-full py-2 focus:outline-none bg-soft-cream placeholder:text-dark-cocoa"
          />
          <button
            type="submit"
            className="focus:outline-none mb-1 translate-x-[0.2rem]"
          >
            <lord-icon
              src="https://cdn.lordicon.com/kkvxgpti.json"
              trigger={isLoading ? 'loop' : 'hover'}
              delay="0"
              colors="primary:#412f26"
              style={{
                width: '30px',
                height: '30px',
                position: 'relative',
                bottom: '-0.2rem',
              }}
            />
          </button>
        </form>
      </motion.div>

      <SearchResults results={results} onProductClick={handleProductClick} />
    </div>
  );
}

export default SearchBar;
