import React from 'react'
import './all.css'
import Navbar from './navbar/Navbar'
import Button from './navbar/Button'
import kotak from '../src/image/Group 88.png'
import quote from '../src/image/quote.png'
import member1 from "../src/image/Member 2.png"
import member2 from "../src/image/Member 3.png"
import member3 from "../src/image/Member 2 (1).png"
import tokoh1 from '../src/image/Ellipse 175.png'
import tokoh2 from '../src/image/Ellipse 175 (1).png'
import Footer from './footer/Footer'
import tokoh3 from '../src/image/Ellipse 175 (2).png'
const About = () => {
    const visor = [
        {
            img: member1,

        },
        {
            img: member2,

        },
        {
            img: member3,

        }
    ]
    const politik = [
        {
            nama: 'Airlangga Hartanto',
            tokoh: tokoh1,
            desk: 'Mentri Kordinator Dan Perekonomian RI',
            vcal: `Saya minta kepada segenap pengurus DPD provinsi, kabuten dan kota,untuk kita harus  memiliki roadmap 2024.Di tahun melakukan Penggalangan opini masyarakat`
        },
        {
            nama: 'Jokowi Dodo',
            tokoh: tokoh2,
            desk: "Presiden RI",
            vcal: 'Daerah merupakan bagian pemerintahan yang langsung berinteraksi dengan '
        },
        {
            nama: 'Puan Maharani',
            tokoh: tokoh3,
            desk: 'Ketua DPR dan Fraksi PDI Perjuangan',
            vcal: 'Daerah merupakan bagian dari pemerintahan yang langsung berinterasi dengan masyarakat ketika proses demokratis berlangsung'
        }
    ]
    return (
        <div>
            <div className='containerAbout'>
                <Navbar about='about' />
                <div className="wrapperAbout">
                    <div className="textAbout">
                        <h1>About Us</h1>
                        <p>A small company offering data-driven solutions for campaign effectiveness Using  spatial data and  detailed analysis of target audience (voters). Use technology that unites spatial data science and political science</p>
                        <Button isi='Contact Us'></Button>
                    </div>
                </div>
            </div>
            <div className="quotes">
                <img className='kotak' src={kotak} alt="" />
                <div className="wrapperQuotes">
                    <img src={quote} alt="" />
                    <div className="tulis">
                        <p>
                            In just small steps you'll connected directly to our technology.
                            Knowledge about your own-power, your rivals, <br /> your voters, and your region Election.
                        </p>
                    </div>
                </div>
            </div>
            <div className="containerAdvisor">
                <div className="wrapperAdvisor">
                    <h1>Our Advisor</h1>
                    <div className='advisor'>
                        {visor.map((e, i) => (
                            <img key={i} src={e.img} alt="" />
                        ))}
                    </div>
                </div>
            </div>
            <div className="containerPolitical">
                <div className="wrapperPolitical">
                    <div className="ktrPolitical">
                        <h2>What Political Figure Say</h2>
                        <p>These are the stories figure who have joined us with great <br />
                            pleasure when using this crazy feature</p>
                    </div>
                    <div className="profilePolitik">
                        {politik.map((e, i) => (
                            <div key={i} className='isiPolitik'>
                                <div className="gambarPolitik">
                                    <img src={e.tokoh} alt="" />
                                    <div className="namaTokoh">
                                        <p className="nama">
                                            {e.nama}
                                        </p>
                                        <p className='desk'>{e.desk}</p>
                                    </div>
                                </div>
                                <div className="vcl">
                                    {e.vcal}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
           
            <Footer/>
        </div>
    )
}

export default About
