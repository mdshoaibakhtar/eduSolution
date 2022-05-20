import code from '../img/code.jpg';
import '../css/course.css'
import React, { useContext } from 'react'
import courseContext from '../context/course/courseContext';

const DetailedCourse = (props) => {
    const context = useContext(courseContext);
    const { title, description, instructor, duration, price } = context;
    const addcart = (e) => {
        console.log("Adding to cart");
        document.querySelector('.addcart').innerText = "Added"
    }
    const buynow = () => {
        console.log("Buying...");
    }
    return (
        <>
            <div className="detailed">
                <div className="c-detail">
                    <img className='c-img' src={props.image} alt="" />
                    <div className="c-info">
                        <h1>{props.title}</h1>
                        <p>{props.desc}</p>
                        <h2>Instructor : {props.instructor}</h2>
                    </div>
                </div>
                <div className="buy">
                    <div className="price">
                        <p>{props.price}</p>
                        <p>{props.offer}</p>
                        <button className='addcart' onClick={addcart}>Add To cart</button>
                        <button onClick={buynow}>Buy Now</button>
                    </div>
                    <div className="include">
                        {props.include}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailedCourse
