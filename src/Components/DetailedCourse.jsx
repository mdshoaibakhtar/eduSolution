import React from 'react'
import code from '../img/code.jpg';
import '../css/course.css'

const DetailedCourse = () => {
    return (
        <>
            <div className="c-detail">
                <img className='c-img' src={code} alt="" />
                <div className="c-info">
                    <h1>Become a Certified HTML, CSS, JavaScript Web Developer</h1>
                    <p>Complete coverage of HTML, CSS, Javascript while you Earn Four Respected Certifications.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nulla obcaecati officiis cumque, modi soluta, dolore eius nihil voluptas voluptatem exercitationem in alias sapiente possimus voluptatum quod suscipit ea vero.
                    </p>
                    <div className="price">
                        <p>₹385 </p>
                        <p>Original Price₹3,499 </p>
                        <p>Discount : 89% off</p>
                    </div>
                    <div className="btn">
                        <button>Add To cart</button>
                        <button>Buy Now</button>
                    </div>
                    <div className="include">
                        <h1>This Course include</h1>
                        <ul>
                            <li>45.5 hours on-demand video</li>
                            <li>200 downloadable resources</li>
                            <li>Full lifetime access</li>
                            <li>Access on mobile and TV</li>
                            <li>Certificate of completion</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="c-detail-learn">
                <div className="learn">
                    <h1>What You Will Learn</h1>
                    <li>Prepare for Industry Certification Exam </li>
                    <li>Earn Certification that is Proof of your Competence </li>
                    <li>Hours and Hours of Video Instruction </li>
                    <li>Dozens of Code Examples to Download and Study </li>
                    <li>Over 25 Engaging Lab Exercises </li>
                    <li>All Lab Solutions </li>
                    <li>Instructor Available by Email or on the Forums  </li>
                    <li>All Free Tools </li>
                    <li>Comprehensive Coverage of HTML and CSS</li>
                    <li>Client Side Programming with Javascript </li>
                    <li>Server Side Development with PHP </li>
                    <li>Learn Database Development with mySQL </li>
                </div>
            </div>
        </>
    )
}

export default DetailedCourse
