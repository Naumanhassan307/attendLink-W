import "./ResLoginStyle.css";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import Line from "../line/Line";
function ResLogin() {
  return (
    <div>
      <Header />
      <hr />
      <div className="signup-maindiv">
        <p className="signup-maindiv-signup">LOGIN </p>

        <input
          type="email"
          placeholder="Enter E-mail"
          className="login-main-div-1-inp"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="login-main-div-1-inp"
        />
        <p className="signup-maindiv-signup-forgot">Forgot Password?</p>
        <button className="login-main-div-1-inp-btn-login">LOGIN</button>
      </div>

      <Line />
      <Footer />
    </div>
  );
}
export default ResLogin;
