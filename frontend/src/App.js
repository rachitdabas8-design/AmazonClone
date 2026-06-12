import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Navbar/navbar.js';
import SemiNav from './components/SemiNav/semiNav.js';
import HomeBackground from './components/Home/homebackground.js';
import Cart from './components/Pages/Categories/cart.js';
import Login from './components/Pages/Login/login.js';


function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
        <Nav />
        <SemiNav/>
        <HomeBackground/>
        </>
        } />

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>

  );
}

export default App;