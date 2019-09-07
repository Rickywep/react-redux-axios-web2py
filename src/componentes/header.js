import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


class Header extends Component {

     render() {
          return (
               <div className="navbar navbar-expand-lg navbar-light bg-success justify-content-between d-flex">
                    <h4>
                         <Link to={'/'} className="text-light">Programacion Web - React, Redux, Web2py API & Axios</Link>
                    </h4>

                    <Nav variant="tabs">
                         <Nav.Item>
                              <Nav.Link href="/" className="text-light">Productos</Nav.Link>
                         </Nav.Item>
                         <Nav.Item>
                                   {/* <Link to="/productos/nuevo" className="text-light">Agregar</Link> */}
                              <Nav.Link href="/productos/nuevo" className="text-light"> Agregar
                              </Nav.Link>
                         </Nav.Item>
                    </Nav>
               </div>
          );
     }
}

export default Header;