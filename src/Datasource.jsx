import React from 'react'
import Navbarmenu from './menu/Navbarmenu'
import Menu from './menu/Menu'
import { useRef } from 'react'
import './all2.css'
const Datasource = () => {
    const navbar=useRef(null)
    const menu=useRef(null)
    function klik(){
        menu.current.classList.toggle('menuuDom')
        console.log('hello')
      }
  return (
    <div className='containerDash'>
        <div className="menuu" ref={menu}>
        <Menu ds='ds'/> 
        </div>
        <div className="wrapperDash" >
        <Navbarmenu klik={klik}/>
        <div className="containerDataDash">
          <div className="wrapDataDash">
      
          </div>
        </div>
      </div>
        {/* <div className="menuu">
        {/* </div> */}
      
    </div>
  )
}

export default Datasource
