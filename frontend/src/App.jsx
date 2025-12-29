import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Utils
import ScrollToTop from "./components/utils/ScrollToTop"; // Ensure this is imported

// Shared Components
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

// Layout & UI
import Hero from "./components/layout/Hero";
import Features from "./components/layout/Features";
import ProductList from "./components/layout/ProductList";
import CartDrawer from "./components/ui/CartDrawer";
import SearchModal from "./components/ui/SearchModal";

// Pages
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import CategoryPage from "./pages/CategoryPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Shipping from "./pages/Shipping";
import Warranty from "./pages/Warranty";

function App() {
  return (
    <div className="bg-dark min-h-screen text-white font-body selection:bg-neon selection:text-dark flex flex-col"> 
      
      {/* 1. Global Scroll Reset */}
      <ScrollToTop />

      {/* 2. Global Notification System (Styled for Cyber-Luxury) */}
      <Toaster
        position="top-center" 
        reverseOrder={false} 
        toastOptions={{
          className: '',
          style: {
            background: '#0a0a0a',
            border: '1px solid rgba(0, 243, 255, 0.2)', // Neon Border
            color: '#fff',
            boxShadow: '0 0 20px rgba(0, 243, 255, 0.1)', // Neon Glow
            padding: '16px',
          },
          iconTheme: {
            primary: '#00f3ff', // Neon Checkmark
            secondary: '#000',
          },
        }}
      />

      {/* 3. Global Overlays */}
      <Navbar />
      <CartDrawer />
      <SearchModal />
      
      {/* 4. Page Routing */}
      <div className="flex-grow"> 
        <Routes>
          {/* Home Route */}
          <Route path="/" element={
            <main>
              <Hero />
              <Features />
              <ProductList />
            </main>
          } />
          
          {/* Functional Pages */}
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          
          {/* Info Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/warranty" element={<Warranty />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;