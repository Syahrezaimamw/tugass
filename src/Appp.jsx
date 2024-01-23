import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import Log from './Log';
import Eror from './Eror';
import Sec from './Sec';
import Login from './Login';
import About from './About';
import Home from './Home';
import DashB from './DashB';
import Datasource from './Datasource';
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
    <BrowserRouter basename='/tugass/'>
     <Routes >
        <Route exact path="/" element={<Log/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/sec" element={<Sec/>} />
        <Route exact path='/*' element={<Eror/>} />
        <Route exact path='/aboutUs' element={<About/>} />
        <Route exact path='/home/home:1' element={<Home/>} />
        <Route exact path='/dashboard' element={<DashB/>} />
        <Route exact path='/datasource' element={<Datasource/>} />
        </Routes>

      
    {/* </Router> */}
    {/* <RouterProvider route={router}/> */}
    </BrowserRouter>
    </div>
  )
}
