import React from 'react'
import './button.css'
import { Link } from 'react-router-dom'
export default function Button({isi}) {
  return (
    <>
    <Link to="">
    <button className='butonRl'>{isi}</button>
    </Link>   
    </>
  )
}
