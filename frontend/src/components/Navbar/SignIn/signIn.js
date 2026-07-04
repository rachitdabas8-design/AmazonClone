import "./signIn.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SignIn() {

  const [showMenu, setShowMenu] = useState(false);
  const [email, setEmail] = useState(null);

  // check login user
  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    setEmail(savedEmail);
  }, []);

  function logout() {
    localStorage.removeItem("email");
    localStorage.removeItem("address");
    setEmail(null);
  }

  return (
    <div
      className="account"
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >

      <div className="toptext">
        {email ? `Hello, ${email}` : "Hello, Sign in"}
      </div>

      <div className="bottomtext">
        Account & Lists
      </div>

      {showMenu && (
        <div className="dropdown">

          {!email ? (
            <Link to="/login">
              <button className="signinBtn">Sign In</button>
            </Link>
          ) : (
            <button className="signinBtn" onClick={logout}>
              Logout
            </button>
          )}

          <div className="dropdown-content">

            <div>
              <h3>Your Lists</h3>
              <p>Create a Wish List</p>
              <p>Wish from Any Website</p>
            </div>

            <div>
              <h3>Your Account</h3>
              <p>Your Orders</p>
              <p>Your Wish List</p>
              <p>Your Prime Membership</p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default SignIn;