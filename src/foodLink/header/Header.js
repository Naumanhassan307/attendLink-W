import "./HeaderStyle.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";


import reslogo from "../../assets/res/reslogo.png"

import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";


import {Link} from "react-router-dom"

function MidHeader() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="header-mani-div">
        <Container>
          <Link exact to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand>
              <img src={reslogo} className="header-logo" />
              &nbsp; &nbsp;
              <p className="header-logo-txt">FoodLink</p>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="onHover">HOME</Nav.Link>
              &nbsp; &nbsp;
              <Nav.Link className="onHover">MENU</Nav.Link>
              &nbsp; &nbsp;
              <Nav.Link className="onHover">ABOUT</Nav.Link>
              &nbsp; &nbsp;
              <Nav.Link className="onHover">CONTACT</Nav.Link>
              &nbsp; &nbsp;
            </Nav>
            <Nav>
              <Nav.Link></Nav.Link>
              <Nav.Link eventKey={2}>
                <div className="header-mani-div-right">
                  {/* <div className="header-mani-div-right-1 onHover">
                    <AiOutlineSearch
                      size={30}
                      className="header-mani-div-icon"
                    />
                  </div> */}
                  <Link
                    exact
                    to="/auth/login"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="header-mani-div-right-1 onHover">
                      <BiUser size={30} className="header-mani-div-icon" />
                    </div>
                  </Link>
                  <Link
                    exact
                    to="/addRestaurent"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="header-mani-div-right-1 onHover">
                      <AiOutlineShoppingCart size={30} className="icon-p" />
                    </div>
                  </Link>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default MidHeader;
