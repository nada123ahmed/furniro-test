
























import { useState } from 'react';
import { Link } from 'react-router-dom';
import useCartStore from '../../cartStore';  // تأكد من المسار الصحيح
import Frame from "../../../public/Frame 168.webp";
import CartIcon from "../../../public/ant-design_shopping-cart-outlined.webp";
import "./NavBar.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, toggleSidebar } = useCartStore(); // Access cartCount and toggleSidebar from Zustand

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <a href="/"><img src={Frame} alt="Logo" /></a>
          </div>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/Shop" onClick={closeMenu}>Shop</Link></li>
            <li><Link to="/Contact" onClick={closeMenu}>Contact</Link></li>
            <li><Link to="/About" onClick={closeMenu}>About</Link></li>
          </ul>

          <div className="cart-icon">
            <button onClick={toggleSidebar} className="cart-button">
              <img src={CartIcon} alt="Cart" />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </button>
          </div>

          <div className="menu-toggle" onClick={toggleMenu}>
            <span className="hamburger"></span>
          </div>

          {isMenuOpen && (
            <div className="close-button" onClick={closeMenu}>
              &times;
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
