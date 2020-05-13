import React, { Component } from "react";
import { Link } from "react-router-dom";

import Producto from "./Producto";
import { Container, Table } from "react-bootstrap";
// Redux
import { connect } from "react-redux";
import { mostrarProductos } from "../actions/productosActions";

class Productos extends Component {
  componentDidMount() {
    this.props.mostrarProductos();
  }

  render() {
    const { productos } = this.props;
    return (
      <Container className="mt-5 bg-white">
        <div className="float-right absolute">
          <Link to={`productos/nuevo`} className="btn btn-success mt-2">
            Agregar
          </Link>
        </div>
        <h2 className="text-center p-2 mb-3">Listado de Productos</h2>
        <Table responsive>
          <thead className="thead-dark">
            <tr>
              <th className="w-25">Nombre</th>
              <th className="w-25">Precio</th>
              <th className="w-25 ">Aciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <Producto key={producto.id} info={producto} />
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}
// state
const mapStateToProps = (state) => ({
  productos: state.productos.productos,
});

export default connect(mapStateToProps, { mostrarProductos })(Productos);
