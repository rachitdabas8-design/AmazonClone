import style from "./address.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Address() {

  const [form, setForm] = useState({
    full_name: "",
    mobile: "",
    house: "",
    city: "",
    pincode: ""
  });

  const email = localStorage.getItem("email");

  // ---------------- AUTO FILL ----------------
  useEffect(() => {
    const saved = localStorage.getItem("address");

    if (saved) {
      setForm(JSON.parse(saved));
    }
  }, []);

  // ---------------- INPUT CHANGE ----------------
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  // ---------------- SAVE ADDRESS ----------------
  async function saveAddress(e) {
    e.preventDefault();

    const res = await fetch(`http://127.0.0.1:8000/address/${email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    alert(data.message);

    if (data.success) {
      // save locally for auto-fill next time
      localStorage.setItem("address", JSON.stringify(form));
    }
  }

  return (
    <div>
      <Link to="/cart">
        <button className={style.backBtn}>Back</button>
      </Link>

      <h2>Delivery Address</h2>

      <form onSubmit={saveAddress}>

        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={form.full_name}
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          name="house"
          placeholder="House No / Street"
          value={form.house}
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={form.pincode}
          onChange={handleChange}
        />
        <br />

        <button type="submit">
          Save Address
        </button>

      </form>
    </div>
  );
}

export default Address;