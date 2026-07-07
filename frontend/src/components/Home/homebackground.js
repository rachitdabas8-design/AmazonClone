import "./homebackground.css";
import { useState, useEffect } from "react";

function HomeBackground() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const response = await fetch(
      "http://127.0.0.1:8000/products"
    );

    const data = await response.json();

    setProducts(data);
  }

  const addToCart = async (product) => {
    const email = localStorage.getItem("email");

    if (!email) {
      alert("Please Login First");
      return;
    }

    const response = await fetch(
      "http://127.0.0.1:8000/cart",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          user_id: Number(
            localStorage.getItem("user_id")
          ),

          name: product.name,
          price: product.price,
          image: product.image,

        }),
      }
    );

    const data = await response.json();

    alert(data.message);
  };

  return (
    <div className="homeBackground">

      <img
        className="backgroundImg"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/Img26/Sports/April/IPL/GW/Wsuraj3e/1500_X_600-GW_Hero_Pc_REC_2-1._CB760603320_.jpg"
        alt="backgroundimg"
      />

      <div className="productsContainer">

        {products.map((product) => (
          <div
            className="productCard"
            key={product.id}
          >

            <img
              src={product.image}
              alt={product.name}
            />

            <h3>{product.name}</h3>

            <p>₹{product.price}</p>

            <button
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default HomeBackground;