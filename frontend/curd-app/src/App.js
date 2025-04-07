import React from 'react';

import ProductForm from './component/productform';

import ProductList from './component/productlist';

import './App.css'

function App() {


return (

<div>


<div className="container">

<div className="row mt-5">

<div className="col-md-6">{<ProductForm />}</div>

<div className="col-md-1"></div>

<div className="col-md-5"><ProductList /></div>

</div>

</div>

</div>

);

}

export default App;