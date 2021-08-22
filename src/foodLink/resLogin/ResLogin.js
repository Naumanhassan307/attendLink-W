import "./ResLoginStyle.css";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import Line from "../line/Line";
import UseSignIn from "./UseResLogin";
function ResLogin() {
  const [
    
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    ctaSignInHandler,
  ] = UseSignIn()
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
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
          value={userEmail}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="login-main-div-1-inp"
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
          value={userPassword}
        />
        <p className="signup-maindiv-signup-forgot">Forgot Password?</p>
        <button className="login-main-div-1-inp-btn-login" onClick={ctaSignInHandler}>LOGIN</button>
      </div>

      <Line />
      <Footer />
    </div>
  );
}
export default ResLogin;
