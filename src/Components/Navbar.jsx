import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../img/logo.png'
import '../css/Navbar.css';
import '../css/App.css';


export default function Navbar() {
    let navigate = useNavigate();
    function run() {
        console.log('Clicked');
        let navcontainer = document.querySelector('.nav-Container');
        navcontainer.classList.toggle('hide');
        let list = document.querySelector('.anchor');
        list.classList.toggle('none');
    }

    const handleLogout =()=>{
        localStorage.removeItem('info');
        navigate('/SignUp')
    }
    return (
        <>
            <div className="navhead">
                <img className="logo" src={logo} alt="" /><p>eduSolution</p>
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
                    </li>
                </div>

                <div className="r-list">
                    
                </div>
                <div className="r-list">
                    {!localStorage.getItem('info') ? <div className="logout">
                        <button className="anchor"><Link to="/SignUp">Sign up</Link></button>
                    </div> : <button className="anchor" onClick={handleLogout}>Log Out</button>}
                </div>
            </div>
        </>
    )
}