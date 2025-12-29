import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseLine, RiDeleteBinLine } from "react-icons/ri";
import { toggleCart, removeFromCart } from "../../features/cartSlice";
import { useNavigate } from "react-router-dom";

const CartDrawer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isCartOpen, items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  // Lock body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isCartOpen]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* 1. BACKDROP BLUR OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(toggleCart(false))}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* 2. THE DRAWER ITSELF */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-surface border-l border-white/10 z-[70] shadow-2xl flex flex-col"
          >
            {/* HEADER */}
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-dark/50">
              <h2 className="font-display text-xl font-bold text-white">
                Your Cart <span className="text-neon">({totalQuantity})</span>
              </h2>
              <button
                onClick={() => dispatch(toggleCart(false))}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <RiCloseLine size={24} />
              </button>
            </div>

            {/* SCROLLABLE ITEMS LIST */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
                  <p>Your cart is empty.</p>
                  <button
                    onClick={() => dispatch(toggleCart(false))}
                    className="text-neon hover:underline text-sm"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    layout
                    // Use variantId for the key to ensure uniqueness
                    key={item.variantId} 
                    className="flex gap-4 bg-white/5 p-4 rounded-xl border border-white/5"
                  >
                    {/* Product Image */}
                    <div className="w-20 h-20 bg-white/10 rounded-lg p-2 flex items-center justify-center shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-white text-sm md:text-base leading-tight pr-2">
                            {item.name}
                          </h3>
                          <p className="font-mono text-neon text-sm">${item.price}</p>
                        </div>
                        
                        {/* VARIANT INFO */}
                        {item.selectedColor && (
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">
                              Color:
                            </span>
                            <div 
                              className="w-3 h-3 rounded-full border border-white/30 shadow-sm"
                              style={{ backgroundColor: item.selectedColor }}
                              title={item.selectedColor}
                            />
                          </div>
                        )}
                      </div>

                      <div className="flex justify-between items-end mt-2">
                        <span className="text-sm text-gray-400 font-mono">
                          Qty: {item.quantity}
                        </span>
                        
                        {/* FIX IS HERE: Pass item.variantId instead of item.id */}
                        <button
                          onClick={() => dispatch(removeFromCart(item.variantId))}
                          className="text-gray-500 hover:text-red-400 transition-colors p-1"
                        >
                          <RiDeleteBinLine size={18} />
                        </button>

                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* FOOTER CHECKOUT */}
            <div className="p-6 border-t border-white/10 bg-dark/50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400">Subtotal</span>
                <span className="font-display text-xl font-bold text-white">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <button
                onClick={() => {
                  dispatch(toggleCart(false));
                  navigate("/checkout");
                }}
                className="w-full py-4 bg-neon text-dark font-bold rounded-lg hover:bg-white transition-colors duration-300"
              >
                Checkout Now
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;