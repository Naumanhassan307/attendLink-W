
import "./FooterStyle.css";


import reslogo from "../../assets/res/reslogo.png"
function Footer(){
    return (
      <>
        <div className="footer-main-div">
          <div className="footer-main-div-1">
            <img src={reslogo} className="footer-main-div-1-img" />
            <p className="footer-main-div-1-img-txt">FoodLink</p>
          </div>
          <div className="footer-main-div-2">
            <p className="footer-main-div-2-txt footer-main-div-2-txt-1 ">
              HOME
            </p>
            <p className="footer-main-div-2-txt">MENU</p>
            <p className="footer-main-div-2-txt">ABOUT US</p>
            <p className="footer-main-div-2-txt">CONTACT US</p>
          </div>
        </div>
        <div className="footer-main-div-btm">© FoodLink 2021</div>
      </>
    );
}
export default Footer