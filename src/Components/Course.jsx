
import CardsItem from "./CardsItem";
import img from '../img/async.png';
import code from '../img/code.jpg';
import twoimg from '../img/www.asyncdevelopers.com.jpg'
import fourimg from '../img/www.asyncdevelopers.com (1).jpg'
import gif from '../img/Fauget.gif'
import About from "./About";
import oneimg from '../img/Async Developers.jpg'
import '../css/Responsive.css';
import '../css/App.css';
import React, { useContext} from 'react'
import courseContext from '../context/course/courseContext';
import DetailedCourse from "./DetailedCourse";

export default function Course() {
    const context = useContext(courseContext);
    const { title,description,instructor,duration,price } = context;
    return (
        <>

            <div className="images">
            <img src={oneimg} alt="" />
                {/* <img src="https://cdn.wallpapersafari.com/84/71/XqRxmj.jpg" alt="" /> */}
            </div>
            <div className="Course-container">
                <DetailedCourse className="det-left" image={context.c.img} title={context.c.title} desc={context.c.description} instructor={context.c.instructor} duration={context.c.duration} offer={context.c.offer} price={context.c.price} oPrice={context.c.oPrice} include={context.c.include}/>
                <DetailedCourse className="det-left" image={context.java.img} title={context.java.title} desc={context.java.description} instructor={context.java.instructor} duration={context.java.duration} offer={context.java.offer} price={context.java.price} oPrice={context.java.oPrice} include={context.java.include}/>
                <DetailedCourse className="det-left" image={context.jscript.img} title={context.jscript.title} desc={context.jscript.description} instructor={context.jscript.instructor} duration={context.jscript.duration} offer={context.jscript.offer}oPrice={context.jscript.oPrice}  price={context.jscript.price} include={context.jscript.include}/>
                <DetailedCourse className="det-left" image={context.ai.img} title={context.ai.title} desc={context.ai.description} instructor={context.ai.instructor} duration={context.ai.duration} offer={context.ai.offer} price={context.ai.price} oPrice={context.ai.oPrice} include={context.ai.include}/>
                <DetailedCourse className="det-left" image={context.ml.img} title={context.ml.title} desc={context.ml.description} instructor={context.ml.instructor} duration={context.ml.duration} offer={context.ml.offer} price={context.ml.price}oPrice={context.ml.oPrice}  include={context.ml.include}/>
                <DetailedCourse className="det-left" image={context.datasc.img} title={context.datasc.title} desc={context.datasc.description} instructor={context.datasc.instructor} duration={context.datasc.duration} offer={context.datasc.offer} oPrice={context.datasc.oPrice} price={context.datasc.price} include={context.datasc.include}/>
            </div>
            <About />
        </>
    )
}