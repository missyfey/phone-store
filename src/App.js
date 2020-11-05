import React from 'react'
import {Switch , Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Cart from './components/Cart/Cart'
import Detail from './components/Detail'
import ProductList from './components/ProductList'
import NotFound from './components/NotFound'
import Modal from './components/Modal'

export default function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route path='/' exact component={ProductList} />
      <Route path="/cart" component={Cart}/>
      <Route path='/detail' component={Detail} />
      <Route component={NotFound} />
    </Switch>
    <Modal />
    </>
  )
}
