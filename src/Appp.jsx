import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import Log from './Log';
import Eror from './Eror';
import Sec from './Sec';
import Login from './Login';
import About from './About';
import Home from './Home';
export default function Appp() {
const router=createBrowserRouter([
  {
    path:'/',
    // Element:<Log/>,
    errorElement:<Eror/>
  }
])
  return (
    <div>
    <BrowserRouter>
    {/* <Router> */}
     <Routes >
        <Route exact path="/tugass" element={<Log/>} />
        <Route exact path="/tugass/login" element={<Login/>} />
        <Route exact path="/tugass/sec" element={<Sec/>} />
        <Route exact path='/tugass/*' element={<Eror/>} />
        <Route exact path='/tugass/aboutUs' element={<About/>} />
        <Route exact path='/tugass/home' element={<Home/>} />
        </Routes>

      
    {/* </Router> */}
    {/* <RouterProvider route={router}/> */}
    </BrowserRouter>
    </div>
  )
}
