import "./HeaderStyle.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";


import reslogo from "../../assets/res/reslogo.png"

import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";

function MidHeader() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="header-mani-div">
        <Container>
          <Navbar.Brand href="#home">
            <img src={reslogo} className="header-logo" />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp;
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">HOME</Nav.Link>
              &nbsp; &nbsp;
              <Nav.Link href="#pricing">MENU</Nav.Link>
              &nbsp; &nbsp;
              <Nav.Link href="#pricing">ABOUT</Nav.Link>
              &nbsp; &nbsp;
              <Nav.Link href="#pricing">CONTACT</Nav.Link>
              &nbsp; &nbsp;
            </Nav>
            <Nav>
              <Nav.Link href="#deets"></Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <div className="header-mani-div-right">
                  <div className="header-mani-div-right-1">
                    <AiOutlineSearch
                      size={30}
                      className="header-mani-div-icon"
                    />
                  </div>
                  <div className="header-mani-div-right-1">
                    <BiUser size={30} className="header-mani-div-icon" />
                  </div>
                  <div className="header-mani-div-right-1">
                    <AiOutlineHeart
                      size={30}
                      className="header-mani-div-icon"
                    />
                  </div>
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
