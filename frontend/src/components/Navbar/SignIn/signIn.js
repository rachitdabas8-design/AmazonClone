import "./signIn.css";
import { useState } from "react";

import { Link } from "react-router-dom";


function SignIn() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className="account"
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <div className="toptext">Hello, Sign in</div>
      <div className="bottomtext">Account & Lists</div>

      {showMenu && (
        <div className="dropdown">
          <Link to="/login">
            <button className="signinBtn">Sign In</button>
          </Link>

          <div className="dropdown-content">
            <div>
              <h3>Your Lists</h3>
              <p>Create a Wish List</p>
              <p>Wish from Any Website</p>
              <p>Baby Wishlist</p>
            </div>

            <div>
              <h3>Your Account</h3>
              <p>Your Orders</p>
              <p>Your Wish List</p>
              <p>Your Recommendations</p>
              <p>Your Prime Membership</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignIn;