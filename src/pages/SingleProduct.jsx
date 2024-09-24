





// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import './SingleProduct.css';
// import { useNavigate } from 'react-router-dom';

// function SingleProduct({ onAddToCart }) {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [selectedColor, setSelectedColor] = useState('blue');
//   const [selectedSize, setSelectedSize] = useState('M');
//   const [quantity, setQuantity] = useState(1);
//   const [rating, setRating] = useState(0); // الحالة الجديدة للتقييم

//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products/${id}`)
//       .then((res) => res.json())
//       .then((json) => {
//         setProduct({
//           ...json,
//           oldPrice: json.price * 1.2, // إضافة السعر القديم للعرض
//           rating: json.rating?.rate || 0, // استخدام تقييم المنتج إن وجد
//         });
//         setRating(json.rating?.rate || 0); // ضبط التقييم الحالي
//       })
//       .catch((error) => console.error('Error fetching product data:', error));
//   }, [id]);

//   const handleAddToCart = () => {
//     if (product) {
//       const productWithOptions = { 
//         ...product, 
//         selectedColor, 
//         selectedSize, 
//         quantity, 
//         userRating: rating // إضافة التقييم المحدد من قبل المستخدم
//       };
//       onAddToCart(productWithOptions); // تمرير المعلومات إلى المكون الرئيسي (App)
//     }
//   };

//   const handleRatingChange = (newRating) => {
//     setRating(newRating);
//   };

//   if (!product) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="single-product-container">
//       <nav className="breadcrumb">
//         <a href="/">Home</a> &gt; <a href="/shop">Shop</a> &gt; {product.title}
//       </nav>

//       <div className="product-content">
//         <div className="product-image">
//           <img src={product.image} alt={product.title} />
//         </div>

//         <div className="product-details">
//           <h1>{product.title}</h1>
//           <p>{product.description}</p>

//           <div className="price-section">
//             <span className="new-price">${product.price.toFixed(2)}</span>
//             <span className="old-price">${product.oldPrice.toFixed(2)}</span>
//           </div>

//           <div className="rating-section">
//             <p>Rating: {rating}/5</p>
//             <div className="rating-stars">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <span
//                   key={star}
//                   className={`star ${star <= rating ? 'filled' : ''}`}
//                   onClick={() => handleRatingChange(star)}
//                 >
//                   &#9733;
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="cart-actions">
//             <div className="quantity-section">
//               <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
//               <span>{quantity}</span>
//               <button onClick={() => setQuantity(quantity + 1)}>+</button>
//             </div> 

//             <button className="add-to-cart-btn" onClick={handleAddToCart}> 
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SingleProduct;


























// import { useParams } from 'react-router-dom';
// import { useState, useEffect } from "react";
// import './SingleProduct.css';
// import { useNavigate } from 'react-router-dom';
// import useCartStore from "../cartStore";

// function SingleProduct() {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [selectedColor, setSelectedColor] = useState('blue');
//   const [selectedSize, setSelectedSize] = useState('M');
//   const [rating, setRating] = useState(0);
  
//   // حالة جديدة للكمية
//   const [quantity, setQuantity] = useState(1);

//   const { addToCart, incrementCount, decrementCount } = useCartStore();

//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products/${id}`)
//       .then((res) => res.json())
//       .then((json) => {
//         setProduct({
//           ...json,
//           oldPrice: json.price * 1.2,
//           rating: json.rating?.rate || 0,
//         });
//         setRating(json.rating?.rate || 0);
//       })
//       .catch((error) => console.error('Error fetching product data:', error));
//   }, [id]);

//   const handleAddToCart = () => {
//     if (product) {
//       const productWithOptions = { 
//         ...product, 
//         selectedColor, 
//         selectedSize, 
//         quantity, // إرسال الكمية المحددة
//         userRating: rating 
//       };
//       addToCart(productWithOptions);
//     }
//   };

//   const handleIncrement = () => {
//     setQuantity((prevQuantity) => prevQuantity + 1);
//     incrementCount(product); // زيادة العدد في السلة
//   };

//   const handleDecrement = () => {
//     if (quantity > 1) { // التأكد من أن الكمية لا تقل عن 1
//       setQuantity((prevQuantity) => prevQuantity - 1);
//       decrementCount(product); // تقليل العدد في السلة
//     }
//   };

//   const handleRatingChange = (newRating) => {
//     setRating(newRating);
//   };

//   if (!product) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="single-product-container">
//       <nav className="breadcrumb">
//         <a href="/">Home</a> &gt; <a href="/shop">Shop</a> &gt; {product.title}
//       </nav>

//       <div className="product-content">
//         <div className="product-image">
//           <img src={product.image} alt={product.title} />
//         </div>

//         <div className="product-details">
//           <h1>{product.title}</h1>
//           <p>{product.description}</p>

//           <div className="price-section">
//             <span className="new-price">${product.price.toFixed(2)}</span>
//             <span className="old-price">${product.oldPrice.toFixed(2)}</span>
//           </div>

//           <div className="rating-section">
//             <p>Rating: {rating}/5</p>
//             <div className="rating-stars">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <span
//                   key={star}
//                   className={`star ${star <= rating ? 'filled' : ''}`}
//                   onClick={() => handleRatingChange(star)}
//                 >
//                   &#9733;
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="cart-actions">
//             <div className="quantity-section">
//               <button onClick={handleDecrement}>-</button>
//               <span>{quantity}</span>
//               <button onClick={handleIncrement}>+</button>
//             </div>

//             <button className="add-to-cart-btn" onClick={handleAddToCart}>
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SingleProduct;























import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import './SingleProduct.css';
import { useNavigate } from 'react-router-dom';
import useCartStore from "../cartStore";

function SingleProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedSize, setSelectedSize] = useState('M');
  const [rating, setRating] = useState(0);
  
  // حالة جديدة للكمية
  const [quantity, setQuantity] = useState(1);

  const { addToCart, incrementCount, decrementCount } = useCartStore();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct({
          ...json,
          oldPrice: json.price * 1.2,
          rating: json.rating?.rate || 0,
        });
        setRating(json.rating?.rate || 0);
      })
      .catch((error) => console.error('Error fetching product data:', error));
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      const productWithOptions = { 
        ...product, 
        selectedColor, 
        selectedSize, 
        quantity, // إرسال الكمية المحددة
        userRating: rating 
      };
      addToCart(productWithOptions);
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    incrementCount(product); // زيادة العدد في السلة
  };

  const handleDecrement = () => {
    if (quantity > 1) { // التأكد من أن الكمية لا تقل عن 1
      setQuantity((prevQuantity) => prevQuantity - 1);
      decrementCount(product); // تقليل العدد في السلة
    }
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="single-product-container">
      <nav className="breadcrumb">
        <a href="/">Home</a> &gt; <a href="/shop">Shop</a> &gt; {product.title}
      </nav>

      <div className="product-content">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-details">
          <h1>{product.title}</h1>
          <p>{product.description}</p>

          <div className="price-section">
            <span className="new-price">${product.price.toFixed(2)}</span>
            <span className="old-price">${product.oldPrice.toFixed(2)}</span>
          </div>

          <div className="rating-section">
            <p>Rating: {rating}/5</p>
            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${star <= rating ? 'filled' : ''}`}
                  onClick={() => handleRatingChange(star)}
                >
                  &#9733;
                </span>
              ))}
            </div>
          </div>

          <div className="cart-actions">
            <div className="quantity-section">
              <button onClick={handleDecrement}>-</button>
              <span>{quantity}</span>
              <button onClick={handleIncrement}>+</button>
            </div>

            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
