import "./homebackground.css";

function HomeBackground({ addToCart }) {
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 79999,
      image:
        "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg",
    },
    {
      id: 2,
      name: "Boat Headphones",
      price: 1499,
      image:
        "https://m.media-amazon.com/images/I/61u1VALn6JL._SX679_.jpg",
    },
    {
      id: 3,
      name: "Samsung Galaxy",
      price: 54999,
      image:
        "https://m.media-amazon.com/images/I/71cQWYVtcBL._SX679_.jpg",
    },
  ];

  return (
    <div className="homeBackground">
      <img
        className="backgroundImg"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/Img26/Sports/April/IPL/GW/Wsuraj3e/1500_X_600-GW_Hero_Pc_REC_2-1._CB760603320_.jpg"
        alt="backgroundimg"
      />

      <div className="productsContainer">
        {products.map((product) => (
          <div className="productCard" key={product.id}>
            <img src={product.image} alt={product.name} />

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