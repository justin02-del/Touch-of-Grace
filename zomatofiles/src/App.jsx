import React, { useState } from 'react';
import { Navbar } from './components/Navbar/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import Loginpopup from './components/LoginPopUp/Loginpopup';
import MyOrders from './pages/myorders/MyOrders';
import Verify from './pages/verify/Verify'



const App = () => {
  const [showLogin, setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<Loginpopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/verify' element={< Verify/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
      </Routes>

    </div>
    <Footer/>
    </>
    
  )
}

export default App