import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function homepage() {
    if (email === "") {
      alert("Please Enter Email");
      return;
    }

    if (password === "") {
      alert("Please Enter Password");
      return;
    }

    const response = await fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

 
    const data = await response.json();

    alert(data.message);

    if (data.success) {
      localStorage.setItem("email", email);

      localStorage.setItem("user_id", data.user_id);

      if (data.address) {
        localStorage.setItem("address", JSON.stringify(data.address));
      }

      navigate("/");
    }
  }

  return (
    <div className="loginPage">
      <div className="loginBox">
        <h1>Sign in or create account</h1>

        <label>Enter mobile number or email</label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={homepage}>Continue</button>

        <div className="loginterms">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </div>

        <hr />

        <div>
          <h4>Buying for work?</h4>
          Create a free business account
        </div>
      </div>

      <div className="loginfooter">
        Conditions of Use Privacy Notice help
        <br />
        1996-2026, Amazon.com, Inc. or its affiliates
      </div>
    </div>
  );
}

export default Login;
