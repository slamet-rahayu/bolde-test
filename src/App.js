import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from '../src/view/pages/Home';
import productDetail from '../src/view/pages/productDetail';
import addProduct from '../src/view/pages/addProduct'

function App() {
  return (
   <Router>
     <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/product-detail" component={productDetail} />
       <Route path="/add-product" component={addProduct} />
     </Switch>
   </Router>
  );
}

export default App;
