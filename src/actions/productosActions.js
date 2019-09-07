import { MOSTRAR_PRODUCTOS, ELIMINAR_PRODUCTO, AGREGAR_PRODUCTO, MOSTRAR_PRODUCTO, EDITAR_PRODUCTO } from './types';

import axios from 'axios';

export const mostrarProductos = () => async dispatch => {
     const respuesta = await axios.get('http://127.0.0.1:8000/losHermanos/endpoint/api/Articulo');
     // const respuesta = await axios.get('https://rickywep.pythonanywhere.com/loshermanos/endpoint/api/Articulo.json');
     // const respuesta = await axios.get('http://localhost:5000/productos');
     dispatch({
          type: MOSTRAR_PRODUCTOS,
          payload: respuesta.data
     })
}
export const mostrarProducto = id => async dispatch => {
     const respuesta = await axios.get(`http://127.0.0.1:8000/losHermanos/endpoint/api/Articulo/id/${id}`);
     dispatch({
          type: MOSTRAR_PRODUCTO,
          payload: respuesta.data
     })
}

export const borrarProducto = id => async dispatch => {
     await axios.delete(`http://127.0.0.1:8000/losHermanos/endpoint/api/Articulo/${id}`);

     dispatch({
          type: ELIMINAR_PRODUCTO,
          payload: id
     })
}

export const agregarProducto = post => async dispatch => {
     // const respuesta = await axios.post('https://rickywep.pythonanywhere.com/loshermanos/endpoint/api/Articulo', post);
     // const respuesta = await axios.post('http://localhost:5000/productos', post);
     const respuesta = await axios.post('http://127.0.0.1:8000/losHermanos/endpoint/api/Articulo', post);
     dispatch({
          type: AGREGAR_PRODUCTO,
          payload: respuesta.data
     })
}
export const editarProducto = producto => async dispatch => {
     const respuesta = await axios.put(`http://127.0.0.1:8000/losHermanos/endpoint/api/Articulo/${producto.id}`, producto);
     dispatch({
          type: EDITAR_PRODUCTO,
          payload: respuesta.data
     })
}