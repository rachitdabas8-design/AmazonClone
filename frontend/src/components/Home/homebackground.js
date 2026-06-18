import "./homebackground.css";
import { Link } from "react-router-dom";

function HomeBackground() {
  return (
    <div className="homeBackground">
      <img
        className="backgroundImg"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/Img26/Sports/April/IPL/GW/Wsuraj3e/1500_X_600-GW_Hero_Pc_REC_2-1._CB760603320_.jpg"
        alt="backgroundimg"
      />

      <div className="productSection">
        <div className="productCard">
          <h3>iPhone 15</h3>

          <img
            src="https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg"
            alt="iPhone"
          />

          <p>₹99,999</p>

          <button>Add to Cart</button>
        </div>

        <div className="productCard">
          <h3>Boat Headphones</h3>

          <img
            src="https://m.media-amazon.com/images/I/61u1VALn6JL._SX679_.jpg"
            alt="Boat"
          />

          <p>₹1,499</p>

          <button>Add to Cart</button>
        </div>

        <div className="productCard">
          <h3>Samsung Galaxy</h3>

          <img
            src="https://m.media-amazon.com/images/I/71cQWYVtcBL._SX679_.jpg"
            alt="Samsung"
          />

          <p>₹54,999</p>

          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default HomeBackground;
