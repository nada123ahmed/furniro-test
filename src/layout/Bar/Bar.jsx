

import Icon1 from "../../../public/trophy 1.png";
import Icon2 from "../../../public/guarantee.png";
import Icon3 from "../../../public/shipping.png";
import Icon4 from "../../../public/customer-support.png";
import "./Bar.css";

function Bar() {
  return (
   <>
     <section>
        <div className="bar2">
          <div className="bar">
            <div className="barItem">
              <img src={Icon1} alt="High Quality Icon" />
              <p>High Quality <br /> crafted from top materials</p>
            </div>
            <div className="barItem">
              <img src={Icon2} alt="Warranty Icon" />
              <p>Warranty Production <br /> Over 2 Years</p>
            </div>
            <div className="barItem">
              <img src={Icon3} alt="Free Shipping Icon" />
              <p>Free Shipping <br /> Order Over $150</p>
            </div>
            <div className="barItem">
              <img src={Icon4} alt="Support Icon" />
              <p>24/7 Support <br /> Dedicated Support</p>
            </div>
          </div>
        </div>
      </section> 
   </>
  )
}

export default Bar;


