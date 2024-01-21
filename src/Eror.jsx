import React from 'react'
import Navbar from './navbar/Navbar'
import './all.css'
import notPage from '../src/image/404.png'
import Button from './navbar/Button'
export default function Eror() {
  return (
    <>
    <Navbar/>
    <div className='containerEror'>
      <div className="wrapperEror">
      <div className="pesanEror">
        <div className="textEror">
          <h2>Ooops!</h2>
          <h2>Page Not Found</h2>
          <p className='p1'>This page doesn't exist or was removed <br /> We suggest you back to home</p>
          <Button isi='Learn More'/>
        </div>
      </div>
      <div className="gambarEror">
        <div>
        <img src={notPage} alt="" />
        </div>
      </div>
      </div>
    </div>
    </>
  )
}
