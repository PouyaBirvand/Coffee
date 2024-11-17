import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import debounce from "lodash/debounce";
import api from "../../services/axios";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { replace } from "lodash";

function SearchBar() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

    const { setCurrentItem, setIsExpanded , setSelectionSource } = useAppContext();
  
    const handleProductClick = (product) => {
      const newProduct = JSON.parse(JSON.stringify(product));
      setSelectionSource('search');
      setCurrentItem(newProduct);
      setIsExpanded(true);
      setQuery("");
      setResults([]);
      navigate("/") , {replace : true};
    };
    
    
  
  

  const searchProducts = debounce(async (searchQuery) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await api.get(`/products/search?query=${searchQuery}`);
      setResults(response.data.products);
    } catch (error) {
      console.log("Search error:", error);
    } finally {
      setIsLoading(false);
    }
  }, 300);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    searchProducts(query);
  }, [query]);

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Controls delay between each item
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
      },
    },
  };

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
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search anything you want ..."
            className="w-full py-2 focus:outline-none bg-soft-cream placeholder:text-dark-cocoa"
          />
          <button
            type="submit"
            className="focus:outline-none mb-1 translate-x-[0.2rem]"
          >
            <lord-icon
              src="https://cdn.lordicon.com/kkvxgpti.json"
              trigger={isLoading ? "loop" : "hover"}
              delay="0"
              colors="primary:#412f26"
              style={{
                width: "30px",
                height: "30px",
                position: "relative",
                bottom: "-0.2rem",
              }}
            />
          </button>
        </form>
      </motion.div>

      <AnimatePresence>
        {results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute w-full mt-2 bg-soft-cream rounded-2xl shadow-xl max-h-96 overflow-auto z-50"
          >
            <motion.div
              variants={containerAnimation}
              initial="hidden"
              animate="show"
            >
              {results.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemAnimation}
                  onClick={() => handleProductClick(product)}
                  whileHover={{
                    backgroundColor: "rgba(131, 90, 54, 0.1)",
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  className="p-4 border-b border-deep-mahogany/10 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-16 h-16 object-contain rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold text-dark-cocoa">
                        {product.title}
                      </h3>
                      <p className="text-sm text-deep-mahogany">
                        ${parseFloat(product.price).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SearchBar;
