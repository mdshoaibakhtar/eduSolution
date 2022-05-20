import React from "react";
import png from '../img/insta.png';
import png1 from '../img/twuitter.png';
import png2 from '../img/whatsa.png';
import png3 from '../img/youi.png';
import png5 from '../img/linkedin.png';
import Footer from "./Footer";
import Sponsor from "./Sponsor";
import '../css/Responsive.css';
import '../css/App.css';

export default function About() {
    return (
        <>
            <div className="about-container">
                <div className="about">
                    <h2 className="c-name">Async Developers - Initiative To Enhance The Tech Education</h2>
                    <p>Aysnc developers is providing best education in the era of technology. we provide different different type of course's. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati pariatur culpa enim ut repellendus repudiandae nam neque aperiam quam explicabo sint nulla nemo, doloribus ea consectetur laboriosam dolor hic consequuntur? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae est harum, eveniet accusantium omnis illum! Distinctio soluta doloremque, eveniet, id sint illum dolores libero expedita voluptatibus aliquid in tempora dolore?</p>
                    <div className="det">
                        <div className="contactUs">
                            <h3>Contact Us</h3>
                            <p>Mobile No : +91 9905109322, +91 9987564287</p>
                            <p>E-mail : aysncdevelopers@support.com</p>
                            <p>Address : 124 Developers Chowk, Noida</p>
                        </div>
                        <div className="links">
                            <a href="#"><img src={png} alt="loading..." />aysncdevelopers</a>
                            <a href="#"><img src={png1} alt="loading..." />aysncdevelopers</a>
                            <a href="#"><img src={png3} alt="loading..." />aysncdevelopers</a>
                            <a href="#"><img src={png5} alt="loading..." />aysncdevelopers</a>
                            <a href="#"><img src={png2} alt="loading..." />aysncdevelopers</a>
                        </div>
                    </div>
                </div>

            </div>
            <Sponsor />
            <Footer />
        </>
    )
}