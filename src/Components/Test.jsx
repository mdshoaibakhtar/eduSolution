import React, { useContext, useEffect} from 'react'
import courseContext from '../context/course/courseContext';

const inline = {
    textAlign: "center",
    margin: "1rem 0"
}

export default function Test() {
    const context = useContext(courseContext);
    const { title, author,price } = context;

    return (
        <>
            {/* <h1 style={inline}>I am Tester {context.learnscript.author}</h1>
            <h1 style={inline}>I am Tester {context.learncss.author}</h1> */}
            {/* <div className="container">
                <h2>Your Enrolled Course</h2>
                <h2>you are enrolled in </h2>
                {student.map((st) => {
                    return <li key={st._id}>{st.title}</li>
                    })}
            </div> */}
            
        </>
    )
}
