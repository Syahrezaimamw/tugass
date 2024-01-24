import React from 'react'
import './navbar.css'
import Button from './Button'
import logo from '../image/Logo.png'
import logoP from '../image/Logo p.png'
import { Link } from 'react-router-dom'
export default function Navbar({about}) {
  return (
    <>
    {about=='about' ? <Putih/>:<Biru/>}
    </>
  )
}
function Biru (){
    return(
        <div className='containerNavbar'>
        <div className="wrapperNavbar">
             <img src={logo} alt="" style={{width:'9.8%'}}/>
           
            <div className="navTengah">
                <ul>
                    <li><span><Link to='/home'>Home</Link></span></li>
                    <li><Link>Product</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>Pricing</Link></li>
                    <li><Link>Contact</Link></li>
                    <li><Link to='/aboutUs'>About Us</Link></li>
                    
                </ul>
            </div>
            <div className="navAkhir">
                <h4>Sign In</h4>
                <Button isi='Sign Up'/>
            </div>
        </div>
    </div>
    )
}
function Putih(){
    return(
         <div className='containerNavbar'>
        <div className="wrapperNavbar">
        <img src={logoP} alt="" style={{width:'9.8%'}}/>
           
            <div className="navTengah">
                <ul className='putih'>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link>Product</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>Pricing</Link></li>
                    <li><Link>Contact</Link></li>
                    <li><span><Link to='/aboutUs'>About Us</Link></span></li>
                    
                </ul>
            </div>
            <div className="navAkhirP">
                <h4 >Sign In</h4>
                <Button isi='Sign Up'/>
            </div>
        </div>
    </div>
  )
}
