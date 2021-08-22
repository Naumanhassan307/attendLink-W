import "./SignUpStyle.css";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import Line from "../line/Line";
import UseSignUp from "./UseSignUp";
function ResSignUp() {
  const [
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    userPhone,
    setUserPhone,
    userCountry,
    setUserCountry,
    userCity,
    setUserCity,
    userPassword,
    setUserPassword,
    ctaSignupHandler,
  ] = UseSignUp();
  return (
    <div>
      <Header />
      <hr />
      <div className="signup-maindiv">
        <p className="signup-maindiv-signup">SIGNUP</p>
        <input
          type="txt"
          placeholder="Enter User Name"
          className="login-main-div-1-inp"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          value={userName}
        />
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
          type="number"
          placeholder="Enter Phone"
          className="login-main-div-1-inp"
          onChange={(e) => {
            setUserPhone(e.target.value);
          }}
          value={userPhone}
        />
        <select
          id="country"
          name="country"
          className="login-main-div-1-inp"
          onChange={(e) => {
            setUserCountry(e.target.value);
          }}
          value={userCountry}
        >
          <option value="" disabled selected>
            Select The Country
          </option>
          <option value="Afganistan">Afghanistan</option>
          <option value="Albania">Albania</option>
          <option value="Algeria">Algeria</option>
          <option value="American Samoa">American Samoa</option>
          <option value="Oman">Oman</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Palau Island">Palau Island</option>
          <option value="Palestine">Palestine</option>
          <option value="Zimbabwe">Zimbabwe</option>
        </select>

        <select
          name="Location"
          id="Location"
          required
          className="login-main-div-1-inp"
          onChange={(e) => {
            setUserCity(e.target.value);
          }}
          value={userCity}
        >
          <option value="" disabled selected>
            Select The City
          </option>
          <option value="Islamabad">Islamabad</option>
          <option value="" disabled>
            Punjab Cities
          </option>
          <option value="Ahmed Nager Chatha">Ahmed Nager Chatha</option>
          <option value="Ahmadpur East">Ahmadpur East</option>
          <option value="Ali Khan Abad">Ali Khan Abad</option>
          <option value="Alipur">Alipur</option>
          <option value="Arifwala">Arifwala</option>
          <option value="Attock">Attock</option>
          <option value="Bhera">Bhera</option>
          <option value="Bhalwal">Bhalwal</option>
          <option value="Bahawalnagar">Bahawalnagar</option>
          <option value="Bahawalpur">Bahawalpur</option>
          <option value="Bhakkar">Bhakkar</option>
          <option value="Burewala">Burewala</option>
        </select>
        <input
          type="password"
          placeholder="Enter Password"
          className="login-main-div-1-inp"
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
          value={userPassword}
        />
        <button className="login-main-div-1-inp-btn-login" onClick={ctaSignupHandler}>
          CREATE AN ACCOUNT
        </button>
      </div>

      <Line />
      <Footer />
    </div>
  );
}
export default ResSignUp;
