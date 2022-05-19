import React from "react";
// import About from "./About";
// import Course from "./Course";
// import Contact from "./Contact";
// import Info from "./Home";
import { Link } from "react-router-dom";
// import LogIn from "./LogIn";
// import SignUp from "./SignUp";
import logo from '../img/logo.png'
// import './Navbar.css';
import '../css/Navbar.css';
import '../css/App.css';

export default function Navbar() {
    function run() {
        console.log('Clicked');
        let navcontainer = document.querySelector('.nav-Container');
        navcontainer.classList.toggle('hide');
        // navcontainer.style.height="0"
        // navcontainer.style.opacity="0"
        // navcontainer.style.transition="all 0.5s ease-out"
      
    }
    return (
        <>
            <div className="navhead">
                <img className="logo" src={logo} alt="" /><p>Async Developers</p>
                <div className="burger" onClick={run}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
            
            <div className="nav-Container">
                <div className="l-list">
                    <li>
                        <ul><Link to="/"><img className="logo2" src={logo} alt="" ></img></Link></ul>
                        <ul><Link to="/">Home</Link></ul>
                        <ul><Link to="/Course">Course</Link></ul>
                        <ul><Link to="/Contact">Contact</Link></ul>
                        <ul><Link to="/Test">Test</Link></ul>
                        <ul><Link to="/Profile">Your Profile</Link></ul>
                    </li>
                </div>

                <div className="r-list">
                    <input type="text" id="search" placeholder="search" />
                    <button>search</button>
                    <button ><Link to="/LogIn">log in</Link></button>
                    {/* <button><Link to="/SignUp">sign up</Link></button> */}
                </div>
            </div>
        </>
    )
}