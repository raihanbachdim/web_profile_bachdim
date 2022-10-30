import React from 'react'
import "./topbar.scss"
import {Person,Mail} from '@material-ui/icons';

export default function Topbar({menuOpen,setMenuOpen}) {
    return (
                // Jika menu open true maka class akan active
        <div className={"topbar " +  (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Bachdim's</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+62 813 8449 7030</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>raihanbachdim@upi.edu</span>
                    </div>
                </div>
                <div className="right">
                    {/* Ketika di klik menu nya pada saat di posisi false maka akan berubah menjadi true atau sebalik nya */}
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
