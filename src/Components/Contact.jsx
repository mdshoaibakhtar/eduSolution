import React from "react";
import '../css/App.css';

export default function Contact(){
    return(
        <>
        <div className="contact-container">
            <h1>Your FeedBack</h1>
            <div className="form">
            <form action="/">
                <label htmlFor="name">Name : </label><br />
                <input type="text" id="name" placeholder="Your Name"/><br />
                <label htmlFor="name">Address : </label><br />
                <input type="text" id="address" placeholder="Your Address"/><br />
                <label htmlFor="number">Mobile No. : </label><br />
                <input type="text" id="mobile" placeholder="Your Mobile No."/><br />
                <label htmlFor="mail">Email : </label><br />
                <input type="text" id="mail" placeholder="Your Email"/><br />
                <label htmlFor="name">Suggestion/Feedback : </label><br />
                <textarea name="suggestion" id="suggestion" cols="30" rows="10" placeholder="Your Suggestion/Feedback"></textarea>
                <br /><button>Submit</button>
            </form>
            </div>
        </div>
        </>
    )
}