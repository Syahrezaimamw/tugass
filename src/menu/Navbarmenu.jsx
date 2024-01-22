import React from 'react'
import { FaAlignLeft } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa6";
import { useState, useRef } from 'react';
import { FaRegMoon } from 'react-icons/fa6';
import { FaAngleDown } from 'react-icons/fa6';
import user from '../image/PhotoProfil.png'
import './menu.css'
const Navbarmenu =(props) => {
  const { klik } = props

  const [satu, setSatu] = useState(<FaAlignLeft />)
  const [kondisi, setkondisi] = useState(true)
  function lef() {
    if (kondisi == true) {
      setSatu(<FaAlignJustify />)
      setkondisi(false)
    } else if (kondisi == false) {
      setSatu(<FaAlignLeft />)
      setkondisi(true)
    }
    klik()
  }
  return (
    <div className='containerNavbarMenu'>
      <div className="wrapperNavbarMenu">
        <div className="menuBar">
          <i onClick={lef}>

            {satu}
          </i>
        </div>
        <div className="menuUser">
          <i className='moon'>
            <FaRegMoon />
          </i>
          <div className="ktrUSer">
            <img src={user} alt="" />
            <p>User.Inc</p>
            <i><FaAngleDown /></i>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Navbarmenu