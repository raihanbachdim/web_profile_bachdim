import React ,{ useEffect,useRef } from 'react'
import "./intro.scss"
import { init } from 'ityped'

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            backDelay:1500,
            backSpeed:60,
            showCursor: true,
             strings: ['Pendidikan Ilmu Komputer', 'Universitas Pendidikan Indonesia' ] })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/ma.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Halo semua, saya</h2>
                    <h1>Muhamad Raihan Bachdim</h1>
                    {/* Menggunakan Library Ityped */}
                    <h3>Mahasiswa <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
