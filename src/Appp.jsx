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
        <Route exact path="/tugass/" element={<Log/>} />
        <Route exact path="/tugass/login" element={<Login/>} />
        <Route exact path="/tugass/sec" element={<Sec/>} />
        <Route exact path='/tugass/*' element={<Eror/>} />
        <Route exact path='/tugass/aboutUs' element={<About/>} />
        <Route exact path='/tugass/home/home:1' element={<Home/>} />
        <Route exact path='/tugass/dashboard' element={<DashB/>} />
        <Route exact path='/tugass/datasource' element={<Datasource/>} />
        </Routes>

      
    {/* </Router> */}
    {/* <RouterProvider route={router}/> */}
    </BrowserRouter>
    </div>
  )
}
