import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand>
          <Link to="/" className="text-white link">
            Proyecto Programacion Web UTN-FRT - React, Redux, Web2py API &
            Axios
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
          <Link to="/" className="text-light mr-2">
            Productos
          </Link>
      </Navbar>
    );
  }
}

export default Header;
