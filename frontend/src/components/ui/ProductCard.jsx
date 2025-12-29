import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, toggleCart } from "../../features/cartSlice";
import { RiShoppingBagLine, RiStarFill } from "react-icons/ri";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
    dispatch(toggleCart(true));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white/5 border border-white/10 rounded-2xl p-4 overflow-hidden hover:border-neon/50 transition-colors duration-300 flex flex-col h-full"
    >
      <div className="relative h-64 w-full bg-dark/50 rounded-xl flex items-center justify-center overflow-hidden mb-4 shrink-0">
        <div className="absolute inset-0 bg-neon/5 blur-2xl group-hover:bg-neon/20 transition-all duration-500" />
        
        <Link to={`/product/${product.id}`} className="w-full h-full flex items-center justify-center">
          <motion.img
            src={product.image}
            alt={product.name}
            className="relative w-48 drop-shadow-2xl z-10 object-contain"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </Link>
        
        <button 
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 bg-neon text-dark p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20 hover:bg-white"
        >
          <RiShoppingBagLine size={20} />
        </button>
      </div>

      <div className="flex flex-col grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="text-xs font-mono text-neon uppercase tracking-wider">{product.category}</span>
            <Link to={`/product/${product.id}`}>
              <h3 className="text-xl font-bold text-white mt-1 group-hover:text-neon transition-colors">
                {product.name}
              </h3>
            </Link>
          </div>
          <span className="text-lg font-display font-bold text-white">${product.price}</span>
        </div>
        
        <div className="mt-auto pt-2 flex items-center gap-1 text-yellow-400 text-sm">
          <RiStarFill />
          <span className="text-gray-400 ml-1">{product.rating} (120+ Reviews)</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;