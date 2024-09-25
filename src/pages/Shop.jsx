


















import { useState, useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import './Shop.css';
import useCartStore from '../cartStore';

function Shop() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = searchParams.get('category');
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const { addToCart } = useCartStore();

  useEffect(() => {
    let url = 'https://fakestoreapi.com/products';
    if (category) {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        const updatedProducts = json.map((product) => ({
          ...product,
          oldPrice: product.price * 1.2,
        }));
        setProducts(updatedProducts);
        setTotalProducts(updatedProducts.length);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [category]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleProductClick = (id) => {
    navigate(`/singleproduct/${id}`);
  };

  return (
    <>
      <div className="shop-container">
        <img className="ShopImage" src="/shop-top.png" alt="Shop Background" />
        <div className="center-content">
          <img className="logo" src="/furniro.png" alt="Logo" />
          <h1>Shop</h1>
          <nav className="breadcrumb">
            <Link to="/">Home</Link> &gt; <span>Shop</span>
          </nav>
        </div>
      </div>

      <div className="shopContainer">
        <h2>{category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` : 'All Products'}</h2>
        <div className="productsGrid">
          {currentProducts.map((product) => (
            <div key={product.id} className="productCard" onClick={() => handleProductClick(product.id)}>
              <img src={product.image} alt={product.title} className="productImage" />
              <h3>{product.title}</h3>
              <div className="priceContainer">
                <p className="newPrice">${product.price.toFixed(2)}</p>
                <p className="oldPrice">${product.oldPrice.toFixed(2)}</p>
              </div>
              <div className="cardOverlay">
                <button
                  className="addToCartButton"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  aria-label={`Add ${product.title} to cart`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}

          <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>

        <p>Total products: {totalProducts}</p>
      </div>
    </>
  );
}

export default Shop;
