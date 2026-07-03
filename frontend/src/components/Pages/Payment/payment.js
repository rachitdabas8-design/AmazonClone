import React from "react";
import { Link } from "react-router-dom";

const PaymentPage = () => {
  return (

    <div class="paymentPage">
       <Link to="/address">
        <button>Back</button>
      </Link>


    <h1>Select Payment Method</h1>

   
    <div class="paymentBox">

        <h3>Delivery Address</h3>

        <div>
            <p>Rachit</p>
            <p>123456788</p>
            <p>260</p>
            <p>Delhi</p>
            <p>110081</p>
        </div>

    </div>

    
    <div class="paymentBox">

        <h3>Choose Payment</h3>

        <label>
          <input
                type="radio"
                name="payment"
                value="cash"
            />
            Cash on Delivery
        </label>

        

        <label>
            <input
                type="radio"
                name="payment"
                value="upi"
            />
            UPI
        </label>

       

        <label>
            <input
                type="radio"
                name="payment"
                value="card"
            />
            Credit / Debit Card
        </label>

    </div>

    
    <button class="placeOrderBtn">
        Place Order
    </button>

</div>
  );
};

export default PaymentPage;