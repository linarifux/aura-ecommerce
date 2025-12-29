import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RiArrowLeftLine, RiFilter3Line } from "react-icons/ri";
import api from "../api/axios";
import ProductCard from "../components/ui/ProductCard";

const CategoryPage = () => {
  const { categoryName } = useParams(); // Gets "headphones", "speakers", etc.
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { data } = await api.get("/products");
        
        // Filter logic: Match category (case insensitive)
        // Adjust logic if your API categories are capitalized differently (e.g. "Over-Ear" vs "Headphones")
        const filtered = data.filter((p) => {
            const cat = p.category.toLowerCase();
            const urlCat = categoryName.toLowerCase();
            
            // Simple mapping for broader terms if needed
            if (urlCat === 'headphones') return cat === 'over-ear' || cat.includes('headphone');
            if (urlCat === 'earbuds') return cat === 'in-ear' || cat.includes('bud');
            
            return cat.includes(urlCat);
        });
        
        setProducts(filtered);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
    window.scrollTo(0, 0);
  }, [categoryName]);

  return (
    <div className="min-h-screen bg-dark pt-32 pb-12 px-6">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="mb-12">
            <Link to="/" className="inline-flex items-center text-gray-400 hover:text-neon mb-6 transition-colors">
            <RiArrowLeftLine className="mr-2" /> Back to Home
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <span className="text-neon font-mono tracking-widest uppercase text-sm mb-2 block">Collection</span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white capitalize">
                        {categoryName}
                    </h1>
                </div>
                
                {/* Visual Flair: Filter count */}
                <div className="flex items-center gap-2 text-gray-400 border border-white/10 px-4 py-2 rounded-full bg-white/5">
                    <RiFilter3Line />
                    <span className="text-sm font-mono">{products.length} Products Found</span>
                </div>
            </div>
        </div>

        {/* Grid */}
        {loading ? (
           <div className="text-white text-center py-20 animate-pulse">Scanning Database...</div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                 <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 border border-white/5 rounded-3xl bg-white/5">
            <h3 className="text-2xl font-bold text-white mb-2">No Signal Detected</h3>
            <p className="text-gray-400">We couldn't find any gear in this category yet.</p>
            <Link to="/" className="inline-block mt-6 text-neon hover:underline">View all products</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;