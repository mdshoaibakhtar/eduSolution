import React, { useContext, useEffect } from 'react'
import courseContext from '../context/course/courseContext';


export default function Test() {
    const context = useContext(courseContext);
    const {student, setstudent} = context;
    // useEffect(() => {
    //     context.update();
    // })
    return (
        <>
            <h1>I am Tester</h1>
            <div className="container">
                <h2>Your Enrolled Course</h2>
                <h2>you are enrolled in </h2>
                {student.map((st)=>{
                    return <li key={st._id}>{st.title}</li>
                    
                })}

                <div className="local">
                    <form action="#">
                    <input type="text" name='name' id='name'/>
                    <button>Save</button>
                    </form>
                </div>
                <div className="show">
                    <li>md shoaib akhtar</li>
                </div>
            </div>
        </>
    )
}
