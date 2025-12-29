import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { RiMenu3Line, RiCloseLine, RiShoppingBag3Line, RiSearchLine } from "react-icons/ri";
import { toggleCart } from "../../features/cartSlice";
import { toggleSearch } from "../../features/uiSlice"; // 1. Import Search Action

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Redux Logic
  const dispatch = useDispatch();
  const { totalQuantity } = useSelector((state) => state.cart);

  // Scroll Effect Logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Headphones", path: "/category/headphones" },
    { name: "Earbuds", path: "/category/earbuds" },
    { name: "Speakers", path: "/category/speakers" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-dark/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <Link to="/" className="text-2xl font-display font-bold tracking-wider text-white">
            AURA<span className="text-neon">.</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-gray-300 hover:text-neon transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* ICONS AREA */}
          <div className="flex items-center space-x-5">
            {/* SEARCH BUTTON - Updated to open Modal */}
            <button 
              className="hidden md:block text-gray-300 hover:text-white transition-colors"
              onClick={() => dispatch(toggleSearch(true))} 
            >
              <RiSearchLine size={20} />
            </button>

            {/* CART BUTTON */}
            <button 
              onClick={() => dispatch(toggleCart(true))}
              className="relative text-gray-300 hover:text-neon transition-colors"
            >
              <RiShoppingBag3Line size={22} />
              {totalQuantity > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-neon text-[10px] font-bold text-dark">
                  {totalQuantity}
                </span>
              )}
            </button>

            {/* HAMBURGER BUTTON - Only visible when menu is CLOSED */}
            {!isMobileMenuOpen && (
              <button
                className="md:hidden text-gray-300 hover:text-white"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <RiMenu3Line size={24} />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* MOBILE MENU DRAWER (Matches Cart Style) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* 1. BACKDROP BLUR */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />

            {/* 2. SIDE DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[350px] bg-dark/95 backdrop-blur-xl border-l border-white/10 z-[70] flex flex-col shadow-2xl"
            >
              
              {/* Drawer Header */}
              <div className="p-6 flex justify-between items-center border-b border-white/5">
                <span className="font-display font-bold text-white text-xl">Menu</span>
                <button
                  className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <RiCloseLine size={24} />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex-1 flex flex-col justify-center p-8 space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-3xl font-display font-bold text-gray-300 hover:text-neon transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="p-8 border-t border-white/5">
                 <p className="text-gray-500 text-xs font-mono tracking-widest uppercase mb-4">
                    Follow Us
                 </p>
                 <div className="flex space-x-4 text-sm text-gray-400">
                    <span>Instagram</span>
                    <span>Twitter</span>
                    <span>Youtube</span>
                 </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;