import React from 'react'
import './home.css'
import Navbar from './navbar/Navbar'
import home from '../src/image/home.png'
import mh1 from '../src/image/hm1.png'
import mh2 from '../src/image/hm2.png'
import mh3 from '../src/image/hm.png'
import Button from './navbar/Button'
import ktkpre21 from '../src/image/ktkpre21.png'
import ktkpre31 from '../src/image/ktkpre31.png'
import pre4 from '../src/image/pre24.png'
import bb from '../src/image/element.png'
import back1 from "../src/image/pre21.png"
import rafiki1 from '../src/image/rafiki.png'
import rafiki2 from '../src/image/rafiki2.png'
import rafiki3 from '../src/image/rafiki3.png'
import rafiki4 from '../src/image/rafiki4.png'
import hadiah from '../src/image/hadiah.png'
import ceklis from '../src/image/ceklis.png'
import pre113 from '../src/image/pre32.png'
import Free from './freequenly/Free'
import Footer from './footer/Footer'
export default function Home() {
    const chouse = [
        {
            img: mh1,
            judul: 'Data',
            ds: 'The biggest regional data, development,and POI data.'
        }, {
            img: mh3,
            judul: 'Technology',
            ds: 'Geospatial platform with advanced analysis that suit your neetds.'
        }, {
            img: mh2,
            judul: 'Service',
            ds: 'An expert team help you to analyze your poltical power'
        }
    ]
    return (
        <>
            <div className='containerHome'>
                <Navbar />
                <div className="wrapperHome1">
                    <div className="wrapHome">
                        <div className="textHome">
                            <div>
                                <h1> Observer Your <br />
                                    <span>Power</span>
                                </h1>
                                <p>Trafalgar provides progressive, and affordable healthcare, accessible on <br />mobile and online for everyone</p>
                                <Button isi="See a Demo" />
                            </div>

                        </div>
                        <div className="gambarHome">
                            <img src={home} style={{
                                width: '100%'
                            }} alt="" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="Chouse">
                <div className="txtChouse">
                    <h2>Why chouse us?</h2>
                    <p>We provide to you the best choiches for you. The leading <br />
                        Political campaign intelligenced platform</p>
                </div>
                <div className="kotakChouse">
                    {chouse.map((e, i) => (
                        <div key={i} className='dataKotak'>
                            <div className='st'>
                                <img src={e.img} alt="" />
                            </div>
                            <p className='judull'>{e.judul}</p>
                            <p className='isiCh'>{e.ds}</p>
                        </div>
                    ))}
                </div>
                <Button isi="Learn More" />
            </div>
            <div className="containerOverview">
                <img src={bb} alt="" className='imgElement' />
                <div className="wrapperOverview">
                    <div className='groyp1'>
                        <div className="pre1">
                            <div className="pre2 tg">
                                <div className="gambarPre">
                                    <img src={back1} alt="" className='back1' />
                                    <img src={ktkpre21} alt="" className='obj1' />
                                </div>
                            </div>
                            <div className="pre3 pd">
                                <div className="textOverview">

                                    <h2>App Overview 2</h2>
                                    <p>Amet minim mallit non deserunt ullamco est sit aliqua dolor
                                        <br />do amet slint. Velit officia consequat duis enim velit molit. <br />
                                        Exercitation veniam consequat sunt nastrud amet
                                    </p>
                                    <Button isi="Learn More" />
                                </div>

                            </div>

                        </div>
                        <div className="pre11">
                            <div className="pre2 pd">
                                <div className="textOverview">

                                    <h2>App Overview 1</h2>
                                    <p>Advanced spotial analysis to understand where and why <br />
                                        things happen,identity the target consttituency, and optimize <br />the campaign </p>
                                    <Button isi="Learn More" />
                                </div>
                            </div>
                            <div className="pre3 tg">
                                <img src={ktkpre31} alt="" />
                            </div>

                        </div>
                    </div>
                    <div className="pre13">

                        <div className="pre4 ">
                            <img src={pre4} alt="" />
                        </div>
                        <div className="pre42 ">
                            <div className="textOverview">

                                <h2>App Overview 3</h2>
                                <p>Advanced spotial analysis to understand where and why <br />
                                    things happen,identity the target consttituency, and optimize <br />the campaign </p>
                                <Button isi="Learn More" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="works">
                <div className="wrpapperWorks">
                    <div className="textWorks">
                        <h2>How it workd for you?</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet odit ea tempore animi ex cumque sit minima dolores perferendis.mollitia suscipit similique laudantium?</p>
                        <Button isi="See a Demo" />
                    </div>
                    <div className="gambarWorks">
                        <div className="isiGm">
                            <div className="gmGambar">
                                <img src={rafiki1} alt="" />
                            </div>
                            <div className="textGmWorks">
                                <h3>Geographic Segmentation</h3>
                                <p>Consist of creating differend groups of  <br />customers based on ghographic <br />boundaries </p>
                            </div>
                        </div>
                        <div className="isiGm">
                            <div className="gmGambar">
                                <img src={rafiki2} alt="" />
                            </div>

                            <div className="textGmWorks">
                                <h3> Demographic Segmentation   </h3>
                                <p>Consist of dividing the market through different variables such as age, gender, income, etc </p>
                            </div>
                        </div>
                        <div className="isiGm">
                            <div className="gmGambar">
                                <img src={rafiki3} alt="" />

                            </div>
                            <div className="textGmWorks">
                                <h3> Psychograpich Segmentation</h3>
                                <p>Consist of creating differend groups of
                                    customers based on geographic
                                    boundaries</p>
                            </div>
                        </div>
                        <div className="isiGm">
                            <div className="gmGambar">
                                <img src={rafiki4} alt="" />
                            </div>
                            <div className="textGmWorks">
                                <h3>Behavorial Segmentation</h3>
                                <p>Consist of creating differend groups of
                                    customers based on geographic
                                    boundaries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>\
            <div className="containerPlans">
                <div className="wrapperPlans">
                    <div className="deskPlans">
                        <h2>Plans and Pricing</h2>
                        <p>We provide to you the best choiches for you. The leading <br />
                            political campaign intelligence platform</p>
                    </div>
                    <div className="gambarPlans">
                        <div className="plansSell">
                            <div className="wrapPLansSel">

                                <div className="satuPlans">
                                    <div className="gambarHadiah">
                                        <img src={hadiah} alt="" style={{ width: '120px' }} />
                                    </div>
                                    <h5>Individual Plan</h5>
                                    <ul>
                                        <li> <img src={ceklis} alt="" />1 User</li>
                                        <li><img src={ceklis} alt="" />1 Basic Analysis</li>
                                        <li><img src={ceklis} alt="" />Unlimited Select Services</li>
                                    </ul>
                                </div>
                                <div className="duaPlans">
                                    <h3>$99 <span>/ mo </span> </h3>
                                    <Button isi="Select" />
                                </div>
                            </div>
                        </div>
                        <div className="plansSell">
                            <div className="wrapPLansSel">

                                <div className="satuPlans">
                                    <div className="gambarHadiah">
                                        <img src={hadiah} alt="" style={{ width: '120px' }} />
                                    </div>
                                    <h5>Parties Plan</h5>
                                    <ul>
                                        <li> <img src={ceklis} alt="" />Unlimited User</li>
                                        <li><img src={ceklis} alt="" />Basic Analysis</li>
                                        <li><img src={ceklis} alt="" />Unlimited Select Services</li>
                                        <li><img src={ceklis} alt="" />Free extend 1 Month</li>
                                    </ul>
                                </div>
                                <div className="duaPlans">
                                    <h3>$500<span>/ mo </span> </h3>
                                    <Button isi="Select" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Free />
            <Footer />
        </>
    )
}
