import logo from "../assets/logo.svg";
import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";
import Login from "../views/Login";

// este navbar es un componente sacado de react-bootstrap
const NavBar = item => {
  return (
    <Navbar
      className="Navigation"
      collapseOnSelect
      sticky="top"
      expand="lg"
      bg="dark"
      variant="dark"
      defaultactivekey="/home"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="" height="20" /> TeLoCambio
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Container>
              <Link className="Link" to="/login">
                <Login></Login>
              </Link>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
