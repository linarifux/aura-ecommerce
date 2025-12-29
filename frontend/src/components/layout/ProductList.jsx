import { useState, useEffect } from "react"; // 1. Add hooks
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, toggleCart } from "../../features/cartSlice";
import { RiShoppingBagLine, RiStarFill } from "react-icons/ri";
import api from "../../api/axios"; // 2. Import API
import ProductCard from "../ui/ProductCard"; // Import the new component

// Remove the `PRODUCTS` import!


const ProductList = () => {
  const [products, setProducts] = useState([]); // 3. State for data
  const [loading, setLoading] = useState(true);

  // 4. Fetch Data on Mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get("/products");
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="py-24 bg-dark relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">
              The <span className="text-neon">Collection</span>
            </h2>
            <p className="text-gray-400 max-w-md">
              Meticulously crafted audio gear for the discerning listener.
            </p>
          </div>
          <button className="text-white border-b border-neon pb-1 hover:text-neon transition-colors">
            View All Products
          </button>
        </div>

        {/* 5. Handle Loading State */}
        {loading ? (
          <div className="text-white text-center py-20">Loading Collection...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} /> // Use MongoDB data
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;