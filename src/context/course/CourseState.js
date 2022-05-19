import React, { useState } from 'react'
import courseContext from './courseContext'

const CourseState = (props) => {
    const s1 = {
        "name": "mdshoaibakhtar",
        "depat": "computer science"
    }

    const amit = [
        {
            "_id": "628477d30c2a133951604ce7",
            "user": "6281b1b09b11bad826a1c604",
            "title": "let us c",
            "tag": "Denish Ritchie",
            "date": "2022-05-18T04:36:35.662Z",
            "__v": 0
        },
        {
            "_id": "628477e90c2a133951604ce9",
            "user": "6281b1b09b11bad826a1c604",
            "title": "c with mdshoaib",
            "tag": "mdshoaib",
            "date": "2022-05-18T04:36:57.666Z",
            "__v": 0
        },
        {
            "_id": "628477f50c2a133951604ceb",
            "user": "6281b1b09b11bad826a1c604",
            "title": "Learn java with mdshoaib",
            "tag": "mdshoaib",
            "date": "2022-05-18T04:37:09.531Z",
            "__v": 0
        }]

    const [student, setstudent] = useState(amit);

    const [state, setstate] = useState(s1);

    const update = () => {
        setTimeout(() => {
            setstate({
                "name": "azaan akhtar",
                "depat": "computer science and engineering"
            })
        }, 5000);
    }
    return (
        <courseContext.Provider value={{student,setstudent}}>
            {props.children}
        </courseContext.Provider>

    )
}

export default CourseState;