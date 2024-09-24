









import { BrowserRouter, Routes, Route } from "react-router-dom";
import useCartStore from './cartStore';
import Cart from './pages/Cart';
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop"; 
import About from "./pages/About";
import NavBar from "./layout/NavBar/NavBar";
import Bar from "./layout/Bar/Bar";
import Footer from "./layout/Footer/Footer";
import SidebarCart from "./layout/CartSidebar/SidebarCart"; // Import SidebarCart
import './App.css';
import SingleProduct from "./pages/SingleProduct";

function App() {
  const { cartCount, addToCart, toggleSidebar, isSidebarOpen } = useCartStore();

  return (
    <BrowserRouter>
      <NavBar cartCount={cartCount} toggleSidebar={toggleSidebar} /> {/* Add toggleSidebar to NavBar */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
        <Route path="/singleproduct/:id" element={<SingleProduct onAddToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Bar />
      <Footer />

      {/* Sidebar Cart Component */}
      {isSidebarOpen && <SidebarCart />}
    </BrowserRouter>
  );
}

export default App;
