import '../css/course.css'
import React, {  useState } from 'react'

const getcourseData = () => {
    let cobj = localStorage.getItem('course');
    if(cobj){
        return JSON.parse(localStorage.getItem('course'));
    }else{
        return {};
    }
}

const DetailedCourse = (props) => {
    const[content] = useState(getcourseData());
    const getDate = () => {
            return new Date().toLocaleString()
        };

        let courseArr = [];
        const course={
            title:"",
            instructor:"",
            date:""
        };


        const addcart = () => {
            document.querySelector('.addcart').innerText = "Added"

            course.title = props.title;
            course.instructor= props.instructor;
            course.date=getDate();
            courseArr.push(course);
            localStorage.setItem('course',JSON.stringify(courseArr));
            console.log(content.title);
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
                            <p className='offer'>{props.offer}</p>
                            <p className='oprice'>{props.oPrice}</p>
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
