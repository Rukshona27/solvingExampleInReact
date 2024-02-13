//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Products from './components/Products';
import ProductList from './components/ProductList';

function App(){
  return <div>
    <Header/>
    <section>
      <h1>Наша продукция</h1>
      <Products/>
    </section>
  </div>
}
    

export default App;

