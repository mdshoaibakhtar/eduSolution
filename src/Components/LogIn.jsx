import React from 'react'
import '../css/Responsive.css';
import '../css/App.css';
import { Link } from 'react-router-dom';

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
                    <button ><Link className="sign" to="/SignUp">New Register</Link></button>
                    </form>
            </div>
           </div>
        </>
    )
}
