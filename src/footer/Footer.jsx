import React from 'react'
import './footer.css'
import Button from '../navbar/Button'
import Logo from '../image/LogoF.png'
export default function Footer() {
  return (
    <>
     <div className="containerSubcribe">
                <div className="wrapperSubscribe">
                    <div className="isiTxS">

                        <div className="divtls">
                    <h2>Subscribe Now for <br />
                    Get Special Features!</h2>
                    <p>Let's subscribe with us and find the fun.</p>
                    </div>
                    <Button isi='Subscribe Now'/>
                    </div>
                </div>
            </div>
  
    <div className='containerFooter'>
      <div className="wrapperFooter">
        <div className="logoFooter">
          <div className="logoF">
            <img src={Logo} alt="" />
            <h4>GEOLABS</h4>
          </div>
          <div className="ktrGeo">
            <p> <span>Geolabs</span> is a private virtual network that has <br />
              unique features and has high security </p>
          </div>
          <div className="logoo">
            <div className="bulet blf">

            </div>
            <div className="bulet blt">


            </div>
            <div className="bulet blg">
            </div>

          </div>
          <div className="wmF">
            <p>&copy;2020 <span>EBDESK</span> </p>
          </div>
        </div>
        <div className="deskFooter">
          <div className="wrapperDesk">
          <div className="desk">
            <h3>Product</h3>
            <ul>
              <li>Download</li>
              <li>Princing</li>
              <li>Locations</li>
              <li>Server</li>
              <li>Countries</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="desk">
            <h3>Engage</h3>
            <ul>
              <li>Geolbs</li>
              <li>FAQ</li>
              <li>Turorials</li>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="desk">
            <h3>Earn Money</h3>
            <ul>
              <li>Affiliate</li>
              <li>Become Partner</li>
            </ul>
          </div>
          </div>
         </div>
      </div>
    </div>
    </>
  )
}
