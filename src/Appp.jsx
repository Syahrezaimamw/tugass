import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import Log from './Log';
import Eror from './Eror';
import Sec from './Sec';
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
    <BrowserRouter basename='/interview'>
    {/* <Router> */}
     <Routes >
        <Route exact path="/interview" element={<Log/>} />
        <Route exact path="/about" element={<Log/>} />
        <Route exact path="/sec" element={<Sec/>} />
        <Route exact path='/*' element={<Eror/>} />
        </Routes>

      
    {/* </Router> */}
    {/* <RouterProvider route={router}/> */}
    </BrowserRouter>
    </div>
  )
}
