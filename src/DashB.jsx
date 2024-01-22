import React from 'react'
import Menu from './menu/Menu'
import './all2.css'
import Navbarmenu from './menu/Navbarmenu'
import { FaHouse } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaArrowRightToBracket } from "react-icons/fa6";
import jmlhPenduduk from'../src/image/jmlhPendudukk.png'
import airbersih from'../src/image/airbersihh.png'
import kkdusun from'../src/image/kkbru.png'
import pendudukdusun from'../src/image/pendudukdusun.png'
import penddkdusun from'../src/image/pndudukkdsnn.png'
import prasarana from'../src/image/prasarana.png'
import genderPenduduk from'../src/image/genderPendudukk.png'
import { useRef } from 'react'
const DashB = () => {
  const navbar = useRef(null)
  const menu = useRef(null)
  function klik() {
    menu.current.classList.toggle('menuuDom')
    console.log('hello')
  }

  return (
    <div className='containerDash'>
      <div className="menuu" ref={menu}>
        <Menu />

      </div>
      <div className="wrapperDash" >
        <Navbarmenu klik={klik} />
        <div className="containerDataDash">
          <div className="wrapDataDash">
            <div className="statik">
              <div className="house">
                <i className='bold'> <FaHouse /></i>
                <i><FaAngleRight /></i>
                <p className='bold'>Statistik</p>
                <i><FaAngleRight /></i>
                <p>Wilayah</p>
              </div>
              <div className="signOut">
                <div className="profill">
                  <i><FaRegCircleUser /></i>
                  <p>Profile</p>
                </div>
                <div className="signoutt">
                  <i><FaArrowRightToBracket /></i>
                  <p>Sign Out</p>

                </div>
              </div>
            </div>
              <div className="wrapperGambarrDash">
                <div className="parentGambar parent1">
                  <img src={jmlhPenduduk} alt="" />
                  <img src={airbersih} alt="" />
                </div>
                <div className="parentGambar parent2">
                  <img src={penddkdusun} alt="" className='baru'/>
                  <img src={pendudukdusun} alt=""  className='baru'/>
                  <img src={kkdusun} alt="" />
                </div>
                <div className="parentGambar parent3">
                  <img src={prasarana} alt="" className='pndk baru' />

                  <img src={genderPenduduk} alt="" className='pnjng' />

                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashB
