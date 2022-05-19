import React from "react";
import CardsItem from "./CardsItem";
import img from '../img/async.png';
import code from '../img/code.jpg';
import twoimg from '../img/www.asyncdevelopers.com.jpg'
import fourimg from '../img/www.asyncdevelopers.com (1).jpg'
import About from "./About";
import '../css/Responsive.css';
import '../css/App.css';

export default function Course() {
    return (
        <>

            <div className="images">
                <img src={fourimg} alt="" />
                <img src={twoimg} alt="" />
            </div>
            <div className="Course-container">
                <CardsItem image={code} />
                <CardsItem image={img} />
                <CardsItem image={code} />
                <CardsItem image={img} />
                <CardsItem image={code} />
                <CardsItem image={img} />
            </div>
            <About />
        </>
    )
}