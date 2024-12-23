import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import './App.css'

import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import LoadingSpinner from './Components/Layout/LoadingSpinner'
import Error from './Components/Layout/Error'
import CartPanel from './Components/Cart/CartPanel'
import Products from './Components/Product/Products'
import ProductPage from './Components/Product/ProductPage'

function App() {
  const [cart, setCart] = useState(false);
  const closeCart = () => setCart(false);
  const showCart = () => setCart(true);

  const [spinner, setSpinner] = useState(true);
  const [error, setError] = useState(null);

  const [items, setItems] = useState([]);
  const getData = () => {
    axios.get('http://localhost:3000/api/product')
    .then((response) => {setItems(response.data.products);})
    .catch((error) => {setError(error.message);})
    .finally(() => {setSpinner(false);});
  }
  useEffect(getData, []);
  
  return (
    <>
      <Header clickCart={showCart} />
      <Error error={error} />
      <LoadingSpinner spinner={spinner} />
      <CartPanel show={cart} close={closeCart} />
      <Routes>
        <Route path='/' element={<Products items={items} />} />
        <Route path='/product/:id' element={<ProductPage items={items} />} />
        <Route path='*' element={<Error error={'404 Page Introuvable'}/>} ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App