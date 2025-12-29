import { motion } from "framer-motion";
import { RiTruckLine, RiTimeLine, RiGlobalLine, RiExchangeDollarLine, RiCheckboxCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-dark pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            Shipping & <span className="text-neon">Returns</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Transparent policies designed for your peace of mind. Fast global delivery and hassle-free returns.
          </motion.p>
        </div>

        {/* SHIPPING SECTION */}
        <div className="mb-20">
          <h2 className="text-2xl font-display font-bold text-white mb-8 flex items-center">
            <RiTruckLine className="text-neon mr-3" /> Global Delivery
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-surface border border-white/10 p-8 rounded-2xl"
            >
              <div className="w-12 h-12 bg-neon/10 rounded-full flex items-center justify-center text-neon mb-6">
                <RiTimeLine size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Standard Shipping</h3>
              <p className="text-neon font-mono text-sm mb-4">Free over $500</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Reliable delivery within 5-7 business days. Perfect for when you're planning ahead.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-surface border border-neon/30 p-8 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-neon text-dark text-xs font-bold px-3 py-1 rounded-bl-lg">
                MOST POPULAR
              </div>
              <div className="w-12 h-12 bg-neon/10 rounded-full flex items-center justify-center text-neon mb-6">
                <RiTruckLine size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Express Delivery</h3>
              <p className="text-neon font-mono text-sm mb-4">$15.00 Flat Rate</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Get your gear fast. delivery within 2-3 business days via our priority courier partners.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-surface border border-white/10 p-8 rounded-2xl"
            >
              <div className="w-12 h-12 bg-neon/10 rounded-full flex items-center justify-center text-neon mb-6">
                <RiGlobalLine size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">International</h3>
              <p className="text-neon font-mono text-sm mb-4">Calculated at Checkout</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                We ship to over 80 countries. Customs and duties are handled upfront so there are no surprises.
              </p>
            </motion.div>
          </div>
        </div>

        {/* RETURNS SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center">
              <RiExchangeDollarLine className="text-neon mr-3" /> The 30-Day Guarantee
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              We want you to love your AURA experience. If the sound isn't quite right for you, we accept returns within 30 days of delivery.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Item must be in original condition",
                "Include all accessories and manuals",
                "Original packaging required",
                "Free return shipping for defective units"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-300 text-sm">
                  <RiCheckboxCircleLine className="text-neon mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-block bg-white text-dark font-bold px-8 py-3 rounded-full hover:bg-neon transition-colors">
              Start a Return
            </Link>
          </div>
          
          <div className="relative h-64 lg:h-full bg-dark/50 rounded-2xl flex items-center justify-center border border-white/5 overflow-hidden">
             {/* Abstract visual for returns */}
             <div className="absolute inset-0 bg-gradient-to-br from-neon/10 to-transparent" />
             <RiExchangeDollarLine className="text-white/10 text-9xl relative z-10" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Shipping;