import { 
  ADD_PRODUCT, 
  ADD_PRODUCT_ERROR, 
  ADD_PRODUCT_SUCCESS, 
  GET_PRODUCT, 
  GET_PRODUCT_SUCCESS, 
  GET_PRODUCT_ERROR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  EDIT_PRODUCT,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
  GET_EDIT_PRODUCT,
} from "../types";
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";
import axiosClient from "../config/axios";


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

// Elimina producto

export function deleteProductAction(id){
  return async (dispatch) => {
    dispatch(deleteProduct(id));
    try {
      await axiosClient.delete(`/products/${id}` ) 
      dispatch(deleteProductSuccess());
      // mostrar msg
      Swal.fire(
        'Deleted!',
        'Your product has been deleted.',
        'success'
      )
    } catch (error) {
      dispatch(deleteProductError()); 
    }
  }
}

const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id
});

const deleteProductSuccess = (id) => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: id
});

const deleteProductError = () => ({
  type: DELETE_PRODUCT_ERROR,
  payload: true
});

export function getEditProductAction (product){
  return async (dispatch) => {
    dispatch(getEditProduct(product))
  }
}

const getEditProduct = (product) => ({
  type: GET_EDIT_PRODUCT,
  payload: product
});

// Elimina producto

export function editProductAction(product){
  return async (dispatch) => {
    console.log("comienzo edicion")
    dispatch(editProduct());
    try {
      console.log(product)
      await axiosClient.put(`/products/${product.id}` , product) ;
      dispatch(editProductSuccess(product));
    } catch (error) {
      dispatch(editProductError()); 
    }
  }
}

const editProduct = () => ({
  type: EDIT_PRODUCT
});

const editProductSuccess = (product) => ({
  type: EDIT_PRODUCT_SUCCESS,
  payload: product
});

const editProductError = () => ({
  type: EDIT_PRODUCT_ERROR,
  payload: true
});