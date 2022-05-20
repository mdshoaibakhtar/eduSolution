import '../css/Responsive.css';
import '../css/App.css';
import React from 'react'
import DetailedCourse from "./DetailedCourse";
import { Link } from "react-router-dom";

export default function Cards_Item(props){
    return(
        <>
        <div className="Course-item-container">
            <img src={props.image} alt="" /><br />
            <h3>{props.title}</h3>
            <p>{props.sdetail}</p><br />
            <button><Link to="/DetailedCourse" title="mai hu">Detail</Link></button>
        </div>
        </>
    )
}