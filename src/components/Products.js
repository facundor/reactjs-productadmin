import React,{Fragment, useEffect} from 'react';

// Redux
import {useSelector, useDispatch} from 'react-redux';
import {getProductsActions} from '../actions/productActions';
import Product from './Product';

function Products(props) {

  const dispatch = useDispatch();

  useEffect(()=>{
    const loadProducts = () => dispatch(getProductsActions())
    const products = loadProducts();
  },[]);

  // Obtengo el state
  const productsInfo = useSelector( state => state.products);

  const productsArray = [...productsInfo.products]

  console.log(productsArray);

  return (
   <Fragment>
     <h2 className="text-center my-5">Product List</h2>
     <table className="table table-striped">
       <thead className="bg-primary table-dark">
         <tr>
           <th scope="col">Name</th>
           <th scope="col">Price</th>
           <th scope="col">Actions</th>
         </tr>
       </thead>
       <tbody>
         {productsArray.length === 0 ? 'No hay productos' : (
           productsArray.map(prod => ( 
            <Product key={prod.id} product={prod}/>)))}
       </tbody>
     </table>
   </Fragment>
  );
}

export default Products;