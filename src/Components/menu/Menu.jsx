import React from 'react'
import "./menu.scss";

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        // Jika menu open true maka class akan active
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                {/* Ketika menu di klik maka sidebar akann tertutup secara automatis */}
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="/">Home</a>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="#testimoni">Testimonials</a>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
            
        </div>
    )
}
