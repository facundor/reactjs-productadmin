import React from "react";
import {Link} from "react-router-dom"

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1><Link to={'/'} className="text-light">CRUD - React, Redux, Rest API</Link></h1>
      </div>

      <Link to={'/products/new'} className="btn btn-danger nuevo-post d-block d-md-inline-block">New Product &#43;</Link>
    </nav>
  );
}

export default Header;
