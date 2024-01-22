import React from 'react'
import './free.css'
import { useState, useRef, useEffect } from 'react'
import Button from '../navbar/Button'
export default function Free() {
    const klik = useRef(null)
    const deskripsi = useRef(null)
    const tulisan = useRef(null)
    const warna = useRef(null)
    const [ubah1, setUbah1] = useState('-')
    const [ubah2, setUbah2] = useState('-')
    const [ubah3, setUbah3] = useState('-')
    const [ubah4, setUbah4] = useState('-')
    // const [nilai, setNilai] = useState("-")

    useEffect(() => {
        deskripsi.current.classList.add('dataQuesDom')
        warna.current.classList.add('warnaDom')
        klik.current.classList.add('klikDom')
        tulisan.current.classList.add('tulisanDom')
    }, [])
    useEffect(()=>{
        setUbah2('+')
        setUbah3('+')
        setUbah4('+')
    },[])
    function handlePanjang(e) {
        e.target.classList.toggle('klikDom')
        // deskripsi.current.classList.toggle('dataQuesDom')
        e.target.parentElement.parentElement.classList.toggle('dataQuesDom')
        e.target.parentElement.nextSibling.classList.toggle('tulisanDom')
        e.target.previousSibling.classList.toggle('warnaDom')
    }
    function handleSatu(e){
        if (ubah1 == '+') {
            setUbah1('-')
        } else if (ubah1 == '-') {
            setUbah1('+')
        }
        handlePanjang(e)
    }
    function handleDua(e){
        if (ubah2 == '+') {
            setUbah2('-')
        } else if (ubah2 == '-') {
            setUbah2('+')
        }
        handlePanjang(e)
    }
    function handleTiga(e){
        if (ubah3 == '+') {
            setUbah3('-')
        } else if (ubah3 == '-') {
            setUbah3('+')
        }
        handlePanjang(e)
    }
    function handleEmpat(e){
        if (ubah4 == '+') {
            setUbah4('-')
        } else if (ubah4 == '-') {
            setUbah4('+')
        }
        handlePanjang(e)
    }
    return (
        <div className='containerFree'>
            <div className="wrapperFree">
                <h2>Frequenly Asked Questions</h2>
                <div className="Ques">
                    <div className="dataQues" ref={deskripsi}>
                        <div className="handleQues">
                            <p ref={warna}>What do you mean by public-facing usage?</p>
                            <div className="ganti i" ref={klik} onClick={handleSatu}>
                                {ubah1}
                            </div>
                        </div>
                        <p className='pD' ref={tulisan} >We define public-facing usage as leveraging CARTO to power enterprise-scale <br />applications that are made available to external parties such as clients or the public, as <br />  opposed to internal demonstration-only applications.</p>
                    </div>
                    <div className="dataQues">
                        <div className="handleQues">
                            <p>Can i  buy more storage for my individual plan?</p> 
                            <div className="ganti" onClick={handleDua}>
                                {ubah2}
                            </div>
                        </div>
                        <p className='pD'>We define public-facing usage as leveraging CARTO to power enterprise-scale <br />applications that are made available to external parties such as clients or the public, as <br />  opposed to internal demonstration-only applications.</p>
                    </div>
                    <div className="dataQues">
                        <div className="handleQues">
                            <p >What happens to my data after the trial or if i cancel my subscription?</p>
                            <div className="ganti" onClick={handleTiga}>
                                {ubah3}
                            </div>
                        </div>
                        <p className='pD'>We define public-facing usage as leveraging CARTO to power enterprise-scale <br />applications that are made available to external parties such as clients or the public, as <br />  opposed to internal demonstration-only applications.</p>
                    </div>
                    <div className="dataQues">
                        <div className="handleQues">
                            <p>Can i cancel my monthly or annual subscription?</p>
                            <div className="ganti" onClick={handleEmpat}>
                                {ubah4}
                            </div>
                        </div>
                        <p className='pD'>We define public-facing usage as leveraging CARTO to power enterprise-scale <br />applications that are made available to external parties such as clients or the public, as <br />  opposed to internal demonstration-only applications.</p>
                    </div>
                </div>

                <Button isi="Add Question" />
            </div>
        </div>
    )
}
