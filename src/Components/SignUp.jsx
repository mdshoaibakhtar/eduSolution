import React, { useState } from 'react'
import '../css/Responsive.css';
import '../css/App.css';
import Profile from './Profile';
import { Link } from 'react-router-dom';

export default function SignUp() {
    const [name, setname] = useState();
    const [address, setaddress] = useState();
    const [pin, setpin] = useState();
    const [state, setstate] = useState();
    const [mobile, setmobile] = useState();
    const [mail, setmail] = useState();
    let object = {
        name: "",
        address: "",
        pin: "",
        state: "",
        mobile: "",
        mail: ""
    }

    const handlename = (e) => {
        // console.log("Change");
        setname(e.target.value);
        // console.log(e.target.value);
    }
    const handleaddress = (e) => {
        // console.log("Change");
        setaddress(e.target.value);
        // console.log(e.target.value);
    }
    const handlepin = (e) => {
        // console.log("Change");
        setpin(e.target.value);
        // console.log(e.target.value);
    }
    const handlestate = (e) => {
        // console.log("Change");
        setstate(e.target.value);
        // console.log(e.target.value);
    }
    const handlemobile = (e) => {
        // console.log("Change");
        setmobile(e.target.value);
        // console.log(e.target.value);
    }
    const handlemail = (e) => {
        // console.log("Change");
        setmail(e.target.value);
        // console.log(e.target.value);
    }
    const handleClick = () => {
        // console.log("clicked");
        // console.log(name);
        object.name = name;
        object.address = address;
        object.pin = pin;
        object.state = state;
        object.mobile = mobile;
        object.mail = mail;
        // console.log(object);
        localStorage.setItem('info', JSON.stringify(object));
    }
    return (
        <>
            <div className="signUp-container">
                <h1>Sign Here</h1>
                <div className="signUp">
                    <label htmlFor="name">Name : </label><br />
                    <input type="text" id="name" placeholder="Your Name" onChange={handlename} /><br />
                    <label htmlFor="name">Address : </label><br />
                    <input type="text" id="address" placeholder="Your Address" onChange={handleaddress} /><br />
                    <label htmlFor="name">Pin Code : </label><br />
                    <input type="text" id="pin code" placeholder="Your pincode" onChange={handlepin} /><br />
                    <label htmlFor="name">State : </label><br />
                    <input type="text" id="state" placeholder="Your state" onChange={handlestate} /><br />
                    <label htmlFor="number">Mobile No. : </label><br />
                    <input type="text" id="mobile" placeholder="Your Mobile No." onChange={handlemobile} /><br />
                    <label htmlFor="mail">Email : </label><br />
                    <input type="text" id="mail" placeholder="Your Email" onChange={handlemail} /><br />
                    <button style={{width:"10rem"}} onClick={handleClick}><Link to="/Profile" style={{textDecoration:"none",color:"white"}}>Submit</Link></button>
                </div>
            </div>

        </>
    )
}
