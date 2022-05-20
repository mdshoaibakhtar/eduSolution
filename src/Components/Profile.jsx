import React, { useState } from 'react'
import '../css/profile.css'

const getData = () => {
    let obj = localStorage.getItem('info');
    if(obj){
        return JSON.parse(localStorage.getItem('info'));
    }else{
        return {};
    }
}


const Profile = () => {
    const[data,setdata] = useState(getData());
    return (
        <>
            <div className="profile">
                <h1>Your Profile</h1>
                <div className="mydet">
                    <p className='proname'>Name : {data.name}</p>
                    <p >Address : {data.address}</p>
                    <p >Pin Code : {data.pin}</p>
                    <p >State : {data.state}</p>
                    <p >Mobile : {data.mobile}</p>
                    <p className='mail'>E-mail : {data.mail}</p>
                    {/* <button className='save-btn'>save info</button> */}
                </div>
                {/* <h1>Your Enrollment</h1>
                <div className="mycourse">
                    <div className="head">
                        <div className="title">Course Title</div>
                        <div className="tag">Instructor</div>
                        <div className="date">Date</div>
                    </div>
                    <div className="c-details">
                        <ul className="c-title"></ul>
                        <ul className="c-tag">programming</ul>
                        <ul className="c-date">10-03-2022</ul>
                        <ul className="c-option">
                            <a href="#">Drop</a>
                            <a href="#">View</a>
                        </ul>
                    </div>
                    
                </div> */}
            </div>

        </>
    )
}

export default Profile
