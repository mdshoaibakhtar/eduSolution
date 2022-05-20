import React from "react";
import '../css/App.css';

export default function Contact(){
    return(
        <>
        <div className="signUp-container">
                <h1>Contact us</h1>
                <div className="signUp">
                    <label htmlFor="name">Name : </label><br />
                    <input type="text" id="name" placeholder="Your Name"/><br />
                    <label htmlFor="number">Mobile No. : </label><br />
                    <input type="text" id="mobile" placeholder="Your Mobile No." /><br />
                    <label htmlFor="mail">Email : </label><br />
                    <input type="text" id="mail" placeholder="Your Email" /><br />
                    <label htmlFor="sugg">Query : </label><br />
                    <input type="text" id="mail" placeholder="Your Query" /><br />
                    <button ><a href="/Profile">Submit</a></button>
                </div>
            </div>
        </>
    )
}