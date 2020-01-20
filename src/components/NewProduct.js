import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {createNewProductAction} from "../actions/productActions"

//Actions de redux

function NewProduct({history}) {

  // state
 const [name, setName] = useState(''); 
 const [price, setPrice] = useState('');

  // utilizar use dispatch y te crea una funcion
  const dispatch = useDispatch();

  // acceder al state del store
  const loading = useSelector((state)=> {
    return state.products.loading;
  })

  const error = useSelector((state)=> {
    return state.products.error;
  })

  const newProduct = (product) => dispatch(createNewProductAction(product));

  const submitNewProduct = (e) => {
    e.preventDefault();

    if(name.trim() === '' || price === '') return;

    console.log("submitNewProduct")

    // validar form

    // si no hay errores, crear nuevo producto
    newProduct({
      name,
      price
    });

     // redirect
    history.push('/')

  }
 

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Add New Product
            </h2>
            <form onSubmit={submitNewProduct}>
              <div className="form-group">
                <label>Product Name</label>
                <input type="text" className="form-control" placeholder="Product Name" name="name" onChange={e => setName(e.target.value)}/>
              </div>
              <div className="form-group">
                <label>Product Price</label>
                <input type="number" className="form-control" placeholder="Product Price" name="price" onChange={e => setPrice(e.target.value)}/>
              </div>

              <button type="submit" className="btn btn-primary font-weigth-bold text-uppercase d-block w-100">Add</button> 
            </form>

            {loading ? <p>Cargando...</p>: null}
            {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p>: null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;
