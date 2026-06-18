import "./cart.css";

function Cart({ cart, removeFromCart }) {

  let total = 0;

  cart.forEach((item) => {
    total = total + item.price;
  });

  return (
    <div className="cart">

      <div className="cartLeft">

        <h2>Shopping Cart</h2>

        {cart.length === 0 && <h3>Cart is Empty</h3>}

        {cart.map((item, index) => {

          return (
            <div className="cartItem" key={index}>

              <img src={item.image} alt={item.name} />

              <div className="itemname">

                <h3>{item.name}</h3>

                <p>In Stock</p>

                <button onClick={() => removeFromCart(index)}>
                  Delete
                </button>

              </div>

              <h4>₹{item.price}</h4>

            </div>
          );

        })}

      </div>

      <div className="cartRight">

        <h3>Subtotal ({cart.length} items)</h3>

        <h2>₹{total}</h2>

        <button className="buyBtn">
          Proceed to Buy
        </button>

      </div>

    </div>
  );
}

export default Cart;