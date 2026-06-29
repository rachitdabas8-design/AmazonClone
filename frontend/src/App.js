import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Navbar/navbar.js";
import SemiNav from "./components/SemiNav/semiNav.js";
import HomeBackground from "./components/Home/homebackground.js";
import Cart from "./components/Pages/Categories/cart.js";
import Login from "./components/Pages/Login/login.js";
import Address from "./components/Pages/Address/address.js";


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((item, i) => i !== index));
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Nav />
            <SemiNav />
            <HomeBackground addToCart={addToCart} />
          </>
        }
      />

      <Route
        path="/cart"
        element={
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
          />
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/address" element={<Address />} />
    </Routes>
  );
}

export default App;