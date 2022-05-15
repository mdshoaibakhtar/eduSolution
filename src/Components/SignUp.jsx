import React from 'react'
import Footer from './Footer'
import Sponsor from './Sponsor'
import '../css/Responsive.css';
import '../css/App.css';

export default function SignUp() {
  return (
      <>
      <div className="signUp-container">
      <h1>Sign Up</h1>
      <div className="signUp">
                <form action="/">
                    <label htmlFor="name">Name : </label><br />
                    <input type="text" id="name" placeholder="Your Name" required="true" /><br />
                    <label htmlFor="name">Address : </label><br />
                    <input type="text" id="address" placeholder="Your Address" /><br />
                    <label htmlFor="number">Mobile No. : </label><br />
                    <input type="text" id="mobile" placeholder="Your Mobile No." required="true"/><br />
                    <label htmlFor="mail">Email : </label><br />
                    <input type="text" id="mail" placeholder="Your Email" required="true"/><br />
                    <label htmlFor="password">Password : </label><br />
                    <input type="password" id="password" placeholder="Your Password" required="true"/><br />
                    <label htmlFor="password">Confirm-Password : </label><br />
                    <input type="password" id="c-password" placeholder="Confirm Password" required="true"/><br />
                    <button>Submit</button>
                </form>
            </div>
      </div>

      </>
  )
}
