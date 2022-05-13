import React from "react";
import Cards_Item from "./Cards_Item";
import img from '../img/async.png';
import code from '../img/code.jpg';
import Footer from "./Footer";
import oneimg from '../img/Async Developers.jpg'
import threeimg from '../img/with asyncdevelopers.jpg'
import twoimg from '../img/www.asyncdevelopers.com.jpg'
import fourimg from '../img/www.asyncdevelopers.com (1).jpg'
import Sponsor from "./Sponsor";
import About from "./About";
import './Responsive.css';

export default function Cards(){
    return(
        <>
       
        <div className="images">
                    <img src={fourimg} alt="" />
                    <img src={twoimg} alt="" />
                </div>
        <div className="cards-container">
            <Cards_Item image={code}/>
            <Cards_Item image={img}/>
            <Cards_Item image={code}/>
            <Cards_Item image={img}/>
            <Cards_Item image={code}/>
            <Cards_Item image={img}/>
        </div>
        <About/>
        </>
    )
}