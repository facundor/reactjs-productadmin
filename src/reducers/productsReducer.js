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
  GET_EDIT_PRODUCT,
  EDIT_PRODUCT,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR
} from "../types";

// cada reducer tiene su propio state

const initialState = {
  products: [],
  error: null,
  loading: false,
  deleteproduct: null,
  editproduct: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        loading: true
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload]
      };
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case GET_PRODUCT:
      return {
        ...state,
        loading: true
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        products: action.payload
      };
    case GET_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        deleteproduct: action.payload
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter(
          prod => prod.id !== state.deleteproduct
        ),
        deleteproduct: null
      };
    case DELETE_PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
        deleteproduct: null
      };
    case GET_EDIT_PRODUCT:
      return {
        ...state,
        editproduct: action.payload
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        editproduct: action.payload
      };

    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        editproduct: null,
        products: state.products.map( 
          prod => prod.id === action.payload.id ? prod = action.payload : prod
        )
      };

    case EDIT_PRODUCT_ERROR:
      return {
        ...state,
        editproduct: null,
        error: action.payload
      };
    default:
      return state;
  }
}
