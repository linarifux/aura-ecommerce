import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RiSecurePaymentLine, RiTruckLine, RiArrowLeftLine, RiCheckLine } from "react-icons/ri";
import { clearCart } from "../features/cartSlice";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate Costs
  const shippingCost = totalPrice > 500 ? 0 : 15;
  const tax = totalPrice * 0.08;
  const finalTotal = totalPrice + shippingCost + tax;

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate Payment Processing
    setTimeout(() => {
      dispatch(clearCart());
      setIsProcessing(false);
      alert("Order Placed Successfully! (Simulation)");
      navigate("/");
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-dark flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-display font-bold text-white mb-4">Your cart is empty</h2>
        <p className="text-gray-400 mb-8">Looks like you haven't added any gear yet.</p>
        <Link to="/" className="bg-neon text-dark font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark pt-24 pb-12 px-4 md:px-6 md:pt-32">
      <div className="container mx-auto max-w-6xl">
        
        {/* HEADER */}
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-neon mb-6 md:mb-8 transition-colors text-sm md:text-base">
          <RiArrowLeftLine className="mr-2" /> Continue Shopping
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* RIGHT COLUMN: SUMMARY 
              On Mobile: order-first (Shows top)
              On Desktop: order-last (Shows right)
          */}
          <div className="lg:col-span-5 order-first lg:order-last">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-surface border border-white/10 rounded-2xl p-6 md:p-8 lg:sticky lg:top-32"
            >
              <h3 className="text-xl font-display font-bold text-white mb-6">Order Summary</h3>
              
              {/* Product List */}
              <div className="space-y-4 mb-6 max-h-[200px] md:max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {items.map((item) => (
                  <div key={item.variantId || item.id} className="flex gap-4 items-start">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 rounded-lg p-2 flex items-center justify-center flex-shrink-0">
                      <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                      
                      {/* VARIANT INFO */}
                      {item.selectedColor && (
                         <div className="flex items-center gap-2 mt-1 mb-1">
                           <div 
                             className="w-3 h-3 rounded-full border border-white/30"
                             style={{ backgroundColor: item.selectedColor }}
                           />
                           <span className="text-[10px] text-gray-500 uppercase tracking-wider">Color</span>
                         </div>
                      )}

                      <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                    </div>
                    <span className="text-sm font-mono text-white">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 my-6 pt-6 space-y-3">
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? <span className="text-neon">Free</span> : `$${shippingCost}`}</span>
                </div>
                 <div className="flex justify-between text-gray-400 text-sm">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 mb-8">
                <div className="flex justify-between items-end">
                  <span className="text-lg font-bold text-white">Total</span>
                  <span className="text-2xl md:text-3xl font-display font-bold text-neon">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Mobile: Hidden here (shown at bottom of form), Desktop: Visible */}
              <button 
                onClick={handlePayment}
                disabled={isProcessing}
                className="hidden lg:flex w-full bg-neon text-dark font-bold text-lg py-4 rounded-xl hover:bg-white transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <span className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <RiSecurePaymentLine /> Pay ${finalTotal.toFixed(2)}
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500">
                <RiTruckLine /> Free shipping on orders over $500
              </div>

            </motion.div>
          </div>

          {/* LEFT COLUMN: FORMS */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            
            {/* 1. Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-surface border border-white/10 rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-lg md:text-xl font-display font-bold text-white mb-6 flex items-center">
                <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-neon/10 text-neon flex items-center justify-center text-xs md:text-sm mr-3">1</span>
                Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
                  <input type="email" placeholder="you@example.com" className="w-full bg-dark border border-white/10 rounded-lg p-3 md:p-4 text-white focus:border-neon focus:outline-none transition-colors text-sm md:text-base" />
                </div>
              </div>
            </motion.div>

            {/* 2. Shipping Address */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-surface border border-white/10 rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-lg md:text-xl font-display font-bold text-white mb-6 flex items-center">
                 <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-neon/10 text-neon flex items-center justify-center text-xs md:text-sm mr-3">2</span>
                 Shipping Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                   <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Full Name</label>
                   <input type="text" placeholder="John Doe" className="w-full bg-dark border border-white/10 rounded-lg p-3 md:p-4 text-white focus:border-neon focus:outline-none transition-colors text-sm md:text-base" />
                </div>
                <div className="md:col-span-2">
                   <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Address</label>
                   <input type="text" placeholder="123 Tech Blvd" className="w-full bg-dark border border-white/10 rounded-lg p-3 md:p-4 text-white focus:border-neon focus:outline-none transition-colors text-sm md:text-base" />
                </div>
                <div>
                   <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">City</label>
                   <input type="text" placeholder="New York" className="w-full bg-dark border border-white/10 rounded-lg p-3 md:p-4 text-white focus:border-neon focus:outline-none transition-colors text-sm md:text-base" />
                </div>
                <div>
                   <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Postal Code</label>
                   <input type="text" placeholder="10001" className="w-full bg-dark border border-white/10 rounded-lg p-3 md:p-4 text-white focus:border-neon focus:outline-none transition-colors text-sm md:text-base" />
                </div>
              </div>
            </motion.div>

            {/* 3. Payment */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-surface border border-white/10 rounded-2xl p-6 md:p-8"
            >
               <h3 className="text-lg md:text-xl font-display font-bold text-white mb-6 flex items-center">
                 <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-neon/10 text-neon flex items-center justify-center text-xs md:text-sm mr-3">3</span>
                 Payment Method
              </h3>
              <div className="p-3 md:p-4 border border-neon/30 bg-neon/5 rounded-lg flex items-center justify-between mb-4 cursor-pointer">
                <div className="flex items-center gap-3">
                  <RiSecurePaymentLine className="text-neon" size={24} />
                  <span className="font-bold text-white text-sm md:text-base">Credit Card</span>
                </div>
                <RiCheckLine className="text-neon" />
              </div>
              
              <div className="space-y-4">
                <div>
                   <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Card Number</label>
                   <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-dark border border-white/10 rounded-lg p-3 md:p-4 text-white focus:border-neon focus:outline-none transition-colors text-sm md:text-base" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Expiry</label>
                    <input type="text" placeholder="MM/YY" className="w-full bg-dark border border-white/10 rounded-lg p-3 md:p-4 text-white focus:border-neon focus:outline-none transition-colors text-sm md:text-base" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">CVC</label>
                    <input type="text" placeholder="123" className="w-full bg-dark border border-white/10 rounded-lg p-3 md:p-4 text-white focus:border-neon focus:outline-none transition-colors text-sm md:text-base" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile-Only Pay Button (Shows at bottom of form) */}
            <button 
              onClick={handlePayment}
              disabled={isProcessing}
              className="lg:hidden w-full bg-neon text-dark font-bold text-lg py-4 rounded-xl hover:bg-white transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-8 shadow-[0_0_20px_rgba(0,243,255,0.3)]"
            >
              {isProcessing ? (
                <span className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <RiSecurePaymentLine /> Pay ${finalTotal.toFixed(2)}
                </>
              )}
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;