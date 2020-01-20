import { ADD_PRODUCT, ADD_PRODUCT_ERROR, ADD_PRODUCT_SUCCESS, GET_PRODUCT, GET_PRODUCT_SUCCESS, GET_PRODUCT_ERROR } from "../types";
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";


// create new product
export function createNewProductAction(product) {
  return async dispatch => {
    dispatch(addProduct());

    try {
      // Insertar en la api
      await clienteAxios.post("/products", product);
      // actualizar el state success
      dispatch(addProductSuccess(product));
      // alerta success
      Swal.fire("Success", "The product was successfuly added", "success");
    } catch (error) {
      //cambio a state error
      dispatch(addProductError(true));
      // alerta de error
      Swal.fire("Error", "An unxpected error occurred", "error");
    }
  };
}

const addProduct = () => ({
  type: ADD_PRODUCT
});

const addProductSuccess = product => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product
});

const addProductError = state => ({
  type: ADD_PRODUCT_ERROR,
  payload: state
});

// get products
export function getProductsActions(){
  return async(dispatch) => {
    dispatch(getProducts());

    try {
      // Insertar en la api
      const products = await clienteAxios.get("/products");
      // actualizar el state success
      dispatch(getProductsSuccess(products.data));
    } catch (error) {
      //cambio a state error
      dispatch(getProductError(true));
    }

  }
}

const getProducts = () => ({
  type: GET_PRODUCT,
  payload: true
})

const getProductsSuccess = (state) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: state
})

const getProductError = state => ({
  type: GET_PRODUCT_ERROR,
  payload: state
});