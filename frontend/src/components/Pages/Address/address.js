import "./address.css";
function Address() {
  return (
    <div>
      <h2>Delivery Address</h2>

      <form>
        <input type="text" placeholder="Full Name" />
        <br />

        <input type="text" placeholder="Mobile Number" />
        <br />

        <input type="text" placeholder="House No / Street" />
        <br />

        <input type="text" placeholder="City" />
        <br />
        <input type="text" placeholder="Pincode" />
        <br />

        <button type="submit">Save Address</button>
      </form>
    </div>
  );
}

export default Address;
