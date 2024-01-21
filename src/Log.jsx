import React from 'react'
import { Link } from 'react-router-dom'
export default function Log() {
  return (
    <div>
        <Link to='/tugass/login'>klikk</Link>
        <br />
        <Link to='/tugass/*'>klikk</Link>
        <br />
        <Link to='/tugass/aboutUs'>aboutk</Link>
        <br />
        hai
        <Link to='/tugass/home/home:1'>home</Link>
    </div>
  )
}
