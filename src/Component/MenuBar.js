import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import footerimg from "../Image/navimg.jpg"


// import logo from "../Image/tejajilogo.png";
//style={{backgroundImage: `url(${footerimg})`,width:"100%"}}




const MenuBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg"  variant="dark" bg="success" >
        <Container style={{ fontSize: 22, fontWeight: "bold",}}>
          <Navbar.Brand as={Link} to="/" style={{ fontWeight: "bold", fontSize: 17.5 }}>
            {/* <img src={logo} alt="logo" height={100} width={100}/> */}
             श्री वीर तेजाजी विकास समिति सांगलिया सीकर (राज.)</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%",color:'white'}}>
              <NavDropdown title="ट्रस्ट" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="samiti_Uddeshay">ट्रस्ट उद्देश्य</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item as={Link} to="samiti_Sadasay">ट्रस्ट सदस्य</NavDropdown.Item>

              </NavDropdown>

              <NavDropdown title="सहयोग" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="arthik_Sahyog">आर्थिक सहयोग / घोषणा</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="gaiArthik_Sahyog">गैर आर्थिक सहयोग / घोषणा</NavDropdown.Item>

              </NavDropdown>

              <Nav.Link as={Link} to="kharcha" >खर्चा</Nav.Link>
              <Nav.Link as={Link} to="gallary">गेलेरी</Nav.Link>
              <Nav.Link as={Link} to="about">हमारे बारे में </Nav.Link>

            </Nav>

          </Navbar.Collapse>
        
        </Container>
      </Navbar>
      
    </div>
  );
}
export default MenuBar;