import style from "./cart.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

    await getCart();
  };

  let total = 0;

  cart.forEach((item) => {
    total = total + item.price;
  });

  return (
    <div className={style.cart}>
      <div className={style.cartLeft}>
        <div>
          <Link to="/">
            <button className={style.backBtn}>Back</button>
          </Link>
          <h2>Shopping Cart</h2>
        </div>

        {cart.length === 0 && <h3>Cart is Empty</h3>}

        {cart.map((item) => (
          <div className={style.cartItem} key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className={style.itemname}>
              <h3>{item.name}</h3>

              <p>In Stock</p>

              <button onClick={() => removeFromCart(item.id)}>Delete</button>
            </div>

            <h4>₹{item.price}</h4>
          </div>
        ))}
      </div>

      <div className={style.cartRight}>
        <h3>Subtotal ({cart.length} items)</h3>
        <h2>₹{total}</h2>
        <Link to="/address">
          <button className={style.buyBtn}>Proceed to Buy</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
