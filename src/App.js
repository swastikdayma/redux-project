import React from 'react'
import Navbar from './components/Navbar';
import  Products  from './components/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Cart  from './components/Cart';
import { SingleProduct } from './components/SingleProduct';

 const App = () => {
 


  return (
   <>


   <BrowserRouter>
   <Navbar/>
    <Routes>
     <Route path='/products' element={<Products/>} />
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/singleprod/:id' element={<SingleProduct/>}/>
   <Route path="/cart" element={<Cart/>}/>
    </Routes>

  
 
   </BrowserRouter>
  

   
   </>
  )
}

export default App;
