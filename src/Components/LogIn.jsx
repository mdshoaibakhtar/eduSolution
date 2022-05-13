import React from 'react'
import Footer from './Footer'
import Sponsor from './Sponsor'
import './Responsive.css';

export default function LogIn() {
    return (
        <>
           <div className="logIn-container">
           <h1>Log In</h1>
            <div className="logIn">
                <form action="/">
                    <label htmlFor="mail">Email : </label><br />
                    <input type="text" id="mail" placeholder="Your Email" required="true"/><br />
                    <label htmlFor="password">Password : </label><br />
                    <input type="password" id="Password" placeholder="Your password" required="true" /><br />
                    <button>Submit</button>
                    </form>
            </div>
           </div>
        </>
    )
}
