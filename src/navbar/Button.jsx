import React from 'react'
import './button.css'
import { Link } from 'react-router-dom'
export default function Button({isi}) {
    // const {isi}=props
  return (
    <>
    <Link to="/tugass/login">
    <button className='butonRl'>{isi}</button>
    </Link>   
    </>
  )
}
