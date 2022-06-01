import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from '../img/logo.png'
import '../css/Navbar.css';
import '../css/App.css';

const getData = () => {
    let obj = localStorage.getItem('info');

    if(obj){
        return JSON.parse(localStorage.getItem('info'));
    }else{
        return {};
    }
}

export default function Navbar() {
    let navigate = useNavigate();
    const[data,setdata] = useState(getData());
    const[username,setusername] = useState("Sign Up")
    function run() {
        console.log('Clicked');
        let navcontainer = document.querySelector('.nav-Container');
        navcontainer.classList.toggle('hide');
        let list = document.querySelector('.anchor');
        list.classList.toggle('none');
    }
    // function dinone() {
    //     let list = document.querySelector('.anchor');
    //     list.classList.toggle('none');
    // }

    const handleLogout =()=>{
        localStorage.removeItem('info');
        navigate('/SignUp')
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
                        <ul className="awsmlogo"><i class="fa-solid fa-2x fa-file-code"></i></ul>
                        <ul><Link className="anchor" to="/">Home</Link></ul>
                        <ul><Link className="anchor" to="/Course">Course</Link></ul>
                        <ul><Link className="anchor" to="/Contact">Contact</Link></ul>
                        <ul><Link className="anchor" to="/Profile">Profile</Link></ul>
                        {/* <ul><Link to="/Test">Test</Link></ul> */}
                    </li>
                </div>

                <div className="r-list">
                    
                </div>
                <div className="r-list">
                    {!localStorage.getItem('info') ? <div className="logout">
                        <button className="anchor"><Link to="/SignUp">Sign up</Link></button>
                    </div> : <button className="anchor" onClick={handleLogout}>Log Out</button>}
                    {/* <button onClick={handleMode}>Dark Mode</button> */}
                </div>
            </div>
        </>
    )
}