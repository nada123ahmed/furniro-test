





















import { useState } from 'react';
import { Link } from 'react-router-dom';
import useCartStore from '../../cartStore';  // تأكد من المسار الصحيح
import Frame from "../../../public/Frame 168.png";
import CartIcon from "../../../public/ant-design_shopping-cart-outlined.png";
import "./NavBar.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, toggleSidebar } = useCartStore(); // Access cartCount and toggleSidebar from Zustand

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <a href="/"><img src={Frame} alt="Logo" /></a>
          </div>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/Shop" onClick={toggleMenu}>Shop</Link></li>
            <li><Link to="/Contact" onClick={toggleMenu}>Contact</Link></li>
            <li><Link to="/About" onClick={toggleMenu}>About</Link></li>
          </ul>

          <div className="cart-icon">
            {/* Replace Link with a button to toggle the sidebar */}
            <button onClick={toggleSidebar} className="cart-button">
              <img src={CartIcon} alt="Cart" />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>} {/* Display cart count */}
            </button>
          </div>

          <div className="menu-toggle" onClick={toggleMenu}>
            <span className="hamburger"></span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
