



















import { useEffect } from 'react';
import useCartStore from '../cartStore'; // تأكد من المسار الصحيح
import './Cart.css'; 
import ShopImage from '../../public/shop-top.webp'; // صورة الخلفية
import Logo from '../../public/furniro.png'; // شعار المتجر
import Delete from "../../public/Vector.png";
import { Link } from 'react-router-dom'; // استيراد Link للتنقل

function Cart() {
  const { cartItems, removeFromCart, setCartItems } = useCartStore(); // جلب العناصر من Zustand

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      if (item.price && item.quantity) {
        return total + item.price * item.quantity;
      }
      return total;
    }, 0).toFixed(2);
  };

  return (
    <>
      <div className="shop">
        <div className='Header'>
          <img className="ShopImage" src={ShopImage} alt="Shop Background" />
          <div className="center-content">
            <h1>Cart</h1>
            <nav className="breadcrumb">
              <Link to="/">Home</Link> &gt; <Link to="/shop">Cart</Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="cart-container">
        {cartItems.length > 0 ? (
          <>
            <div className="cart-table">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th></th> 
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((product) => (
                    <tr key={product.id}> {/* استخدام product.id كمفتاح */}
                      <td data-label="Product" className="product">
                        <img src={product.image} alt={product.title} className="product-pic" />
                        <span>{product.title}</span>
                      </td>
                      <td data-label="Price">${product.price ? product.price.toFixed(2) : '0.00'}</td>
                      <td data-label="Quantity">{product.quantity || 0}</td>
                      <td data-label="Subtotal">${(product.price && product.quantity ? (product.price * product.quantity).toFixed(2) : '0.00')}</td>
                      <td data-label="Delete">
                        <button className="delete-btn" onClick={() => removeFromCart(product.id)}> {/* استخدام product.id هنا */}
                          <img src={Delete} alt="Delete" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="cart-totals">
              <h3>Cart Totals</h3>
              <p>Total Price: <strong>${calculateTotal()}</strong></p>
              <button className="checkout-btn">Check Out</button>
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            {/* استخدام Link بدلاً من window.location.href */}
            <Link to="/shop">
              <button className="shop-btn">
                Go to Shop
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
