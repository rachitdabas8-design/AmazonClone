import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import SignIn from "./SignIn/signIn.js";
import amazonimg from "../../assets/amazon.svg";
import locationimg from "../../assets/location.svg";
import down from "../../assets/downarrow.png";
import searchicon from "../../assets/search.png";
import india from "../../assets/india.png";
import cart from "../../assets/cart.png";

function Nav() {
  const categories = [
    "All Categories",
    "Amazon Devices",
    "Appliances",
    "Apps & Games",
    "Beauty",
    "Car & Motorbike",
    "Clothing & Accessories",
    "Computers & Accessories",
    "Deals",
    "Electronics",
    "Furniture",
    "Garden & Outdoors",
  ];

  const [showCategory, setShowCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="navbar">
      <div className="leftNav">
        <div className="leftNavLogo">
          <img className="amazonlogo" src={amazonimg} alt="amazonLogo" />
          <span>.in</span>
        </div>
        <div className="navbarLocation">
          <img className="locationimg" src={locationimg} alt="locationIcon" />
          <div className="locationarea">
            <div className="resentlocation">Delivering to Delhi</div>
            <div className="updatedlocation">Update location</div>
          </div>
        </div>
      </div>

      <div className="searchbox">
        <div className="searchdiv">
          <div className="searchBoxall">
            <div
              className="searchBoxtext"
              onClick={() => setShowCategory(!showCategory)}
            >
              <label>{selectedCategory}</label>
              <img src={down} alt="downIcon" />
            </div>

            {showCategory && (
              <div className="categoryDropdown">
                {categories.map((item, index) => (
                  <div
                    key={index}
                    className="categoryItem"
                    onClick={() => {
                      setSelectedCategory(item);
                      setShowCategory(false);
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
          <input
            className="InputsearchBox"
            type="text"
            placeholder="Search Amazon.in"
          />

          <div className="searchicon">
            <img src={searchicon} alt="searchIcon" />
          </div>
        </div>
      </div>

      <div className="rightnav">
        <div className="india">
          <img className="indiaflag" src={india} alt="indiaFlag" />
          <div className="bottomtext">
            EN
            <img src={down} alt="downIcon" />
          </div>
        </div>
        <SignIn />
      
      <div className="rightsidetext">
        <div className="toptext">Returns</div>
        <div className="bottomtext"> & Orders</div>
      </div>
      <div className="rightsidetext">
        <Link to="/cart">
        
          <img className="cartlogo" src={cart} alt="cartlogo" />
        </Link>
      </div>
    </div>
  </div>
  );
}

export default Nav;
