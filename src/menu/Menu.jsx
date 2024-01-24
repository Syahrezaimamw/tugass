import React from 'react'
import log from '../image/LogoM.png'
import { FaGaugeSimpleHigh } from "react-icons/fa6";
import { FaClover } from "react-icons/fa6";
import { FaBoxArchive } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa6";
import { FaServer } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa6";
import { FaGetPocket } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import './menu.css'
const Menu = ({ds}) => {
    return (
        <div className='containerMenu'>
            <div className="wrapperMenu">
                <div className="logoMenu">
                    <img src={log} alt="" style={{ width: '64%' }} />
                </div>
                <div className="dataMenu">
                    <div className="dashboard">
                    <ul>
                        {ds=='ds'?  <li ><i>< FaGaugeSimpleHigh /></i> <Link to='/dashboard'> Dashboard</Link></li>: <li className='putihh'><i>< FaGaugeSimpleHigh /></i> <Link to='/dashboard'> Dashboard</Link></li>}
                       
                    </ul>
                    </div>
                    <div className="data">
                        <p>DATA</p>
                    <ul>
                        <li>
                            <i>< FaClover /></i>
                            <Link>Visualization</Link>
                        </li>
                        <li>
                            <i>< FaBoxArchive /></i>
                            <Link>Case</Link>
                        </li>
                        <li>
                            <i>< FaServer /></i>
                            <Link>Data Set</Link>
                        </li>
                        {ds=='ds'?<li className='putihh'><i>< FaDatabase /></i><Link to='/datasource'>Data Sourcee</Link></li>:<li><i>< FaDatabase /></i><Link to='/datasource'>Data Source</Link></li> }
                        <li>
                            <i>< FaWifi /></i>
                            <Link>Conection</Link>
                        </li>
                    </ul>
                    </div>
                    <div className="data">
                        <p>ASSET</p>
                    <ul>
                        <li>
                            <i>< FaFigma /></i>
                            <Link>Icon</Link>
                        </li>
                        <li>
                            <i>< FaImage /></i>
                            <Link>Image</Link>
                        </li>
                       
                    </ul>
                    </div>
                    <div className="data">
                        <p>AUTHORIZATION</p>
                    <ul>
                        <li>
                            <i>< FaRegUser /></i>
                            <Link>Account</Link>
                        </li>
                        <li>
                            <i>< FaGetPocket /></i>
                            <Link>Role</Link>
                        </li>
                        <li>
                            <i>< FaServer /></i>
                            <Link>Workspace</Link>
                        </li>
                    </ul>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}

export default Menu
