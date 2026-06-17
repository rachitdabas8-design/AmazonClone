import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const homepage = () => {
    navigate("/");
  };

  return (
    <div className="loginPage">
      <div className="loginBox">
        <h1>Sign in or create account</h1>

        <form>
          <label>Enter mobile number or email</label>

          <input type="text" id="email" name="email" />

          <button type="button" onClick={homepage}>
            Continue
          </button>
        </form>

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
