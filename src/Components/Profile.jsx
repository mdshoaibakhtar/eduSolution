import React from 'react'
import '../css/profile.css'

const Profile = () => {
    return (
        <>
            <div className="profile">
                <h1>Your Profile</h1>
                <div className="mydet">
                    <p className='proname' contentEditable="true">Name : Md Shoaib Akhtar</p>
                    <p contentEditable="true">Address : Thana Road, Sultanganj</p>
                    <p contentEditable="true">Pin Code : 813213</p>
                    <p contentEditable="true">State : Bihar</p>
                    <p contentEditable="true">Mobile : 990510932</p>
                    <p contentEditable="true">E-mail : mdshoaibakhtar966@gmail.com</p>
                </div>
                <h1>Your Enrollment</h1>
                <div className="mycourse">
                    <div className="head">
                        <div className="title">Title</div>
                        <div className="tag">Tag</div>
                        <div className="date">Date</div>
                    </div>
                    <div className="c-details">
                        <ul className="c-title">Let us c</ul>
                        <ul className="c-tag">programming</ul>
                        <ul className="c-date">10-03-2022</ul>
                        <ul className="c-option">
                            <a href="#">Drop</a>
                            <a href="#">View</a>
                        </ul>
                    </div>
                    <div className="c-details">
                        <ul className="c-title">Let us c</ul>
                        <ul className="c-tag">programming</ul>
                        <ul className="c-date">10-03-2022</ul>
                        <ul className="c-option">
                            <a href="#">Drop</a>
                            <a href="#">View</a>
                        </ul>
                    </div>
                    <div className="c-details">
                        <ul className="c-title">Let us c</ul>
                        <ul className="c-tag">programming</ul>
                        <ul className="c-date">10-03-2022</ul>
                        <ul className="c-option">
                            <a href="#">Drop</a>
                            <a href="#">View</a>
                        </ul>
                    </div>
                    <div className="c-details">
                        <ul className="c-title">Let us c</ul>
                        <ul className="c-tag">programming</ul>
                        <ul className="c-date">10-03-2022</ul>
                        <ul className="c-option">
                            <a href="#">Drop</a>
                            <a href="#">View</a>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
