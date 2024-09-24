













// import { useEffect } from 'react';
// import useCartStore from '../cartStore'; // تأكد من المسار الصحيح
// import './Cart.css'; 
// import ShopImage from '../../public/shop-top.png'; // صورة الخلفية
// import Logo from '../../public/furniro.png'; // شعار المتجر
// import Delete from "../../public/Vector.png"
// function Cart() {
//   const { cartItems, removeFromCart, setCartItems } = useCartStore(); // جلب العناصر من Zustand

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => {
//       if (item.price && item.quantity) {
//         return total + item.price * item.quantity;
//       }
//       return total;
//     }, 0).toFixed(2);
//   };

//   return (
//     <>
//       <div className="shop">
//         <div className='Header'>
//           <img className="ShopImage" src={ShopImage} alt="Shop Background" />
//           <div className="center-content">
//             <h1>Cart</h1>
//             <nav className="breadcrumb">
//               <a href="/">Home</a> &gt; <a href="/shop">Cart</a>
//             </nav>
//           </div>
//         </div>
//       </div>

//       <div className="cart-container">
//         {cartItems.length > 0 ? (
//           <>
//             <div className="cart-table">
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Product</th>
//                     <th>Price</th>
//                     <th>Quantity</th>
//                     <th>Subtotal</th>
//                     <th></th> 
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cartItems.map((product, index) => (
//                     <tr key={index}>
//                       <td data-label="Product" className="product">
//                         <img src={product.image} alt={product.title} className="product-pic" />
//                         <span>{product.title}</span>
//                       </td>
//                       <td data-label="Price">${product.price ? product.price.toFixed(2) : '0.00'}</td>
//                       <td data-label="Quantity">{product.quantity || 0}</td>
//                       <td data-label="Subtotal">${(product.price && product.quantity ? (product.price * product.quantity).toFixed(2) : '0.00')}</td>
//                       <td data-label="Delete">
//                         <button className="delete-btn" onClick={() => removeFromCart(index)}>
//                          <img src={Delete}></img>
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <div className="cart-totals">
//               <h3>Cart Totals</h3>
//               <p>Total Price: <strong>${calculateTotal()}</strong></p>
//               <button className="checkout-btn">Check Out</button>
//             </div>
//           </>
//         ) : (
//           <div className="empty-cart">
//             <p>Your cart is empty</p>
//             <button className="shop-btn" onClick={() => window.location.href = '/shop'}>
//               Go to Shop
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Cart;




import { useEffect } from 'react';
import useCartStore from '../cartStore'; // تأكد من المسار الصحيح
import './Cart.css'; 
import ShopImage from '../../public/shop-top.png'; // صورة الخلفية
import Logo from '../../public/furniro.png'; // شعار المتجر
import Delete from "../../public/Vector.png"

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
              <a href="/">Home</a> &gt; <a href="/shop">Cart</a>
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
            <button className="shop-btn" onClick={() => window.location.href = '/shop'}>
              Go to Shop
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;


