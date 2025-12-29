import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart, toggleCart } from "../features/cartSlice";
import { RiArrowLeftLine, RiStarFill, RiCheckLine, RiAddLine, RiSubtractLine } from "react-icons/ri";
import api from "../api/axios";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  // 1. Local state for the product
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);

  // 2. Fetch Logic
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await api.get(`/products/${id}`);
        setProduct(data);
        // Default to first color if available
        if (data.colors && data.colors.length > 0) {
          setSelectedColor(data.colors[0]);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) return <div className="text-white text-center py-20 bg-dark min-h-screen pt-32">Loading...</div>;
  if (!product) return <div className="text-white text-center py-20 bg-dark min-h-screen pt-32">Product not found.</div>;

  const handleAddToCart = () => {
    // Dispatch action with the product AND the selected color
    const itemToAdd = {
        ...product,
        selectedColor: selectedColor, // <--- CRITICAL UPDATE: Pass the color to Redux
    }
    
    // Add the specific quantity
    for(let i=0; i < quantity; i++) {
        dispatch(addToCart(itemToAdd));
    }
    dispatch(toggleCart(true));
  };

  return (
    <section className="min-h-screen bg-dark pt-32 pb-12 px-6">
      <div className="container mx-auto">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-neon mb-8 transition-colors">
          <RiArrowLeftLine className="mr-2" /> Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* LEFT: VISUALS */}
          <div className="relative lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 rounded-3xl p-12 border border-white/10 relative overflow-hidden group"
            >
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon/20 blur-[100px] rounded-full pointer-events-none" />
               <motion.img 
                 key={product.image} 
                 src={product.image} 
                 alt={product.name}
                 className="w-full h-auto object-contain relative z-10 drop-shadow-2xl"
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.2 }}
               />
            </motion.div>
          </div>

          {/* RIGHT: DETAILS */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-neon font-mono tracking-widest uppercase text-sm">{product.category}</span>
                <div className="flex items-center text-yellow-400 text-sm">
                  <RiStarFill /> <span className="text-gray-400 ml-1">{product.rating} (120 Reviews)</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 leading-tight">
                {product.name}
              </h1>
              <p className="text-3xl text-gray-200 font-light mb-8">
                ${product.price}
              </p>

              <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                {product.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex items-center text-gray-300 text-sm">
                    <RiCheckLine className="text-neon mr-2" /> {spec}
                  </div>
                ))}
              </div>

              {/* SELECTIONS */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
                {/* Colors */}
                <div className="mb-6">
                  <label className="text-gray-400 text-sm mb-3 block">Select Color</label>
                  <div className="flex space-x-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                          selectedColor === color ? "border-neon scale-110" : "border-transparent hover:scale-105"
                        }`}
                        style={{ backgroundColor: color }}
                      >
                         {selectedColor === color && <RiCheckLine className={`text-${color === '#e5e5e5' || color === '#ffffff' ? 'black' : 'white'}`} />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity & Add Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center bg-dark border border-white/20 rounded-full px-4 py-3 w-fit">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-gray-400 hover:text-white">
                      <RiSubtractLine />
                    </button>
                    <span className="mx-4 text-white font-mono w-4 text-center">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="text-gray-400 hover:text-white">
                      <RiAddLine />
                    </button>
                  </div>

                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 bg-neon text-dark font-bold rounded-full py-4 hover:bg-white transition-colors uppercase tracking-wide"
                  >
                    Add to Cart - ${(product.price * quantity).toFixed(2)}
                  </button>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetails;