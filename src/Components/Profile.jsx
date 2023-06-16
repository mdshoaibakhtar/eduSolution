import React, { useState } from 'react'
import '../css/profile.css'
import Navbar from './Navbar';

const getData = () => {
    let obj = localStorage.getItem('info');
    if(obj){
        return JSON.parse(localStorage.getItem('info'));
    }else{
        return {};
    }
}


const Profile = () => {
    const[data] = useState(getData());
    return (
        <>

            <Navbar/>
            <div className="profile">
                <h1>Your Profile</h1>
                <div className="mydet">
                    <p className='proname'>Name : {data.name}</p>
                    <p >Address : {data.address}</p>
                    <p >Pin Code : {data.pin}</p>
                    <p >State : {data.state}</p>
                    <p >Mobile : {data.mobile}</p>
                    <p className='mail'>E-mail : {data.mail}</p>
                </div>
            </div>

        </>
    )
}

export default Profile
