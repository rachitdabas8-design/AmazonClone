import "./cart.css";
import { useState, useEffect } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  const getCart = async () => {
    const response = await fetch("http://127.0.0.1:8000/cart");

    const data = await response.json();

    setCart(data);
  };

  useEffect(() => {
    getCart();
  }, []);

  const removeFromCart = async (id) => {
    await fetch("http://127.0.0.1:8000/cart/" + id, {
      method: "DELETE",
    });

    getCart();
  };

  let total = 0;

  cart.forEach((item) => {
    total = total + item.price;
  });

  return (
    <div className="cart">
      <div className="cartLeft">
        <h2>Shopping Cart</h2>

        {cart.length === 0 && <h3>Cart is Empty</h3>}

        {cart.map((item) => (
          <div className="cartItem" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="itemname">
              <h3>{item.name}</h3>

              <p>In Stock</p>

              <button onClick={() => removeFromCart(item.id)}>Delete</button>
            </div>

            <h4>₹{item.price}</h4>
          </div>
        ))}
      </div>

      <div className="cartRight">
        <h3>Subtotal ({cart.length} items)</h3>

        <h2>₹{total}</h2>

        <button className="buyBtn">Proceed to Buy</button>
      </div>
    </div>
  );
}

export default Cart;