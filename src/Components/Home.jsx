import React from "react";
import Cards_Item from "./Cards_Item";
import Sponsor from "./Sponsor";
import Side_card from "./Side_card";
import code from '../img/code.jpg';
import oneimg from '../img/Async Developers.jpg'
import twoimg from '../img/with asyncdevelopers.jpg'
import threeimg from '../img/www.asyncdevelopers.com (1).jpg'
import fourimg from '../img/www.asyncdevelopers.com.jpg'
import Footer from "./Footer";
import About from "./About";

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