import React from "react";
import png1 from '../img/twuitter.png';
import png2 from '../img/whatsa.png';
import png3 from '../img/youi.png';
import png4 from '../img/iphonelogo.png';
import png5 from '../img/linkedin.png';
import '../css/Responsive.css';
import '../css/App.css';

export default function Sponsor(){
    return(
        <>
        <div className="sponsor-container">
            <h1>Our Sponsor</h1>
            <div className="sponsor">
                <img src={png1} alt=""></img>
                <img src={png2} alt=""></img>
                <img src={png3} alt=""></img>
                <img src={png4} alt=""></img>
                <img src={png5} alt=""></img>
            </div>
        </div>
        </>
    )
}