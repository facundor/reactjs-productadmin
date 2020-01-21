import React,{useState, useEffect} from 'react';

// Redux

import {useDispatch, useSelector} from 'react-redux'
import {editProductAction} from '../actions/productActions'
import {useHistory} from 'react-router-dom';

function EditProduct(props) {

  const dispatch = useDispatch();

  const history =  useHistory();

  const productedit = useSelector( state => state.products.editproduct)

  const [product, saveProduct] = useState({
    name: productedit.name,
    price: productedit.price,
    id: productedit.id
  });

  useEffect(()=>{
    saveProduct(product);
    
  },[product])

  const editProductSubmit = (e) => {
    e.preventDefault();
    dispatch(editProductAction(product));
    history.push('/');
  }

  const onChangeForm = (e) => {

    saveProduct({
      ...product,
      [e.target.name] : e.target.value
    })
  }
  
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Edit Product
            </h2>
            <form onSubmit={editProductSubmit}>
              <div className="form-group">
                <label>Product Name</label>
                <input type="text" className="form-control" placeholder="Product Name" name="name" value={product.name} onChange={onChangeForm}/>
              </div>
              <div className="form-group">
                <label>Product Price</label>
                <input type="number" className="form-control" placeholder="Product Price" name="price" value={product.price} onChange={onChangeForm}/>
              </div>

              <button type="submit" className="btn btn-primary font-weigth-bold text-uppercase d-block w-100">Save</button> 
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;