import React from "react";
import '../css/Responsive.css';
import '../css/App.css';
import DetailedCourse from "./DetailedCourse";
import { Link } from "react-router-dom";

export default function Cards_Item(props){
    return(
        <>
        <div className="Course-item-container">
            <img src={props.image} alt="" /><br />
            <h3>Become a Certified HTML, CSS, JavaScript Web Developer</h3>
            <p>Complete coverage of HTML, CSS, Javascript while you Earn Four Respected Certifications.Read more........</p><br />
            <button><Link to="/DetailedCourse">Detail</Link></button>
        </div>
        </>
    )
}