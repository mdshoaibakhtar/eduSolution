import React from "react";
// import CardsItem from "./CardsItem";
// import Sponsor from "./Sponsor";
import Side_card from "./SideCard";
// import code from '../img/code.jpg';
import oneimg from '../img/Async Developers.jpg'
// import twoimg from '../img/with asyncdevelopers.jpg'
// import threeimg from '../img/www.asyncdevelopers.com (1).jpg'
import fourimg from '../img/www.asyncdevelopers.com.jpg'
// import Footer from "./Footer";
import About from "./About";
import '../css/Responsive.css';
import '../css/App.css';

export default function Home() {
    return (
        <>
            <div className="Home-container">
                <div className="images">
                    <img src={oneimg} alt="" />
                    <img src={fourimg} alt="" />
                </div>
            </div>
            <Side_card/>
            <About/>
        </>
    )
}