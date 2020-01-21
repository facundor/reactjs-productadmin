import React from "react";
import {Link, useHistory} from "react-router-dom";
import Swal from 'sweetalert2';

// redux

import {useDispatch} from 'react-redux';
import {deleteProductAction, getEditProductAction} from '../actions/productActions';

function Product({ product }) {
  const { name, price, id } = product;

  const dispatch = useDispatch();
  // habilitar history para redireccion
  const history = useHistory();

  const deleteProd = (id) => {

    // preguntar al usuario
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        // pasarlo al action
        dispatch(deleteProductAction(id));
      }
    })
  }

  const editRedirect = (product) => {
    dispatch(getEditProductAction(product));
    history.push(`/products/edit/${product.id}`)
  } 

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>
        {" "}
        <span className="font-weight-bold">$ {price}</span>{" "}
      </td>
      <td className="acciones">
        <button type="button" onClick={() => editRedirect(product)} className="btn btn-primary mr-2">
          Editar
        </button>
        <button type="button" className="btn btn-danger" onClick={() => deleteProd(id)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
}

export default Product;
