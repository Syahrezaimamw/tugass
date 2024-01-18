import React from 'react';
import ReactDOM from 'react-dom/client';
import Log from './Log';
import Eror from './Eror';
import Appp from './Appp';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

// const router=createBrowserRouter([{

// },
//   {
//     path:'/',
//     Element:<Appp/>,
//     // errorElement:<Eror/>
//   },{
//     path:'/login',
//     element:<Log/>
//   }
// ])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Appp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

