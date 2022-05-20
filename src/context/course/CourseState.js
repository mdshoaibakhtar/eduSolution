import React, { useState } from 'react'
import courseContext from './courseContext'

const CourseState = (props) => {
    // const s1 = {
    //     "name": "mdshoaibakhtar",
    //     "depat": "computer science"
    // }
    // const amit = [
    //     {
    //         "_id": "628477d30c2a133951604ce7",
    //         "user": "6281b1b09b11bad826a1c604",
    //         "title": "let us c",
    //         "tag": "Denish Ritchie",
    //         "date": "2022-05-18T04:36:35.662Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "628477e90c2a133951604ce9",
    //         "user": "6281b1b09b11bad826a1c604",
    //         "title": "c with mdshoaib",
    //         "tag": "mdshoaib",
    //         "date": "2022-05-18T04:36:57.666Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "628477f50c2a133951604ceb",
    //         "user": "6281b1b09b11bad826a1c604",
    //         "title": "Learn java with mdshoaib",
    //         "tag": "mdshoaib",
    //         "date": "2022-05-18T04:37:09.531Z",
    //         "__v": 0
    //     }]
    // const [student, setstudent] = useState(amit);
    // const [state, setstate] = useState(s1);
    // const update = () => {
    //     setTimeout(() => {
    //         setstate({
    //             "name": "azaan akhtar",
    //             "depat": "computer science and engineering"
    //         })
    //     }, 5000);
    // }
    // const[corse1,setcorse] = useState(learnC);

    const c = {
        img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Learn c with me",
        description: "This is my descrpiton for the following subjects Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque dicta repellat minus necessitatibus, consectetur aspernatur aut veniam atque, explicabo deserunt quia pariatur magnam fugit velit? Voluptatibus eligendi adipisci eius.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque dicta repellat minus necessitatibus, consectetur aspernatur aut veniam atque, explicabo deserunt quia pariatur magnam fugit velit? Voluptatibus eligendi adipisci eius.",
        instructor: "Denish ritchie",
        duration: "12.5hr",
        offer: "8.6% Off  Original Price₹3,499",
        price: "Rs 799.0",
        include:
            <ul>
                <h1>This Course include</h1>
                <li>45.5 hours on-demand video</li>
                <li>200 downloadable resources</li>
                <li>Full lifetime access</li>
                <li>Access on mobile and TV</li>
                <li>Certificate of completion</li>
                <li>context api se aaya hu bhai</li>
            </ul>
    }
    const java = {
        img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Learn c with me",
        description: "This is my descrpiton for the following subjects Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque dicta repellat minus necessitatibus, consectetur aspernatur aut veniam atque, explicabo deserunt quia pariatur magnam fugit velit? Voluptatibus eligendi adipisci eius.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque dicta repellat minus necessitatibus, consectetur aspernatur aut veniam atque, explicabo deserunt quia pariatur magnam fugit velit? Voluptatibus eligendi adipisci eius.",
        instructor: "Denish ritchie",
        duration: "12.5hr",
        offer: "8.6% Off  Original Price₹3,499",
        price: "Rs 799.0",
        include:
            <ul>
                <h1>This Course include</h1>
                <li>45.5 hours on-demand video</li>
                <li>200 downloadable resources</li>
                <li>Full lifetime access</li>
                <li>Access on mobile and TV</li>
                <li>Certificate of completion</li>
                <li>context api se aaya hu bhai</li>
            </ul>
    }
    const jscript = {
        img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Learn c with me",
        description: "This is my descrpiton for the following subjects Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque dicta repellat minus necessitatibus, consectetur aspernatur aut veniam atque, explicabo deserunt quia pariatur magnam fugit velit? Voluptatibus eligendi adipisci eius.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque dicta repellat minus necessitatibus, consectetur aspernatur aut veniam atque, explicabo deserunt quia pariatur magnam fugit velit? Voluptatibus eligendi adipisci eius.",
        instructor: "Denish ritchie",
        duration: "12.5hr",
        offer: "8.6% Off  Original Price₹3,499",
        price: "Rs 799.0",
        include:
            <ul>
                <h1>This Course include</h1>
                <li>45.5 hours on-demand video</li>
                <li>200 downloadable resources</li>
                <li>Full lifetime access</li>
                <li>Access on mobile and TV</li>
                <li>Certificate of completion</li>
                <li>context api se aaya hu bhai</li>
            </ul>
    }
    const ai = {
        img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Learn c with me",
        description: "This is my descrpiton for the following subjects Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque dicta repellat minus necessitatibus, consectetur aspernatur aut veniam atque, explicabo deserunt quia pariatur magnam fugit velit? Voluptatibus eligendi adipisci eius.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque dicta repellat minus necessitatibus, consectetur aspernatur aut veniam atque, explicabo deserunt quia pariatur magnam fugit velit? Voluptatibus eligendi adipisci eius.",
        instructor: "Denish ritchie",
        duration: "12.5hr",
        offer: "8.6% Off  Original Price₹3,499",
        price: "Rs 799.0",
        include:
            <ul>
                <h1>This Course include</h1>
                <li>45.5 hours on-demand video</li>
                <li>200 downloadable resources</li>
                <li>Full lifetime access</li>
                <li>Access on mobile and TV</li>
                <li>Certificate of completion</li>
                <li>context api se aaya hu bhai</li>
            </ul>
    }
    const ml = {
        img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Learn c with me",
        description: "This is my descrpiton for the following subjects Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque dicta repellat minus necessitatibus, consectetur aspernatur aut veniam atque, explicabo deserunt quia pariatur magnam fugit velit? Voluptatibus eligendi adipisci eius.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque dicta repellat minus necessitatibus, consectetur aspernatur aut veniam atque, explicabo deserunt quia pariatur magnam fugit velit? Voluptatibus eligendi adipisci eius.",
        instructor: "Denish ritchie",
        duration: "12.5hr",
        offer: "8.6% Off  Original Price₹3,499",
        price: "Rs 799.0",
        include:
            <ul>
                <h1>This Course include</h1>
                <li>45.5 hours on-demand video</li>
                <li>200 downloadable resources</li>
                <li>Full lifetime access</li>
                <li>Access on mobile and TV</li>
                <li>Certificate of completion</li>
                <li>context api se aaya hu bhai</li>
            </ul>
    }
    const datasc = {
        img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Learn c with me",
        description: "This is my descrpiton for the following subjects Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque dicta repellat minus necessitatibus, consectetur aspernatur aut veniam atque, explicabo deserunt quia pariatur magnam fugit velit? Voluptatibus eligendi adipisci eius.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque dicta repellat minus necessitatibus, consectetur aspernatur aut veniam atque, explicabo deserunt quia pariatur magnam fugit velit? Voluptatibus eligendi adipisci eius.",
        instructor: "Denish ritchie",
        duration: "12.5hr",
        offer: "8.6% Off  Original Price₹3,499",
        price: "Rs 799.0",
        include:
            <ul>
                <h1>This Course include</h1>
                <li>45.5 hours on-demand video</li>
                <li>200 downloadable resources</li>
                <li>Full lifetime access</li>
                <li>Access on mobile and TV</li>
                <li>Certificate of completion</li>
                <li>context api se aaya hu bhai</li>
            </ul>
    }
    return (
        <courseContext.Provider value={{ c, java, jscript, ml, ai, datasc }}>
            {props.children}
        </courseContext.Provider>

    )
}

export default CourseState;