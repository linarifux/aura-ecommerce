import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RiSearchLine, RiCloseLine, RiArrowRightLine } from "react-icons/ri";
import { toggleSearch } from "../../features/uiSlice";
import api from "../../api/axios";

const SearchModal = () => {
  const dispatch = useDispatch();
  const { isSearchOpen } = useSelector((state) => state.ui);
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  // 1. Fetch data when modal opens (if not already fetched)
  useEffect(() => {
    if (isSearchOpen && products.length === 0) {
      api.get("/products").then(({ data }) => setProducts(data));
    }
  }, [isSearchOpen]);

  // 2. Auto-focus input when opened
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden"; // Lock scroll
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isSearchOpen]);

  // 3. Filter Logic
  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    const filtered = products.filter((p) => 
      p.name.toLowerCase().includes(query.toLowerCase()) || 
      p.category.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query, products]);

  // Close logic
  const handleClose = () => {
    dispatch(toggleSearch(false));
    setQuery("");
  };

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-dark/90 backdrop-blur-sm z-[100]"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-12 left-1/2 -translate-x-1/2 w-full max-w-3xl z-[101] px-4"
          >
            <div className="bg-surface border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              
              {/* Search Header */}
              <div className="flex items-center px-6 py-4 border-b border-white/5 relative">
                <RiSearchLine className="text-neon text-xl" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search for gear..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent border-none text-white text-lg px-4 focus:ring-0 focus:outline-none placeholder:text-gray-600"
                />
                <button 
                  onClick={handleClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <RiCloseLine size={24} />
                </button>
              </div>

              {/* Results Area */}
              <div className="max-h-[60vh] overflow-y-auto custom-scrollbar bg-dark/50">
                {query.length > 0 && results.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    No products found for "{query}"
                  </div>
                ) : (
                  <div className="p-2">
                    {results.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        onClick={handleClose}
                        className="flex items-center gap-4 p-4 hover:bg-white/5 rounded-xl transition-colors group"
                      >
                        <div className="w-12 h-12 bg-white/5 rounded-lg p-2 flex items-center justify-center">
                          <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-bold group-hover:text-neon transition-colors">{product.name}</h4>
                          <span className="text-xs text-gray-400 uppercase tracking-wider">{product.category}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-neon font-mono">${product.price}</span>
                            <RiArrowRightLine className="text-gray-600 group-hover:text-white -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                        </div>
                      </Link>
                    ))}
                    
                    {/* Default State (No Query) */}
                    {query.length === 0 && (
                        <div className="p-4">
                            <h4 className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-3">Popular Searches</h4>
                            <div className="flex flex-wrap gap-2">
                                {["Headphones", "Wireless", "Sport", "Gaming"].map(tag => (
                                    <button 
                                        key={tag} 
                                        onClick={() => setQuery(tag)}
                                        className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-gray-400 text-sm hover:border-neon/30 hover:text-neon transition-all"
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                  </div>
                )}
              </div>

              {/* Footer Hints */}
              <div className="px-6 py-3 bg-white/5 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-500 font-mono uppercase tracking-wider">
                 <span>{results.length} Results</span>
                 <span className="hidden md:inline">Use ARROW KEYS to navigate • ENTER to select</span>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;