import { combineReducers } from 'redux';
import productosReducer from './productosReducers';

export default combineReducers({
     productos: productosReducer
});