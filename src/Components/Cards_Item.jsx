import React from "react";

export default function Cards_Item(props){
    return(
        <>
        <div className="cards-item-container">
            <img src={props.image} alt="" /><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis, sequi pariatur odit repudiandae ratione veritatis facilis laboriosam quisquam incidunt nihil dolor reiciendis a magnam voluptatum! Ea incidunt deserunt accusamus.</p><br />
            <button>Get It</button>
        </div>
        </>
    )
}