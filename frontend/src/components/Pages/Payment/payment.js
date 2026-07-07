import "./payment.css"
import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const PaymentPage = () => {

  const [address, setAddress] = useState(null);

  useEffect(() => {
    const savedAddress = localStorage.getItem("address");

    if (savedAddress) {
      setAddress(JSON.parse(savedAddress));
    }
  }, []);

  return (
    <div className="paymentPage">

      <Link to="/address">
        <button>Back</button>
      </Link>

      <h1>Select Payment Method</h1>

      <div className="paymentBox">

        <h3>Delivery Address</h3>

         {address ? (
          <div>
            <p>{address.full_name}</p>
            <p>{address.mobile}</p>
            <p>{address.house}</p>
            <p>{address.city}</p>
            <p>{address.pincode}</p>
          </div>
        ) : (
          <p>No Address Found</p>
        )} 
        
      </div>

      <div className="paymentBox">

        <h3>Choose Payment</h3>

        <label>
          <input
            type="radio"
            name="payment"
            value="cash"
          />
          Cash on Delivery
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="payment"
            value="upi"
          />
          UPI
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="payment"
            value="card"
          />
          Credit / Debit Card
        </label>

      </div>


      <Link to="/orderPlaced"><button className="placeOrderBtn">
        Place Order
      </button></Link>

      

    </div>
  );
};

export default PaymentPage;