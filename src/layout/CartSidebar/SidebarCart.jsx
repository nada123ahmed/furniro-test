







// import useCartStore from '../../cartStore';  // Import Zustand store
// import './SidebarCart.css';
// import { Link } from 'react-router-dom';
// function SidebarCart() {
//   const { cartItems, toggleSidebar } = useCartStore();

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => {
//       if (item.price && item.quantity) {
//         return total + item.price * item.quantity;
//       }
//       return total;
//     }, 0).toFixed(2);
//   };

//   return (
//     <div className="sidebar-cart">
//       <div className="sidebar-header">
//         <h2>Your Cart</h2>
//         <button className="close-btn" onClick={toggleSidebar}>X</button>
//       </div>

//       <div className="cart-items">
//         {cartItems.length > 0 ? (
//           cartItems.map((item, index) => (
//             <div key={index} className="cart-item">
//               <img src={item.image} alt={item.title} className="cart-item-image" />
//               <div className="cart-item-details">
//                 <p>{item.title}</p>
//                 <p>${item.price ? item.price.toFixed(2) : '0.00'} x {item.quantity || 0}</p>
//                 <p>Subtotal: ${(item.price && item.quantity ? (item.price * item.quantity).toFixed(2) : '0.00')}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Your cart is empty</p>
//         )}
//       </div>

//       {cartItems.length > 0 && (
//         <div className="cart-footer">
//           <p>Total: <strong>${calculateTotal()}</strong></p>
//           <Link to="/Cart"> <button className="view-cart-btn">View Cart</button></Link>
         
//         </div>
//       )}
//     </div>
//   );
// }

// export default SidebarCart;







import useCartStore from '../../cartStore'; // Import Zustand store
import './SidebarCart.css';
import { Link } from 'react-router-dom';

function SidebarCart() {
  const { cartItems, toggleSidebar, isSidebarOpen, decrementQuantity } = useCartStore();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      if (item.price && item.quantity) {
        return total + item.price * item.quantity;
      }
      return total;
    }, 0).toFixed(2);
  };

  return (
    isSidebarOpen && ( // تأكد من ظهور الـ Sidebar بناءً على الحالة
      <div className="sidebar-cart">
        <div className="sidebar-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={toggleSidebar}>X</button>
        </div>

        <div className="cart-items">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <p>{item.title}</p>
                  <p>${item.price ? item.price.toFixed(2) : '0.00'} x {item.quantity || 0}</p>
                  <p>Subtotal: ${(item.price && item.quantity ? (item.price * item.quantity).toFixed(2) : '0.00')}</p>
                  <button className="delete-btn" onClick={() => decrementQuantity(item.id)}>x</button>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <p>Total: <strong>${calculateTotal()}</strong></p>
            <Link to="/Cart"><button className="view-cart-btn">View Cart</button></Link>
          </div>
        )}
      </div>
    )
  );
}

export default SidebarCart;
