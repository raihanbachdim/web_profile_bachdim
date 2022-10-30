import React, { useState } from 'react'
import "./contact.scss";

export default function Contact() {
    const [message,setMessage] = useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Input Email" />
                    <textarea name="" placeholder="Input Massage"></textarea>
                    <button type="submit">Submit</button>
                    {message && <span>Thanks,,I Will Reply Soon</span>}
                </form>
            </div>
        </div>
    )
}
