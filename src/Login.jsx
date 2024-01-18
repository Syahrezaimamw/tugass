import React from 'react'
import './all.css'
export default function Login() {
    return (
        <div className='containerLogin'>
            <div className="logoLogin">
                <div className="logoIpsum">
                    <div className="wrapperLogoIpsum">

                        <img src="./images/Logo.png" alt="" style={{
                        width:110,
                    }} />
                    </div>
                </div>
                <div className="tengah">
                <div className="logoBulet">
                    <img src="./images/logoBulet.png" alt="" style={{
                        width:'75%',
                    }}/>
                </div>
                <div className="kotakService">
                    <div className="wrapperKotakService">
                        <div className="wrapperText">
                        <h3>Services</h3>
                        <p>An expert team you to analyze your polticalt power.An expert team</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="containerwm">
                <div className="wmLogin">
                    <p>&copy;2020 All rights Reserved, PT Indonesia Indicator</p>
                </div>
                </div>
            </div>
            <div className="menuLogin">
                <div className="tampilanLogin">
                    <div className="welcome">
                        <h2>Welcome to Logo ipsum</h2>
                        <p>Dont have account?<span>Sign Up</span></p>
                    </div>
                    <div className="formm">                    <form action="">
                        <label htmlFor="userName">Username <span>*</span></label><br />
                        <input className='inputOne'type="text" id='userName' name="userName" /><br />
                        <br />
                        <label htmlFor="password">Password <span>*</span></label><br />
                        <input className='inputOne' type="text" id='password' name="password" /><br /><br />
                        <div className="chek">                        <input className='inputTwo' type="checkbox" id='rememberme' name="rememberme"  value='remember'/>
                        <label className='rm' htmlFor="rememberme">Remember Me <span>*</span></label>
                        </div>

                       
                    </form>
                    </div>
                    <button>
                        Log in
                    </button>

                </div>
                
            </div>
        </div>
    )
}
