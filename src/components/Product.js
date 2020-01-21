import React from "react";
import {Link} from "react-router-dom";
import Swal from 'sweetalert2';

// redux

import {useDispatch} from 'react-redux';
import {deleteProductAction} from '../actions/productActions';

function Product({ product }) {
  const { name, price, id } = product;

  const dispatch = useDispatch();

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

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>
        {" "}
        <span className="font-weight-bold">$ {price}</span>{" "}
      </td>
      <td className="acciones">
        <Link to={`/products/edit/${id}`} className="btn btn-primary mr-2">
          Editar
        </Link>
        <button type="button" className="btn btn-danger" onClick={() => deleteProd(id)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
}

export default Product;
