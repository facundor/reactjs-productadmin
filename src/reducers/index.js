import {combineReducers} from 'redux';
import producsReducer from './productsReducer';


export default combineReducers({
  products: producsReducer
});