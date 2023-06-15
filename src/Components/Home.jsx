import React from "react";
import SideCard from "./SideCard";
import About from "./About";
import '../css/Responsive.css';
import '../css/App.css';
import gif from '../img/Fauget.gif'
import Navbar from "./Navbar";
export default function Home() {
    return (
        <>
            <Navbar/>
            <div className="Home-container">
                <div className="images">
                    <img src={gif} alt="" />
                </div>
            </div>
            <SideCard/>
            <About/>
        </>
    )
}