import React, { Component } from 'react';
import Producto from './Producto';
import { Card } from 'react-bootstrap';


// Redux
import { connect } from 'react-redux';
import { mostrarProductos } from '../actions/productosActions';

class Productos extends Component {

     componentDidMount() {
          this.props.mostrarProductos();
     }

     render() { 
          const {productos} = this.props;
          console.log(this.props.productos);
          return ( 
               <React.Fragment>
                    <div className="row justify-content-center py-3">

                    <Card style={{ width: '80%' }}>
                         <Card.Header style={{ width: '100%', height: '30%'}}>
                         
                    {/* <h2 className="text-center my-5">Listado de Productos</h2> */}
                    <Card.Title className="text-center my-5"> <h2>Listado de Productos</h2></Card.Title>

                         </Card.Header>
                    <Card.Body>

                    <div className="row justify-content-center">
                         <div className="col-md-8">
                              <ul>
                                   {productos.map(producto => (
                                        <Producto
                                        key={producto.id}
                                        info={producto}
                                        />
                                        // console.log({producto.info}),
                                        ))}
                              </ul>
                         </div>
                    </div>
                                        </Card.Body>
                                        </Card>
                                        </div>
               </React.Fragment>
           );
     }
}
// state
const mapStateToProps = state => ({
     productos: state.productos.productos
})
 
export default connect(mapStateToProps, { mostrarProductos })(Productos);