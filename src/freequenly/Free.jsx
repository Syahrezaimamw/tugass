import React from 'react'
import './free.css'
import { useState, useRef,useEffect } from 'react'
import Button from '../navbar/Button'
export default function Free() {
    const klik = useRef(null)
    const deskripsi=useRef(null)
    const tulisan=useRef(null)
    const warna=useRef(null)
    const [ubah,setUbah]=useState(true)
    const [nilai,setNilai]=useState("-")

    useEffect(()=>{
        deskripsi.current.classList.add('dataQuesDom')
        warna.current.classList.add('warnaDom')
        klik.current.classList.add('klikDom')
        tulisan.current.classList.add('tulisanDom')
    },[])
        function handlePanjang(e) {
            if(ubah==true){
                setNilai('+')
                setUbah(false) 
            }else if(ubah==false){
                setNilai('-')
                setUbah(true)
                
            }
            klik.current.classList.toggle('klikDom')
            deskripsi.current.classList.toggle('dataQuesDom')
            tulisan.current.classList.toggle('tulisanDom')
            warna.current.classList.toggle('warnaDom')
            
        }
        console.log(nilai)
    console.log(ubah)
    return (
        <div className='containerFree'>
            <div className="wrapperFree">
                <h2>Frequenly Asked Questions</h2>
                <div className="Ques">
                    <div className="dataQues" ref={deskripsi}>
                        <div className="handleQues">
                            <p ref={warna}>What do you mean by public-facing usage?</p>
                            <div className="ganti i" ref={klik} onClick={handlePanjang}>
                                {nilai}
                            </div>
                        </div>
                        <p className='pD' ref={tulisan}>We define public-facing usage as leveraging CARTO to power enterprise-scale <br />applications that are made available to external parties such as clients or the public, as <br />  opposed to internal demonstration-only applications.</p>
                    </div>
                    <div className="dataQues">
                        <div className="handleQues">
                            <p>Can i  buy more storage for my individual plan?</p> <div className="ganti">
                                +
                            </div>
                            
                        </div>
                    </div>
                    <div className="dataQues">
                        <div className="handleQues">
                            <p >What happens to my data after the trial or if i cancel my subscription?</p>
                            <div className="ganti">
                                +
                            </div>
                        </div> 
                    </div>
                    <div className="dataQues">
                        <div className="handleQues">
                            <p>Can i cancel my monthly or annual subscription?</p>
                            <div className="ganti">
                                +
                            </div>
                        </div>
                    </div>
                </div>

                <Button isi="Add Question"/>
            </div>
        </div>
    )
}
