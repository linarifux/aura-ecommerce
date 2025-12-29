import { Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Hero from "./components/layout/Hero";
import Features from "./components/layout/Features";
import ProductList from "./components/layout/ProductList";
import ProductDetails from "./pages/ProductDetails";
import CartDrawer from "./components/ui/CartDrawer";
import Checkout from "./pages/Checkout";
import CategoryPage from "./pages/CategoryPage"; // 1. Import
import About from "./pages/About"; // 2. Import
import SearchModal from "./components/ui/SearchModal";

function App() {
  return (
    <div className="bg-dark min-h-screen text-white font-body selection:bg-neon selection:text-dark flex flex-col"> 
      <Navbar />
      <CartDrawer />
      <SearchModal /> {/* Add this here */}
      
      <div className="grow"> 
        <Routes>
          {/* Home Route */}
          <Route path="/" element={
            <main>
              <Hero />
              <Features />
              <ProductList />
            </main>
          } />
          
          {/* New Pages */}
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/about" element={<About />} />
          
          {/* Existing Routes */}
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;