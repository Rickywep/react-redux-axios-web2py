import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

// Redux
import { connect } from "react-redux";
import { borrarProducto } from "../actions/productosActions";

class Producto extends Component {
  eliminarProducto = () => {
    const { id } = this.props.info;

    this.props.borrarProducto(id);
  };

  render() {
    const { id, nombre, precio } = this.props.info;
    return (
      <tr>
        <td>
          <p className="text-dark">{nombre}</p>
        </td>
        <td>
          <span className="badge badge-warning text-dark">$ {precio}</span>
        </td>
        <td >
          <Link to={`productos/editar/${id}`} className="btn btn-primary mr-2">
            Editar
          </Link>
          <Button onClick={this.eliminarProducto} variant="danger">
            Borrar
          </Button>
        </td>
        {/* <button onClick={this.eliminarProducto} type="button" className="btn btn-danger">Borrar</button> */}
      </tr>
    );
  }
}

export default connect(null, { borrarProducto })(Producto);
