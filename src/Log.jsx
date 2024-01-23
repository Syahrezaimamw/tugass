import React from 'react'
import './app.css'
import { Link } from 'react-router-dom'
export default function Log() {
  return (
    <div>
      <div className="containerSlice">
        <div className="pemisah">
        <h2>Tampilan Login</h2>
        <Link to='/login'>klik to login</Link>
        
        </div>
        <div className="pemisah">
        <h2>Landing Page</h2>
        <Link to='/home'>Klik to home</Link>
        <br />
        <Link to='/aboutUs'>Klik to about</Link>
        <br />
        <Link to='/*'>klik to eror</Link>
        <div className="notes">
        <h5>Notes:</h5>
          <p>Pada Page Home bagian <span>Frequenly Asked Questions</span> memiliki state yang dapat berkerja</p>
        </div>
        </div>
        <div className="pemisah">
        <h2>Admin</h2>
        <Link to='/dashboard'>klik to Dash Board</Link>
        <br />
        <Link to='/datasource'>klik to Data Source</Link>
       
        <div className="notes">
          <h5>Notes:</h5>
          <p>1. Hamburger Bar dapat di gunakan</p>
          <p>2. Bagian <span>(...)</span> action pada Data Source dapat ditekan </p>
          <p>3. Button <span>Add User</span> pada Data Source dapat berkerja </p>
          <p>3. Button <span>Add User</span> pada Data Source dapat berkerja </p>
          <p>4. Blok pilih angka 1-10 dapat bergeser</p>
        </div>
        </div>
     
        <br />
      </div>
    </div>
  )
}
