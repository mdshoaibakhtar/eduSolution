import React, { useState } from 'react'
import courseContext from './courseContext'

const CourseState = (props) => {
    const c = {
        title: "C For Beginners, Starting From Scratch",
        img: "https://preview.redd.it/vrbxys4n9n641.png?auto=webp&s=feba4c019264d12e03f90500c60b950a8f98b566",
        description: "Learn  The Basic and important language of computer with the best teacher. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque dicta repellat minus necessitatibus, consectetur aspernatur aut veniam atque, explicabo deserunt quia pariatur magnam fugit velit? Voluptatibus eligendi adipisci eius.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque dicta repellat minus necessitatibus, consectetur aspernatur aut veniam atque, explicabo deserunt quia pariatur magnam fugit velit? Voluptatibus eligendi adipisci eius.",
        instructor: "Denish ritchie",
        duration: "15.5hr",
        offer: "35.6% Off ",
        oPrice: "Original Price ₹3,499",
        price: "Rs 2,253.40",
        include:
            <ul>
                <h1>This Course include</h1>
                <li>15.5 hours on-demand video</li>
                <li>200 downloadable resources</li>
                <li>Full lifetime access</li>
                <li>Access on mobile and TV</li>
                <li>Certificate of completion</li>
            </ul>
    }
    const java = {
        title: "Learn Java To Enhance Your Coding Skill",
        img: "https://c4.wallpaperflare.com/wallpaper/92/845/277/code-java-programming-life-hd-wallpaper-preview.jpg",
        description: "One Of The Most demanding and valuable language, learn today,enroll Now. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque dicta repellat minus necessitatibus, consectetur aspernatur aut veniam atque, explicabo deserunt quia pariatur magnam fugit velit? Voluptatibus eligendi adipisci eius.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque dicta repellat minus necessitatibus, consectetur aspernatur aut veniam atque, explicabo deserunt quia pariatur magnam fugit velit? Voluptatibus eligendi adipisci eius.",
        instructor: "Md Shoaib Akhtar",
        duration: "17.5hr",
        offer: "18.6% Off" ,
        oPrice: "Original Price ₹6,499",
        price: "Rs 5,290.20",
        include:
            <ul>
                <h1>This Course include</h1>
                <li>17.5 hours on-demand video</li>
                <li>220 downloadable resources</li>
                <li>Full lifetime access</li>
                <li>Access on mobile and TV</li>
                <li>Certificate of completion</li>
            </ul>
    }
    const jscript = {
        title: "JavaScript For The Backend as well as Frontend",
        img: "https://miro.medium.com/max/1000/1*K26vJpKbNvZds4vwL9l4VA.jpeg",
        description: "To sustain in the world of web development, you need to know about the  java script, enroll now. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque dicta repellat minus necessitatibus, consectetur aspernatur aut veniam atque, explicabo deserunt quia pariatur magnam fugit velit? Voluptatibus eligendi adipisci eius.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque dicta repellat minus necessitatibus, consectetur aspernatur aut veniam atque, explicabo deserunt quia pariatur magnam fugit velit? Voluptatibus eligendi adipisci eius.",
        instructor: "Menio Lori",
        duration: "10hr",
        offer: "30% Off ",
        oPrice: "Original Price₹2,499",
        price: "Rs 1,749.0",
        include:
            <ul>
                <h1>This Course include</h1>
                <li>10 hours on-demand video</li>
                <li>180 downloadable resources</li>
                <li>Full lifetime access</li>
                <li>Access on mobile and TV</li>
                <li>Certificate of completion</li>
            </ul>
    }
    const ai = {
        title: "Artificial Intelligence, The Future.",
        img: "https://cdn.wallpapersafari.com/71/46/aM4T5r.jpg",
        description: "The upcoming generation and most demanding technology. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque dicta repellat minus necessitatibus, consectetur aspernatur aut veniam atque, explicabo deserunt quia pariatur magnam fugit velit? Voluptatibus eligendi adipisci eius.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque dicta repellat minus necessitatibus, consectetur aspernatur aut veniam atque, explicabo deserunt quia pariatur magnam fugit velit? Voluptatibus eligendi adipisci eius.",
        instructor: "Dr Jikish",
        duration: "9hr",
        offer: "31.3% Off",
        oPrice: "Original Price₹8,999",
        price: "Rs 6,182.3",
        include:
            <ul>
                <h1>This Course include</h1>
                <li>9 hours on-demand video</li>
                <li>130 downloadable resources</li>
                <li>Full lifetime access</li>
                <li>Access on mobile and TV</li>
                <li>Certificate of completion</li>
            </ul>
    }
    const ml = {
        title: "Machine Learning",
        img: "https://wallpapercave.com/wp/wp3205382.jpg",
        description: "start your machine learning, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque dicta repellat minus necessitatibus, consectetur aspernatur aut veniam atque, explicabo deserunt quia pariatur magnam fugit velit? Voluptatibus eligendi adipisci eius.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque dicta repellat minus necessitatibus, consectetur aspernatur aut veniam atque, explicabo deserunt quia pariatur magnam fugit velit? Voluptatibus eligendi adipisci eius.",
        instructor: "Anoin Fern",
        duration: "13.5hr",
        offer: "19.9% Off  "
        ,oPrice: "Original Price₹5,799",
        price: "Rs 4,644.9",
        include:
            <ul>
                <h1>This Course include</h1>
                <li>13.5 hours on-demand video</li>
                <li>200 downloadable resources</li>
                <li>Full lifetime access</li>
                <li>Access on mobile and TV</li>
                <li>Certificate of completion</li>
            </ul>
    }
    const datasc = {
        title: "Data Science",
        img: "https://cutewallpaper.org/21/data-science-wallpapers/Tips-that-Will-Help-Elevate-Your-Career-as-a-Data-Scientist.jpg",
        description: "Most valuable technology in th eupcoming year,Enroll Now. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque dicta repellat minus necessitatibus, consectetur aspernatur aut veniam atque, explicabo deserunt quia pariatur magnam fugit velit? Voluptatibus eligendi adipisci eius.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque dicta repellat minus necessitatibus, consectetur aspernatur aut veniam atque, explicabo deserunt quia pariatur magnam fugit velit? Voluptatibus eligendi adipisci eius.",
        instructor: "john Admin",
        duration: "14.5hr",
        offer: "33.6% Off",
        oPrice: "Original Price₹7,299",
        price: "Rs 4,846.5",
        include:
            <ul>
                <h1>This Course include</h1>
                <li>14.5 hours on-demand video</li>
                <li>200 downloadable resources</li>
                <li>Full lifetime access</li>
                <li>Access on mobile and TV</li>
                <li>Certificate of completion</li>
            </ul>
    }
    return (
        <courseContext.Provider value={{ c, java, jscript, ml, ai, datasc }}>
            {props.children}
        </courseContext.Provider>

    )
}

export default CourseState;