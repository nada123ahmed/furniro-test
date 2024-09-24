
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import HomeImage from "../../public/home-hero-bg-887bfdde.png"
import image1 from "../../public/Mask Group.png";
import image2 from "../../public/Image-living room.png";
import image3 from "../../public/Mask Group (1).png";
const Home = () => {
  const [categories, setCategories] = useState([]);

  // Fetch categories from the API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <>
    <div>
      <img className='Home' src={HomeImage}></img>
    </div>
      <section className="section">
        <div className="sectionInnerContainer">
          <div className="sectionTop">
            <h1 className="sectionHeading">Categories</h1>
          </div>
          <div className="sectionMain">
            {categories.map((category, index) => (
            
              <Link
             to={`/shop?category=${category}`}
                 className="linkMain"
                 key={index}
    >
                <div className="linkBox">
                  <div className="linkBoxImage">
                    <img
                      src={index === 0 ? image1 : index === 1 ? image2 : image3}
                      alt={`${category} Image`}
                      className="linkImage"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <h4 className="linkBoxHeading">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
     

   
    </>
  );
};

export default Home;
