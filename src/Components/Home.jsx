import React from "react";
import SideCard from "./SideCard";
import oneimg from '../img/Async Developers.jpg'
import fourimg from '../img/www.asyncdevelopers.com.jpg'
import About from "./About";
import '../css/Responsive.css';
import '../css/App.css';
import gif from '../img/Fauget.gif'
import Navbar from "./Navbar";
// 
export default function Home() {
    return (
        <>
        {/* <Navbar/> */}
            <div className="Home-container">
                <div className="images">
                <img src={gif} alt="" />
                    {/* <img src="https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1302" alt="" /> */}
                </div>
            </div>
            <SideCard/>
            <About/>
        </>
    )
}