import React,{ useState} from 'react'

const getLocal=()=>{
    let show= localStorage.getItem('keyNote');
    console.log(show);
}

const Form = () => {
    const [name, setname] = useState();
    const [fname, setfname] = useState(); 

    const handleChange = (e) => {
        setname(e.target.value);
    }
    const handleClick = (e) => {
        localStorage.setItem('keyNote',name);
        setfname(name);
        getLocal();
    }

    const css = {
        border:"2px solid red",
        textAlign:"centre",
        padding:"2rem"
    }
    return (
        <>
        <div className="container" style={css}>
            <h1>Hello {fname}</h1>
            <input type="text" name='name' placeholder='Enter Your Name' onChange={handleChange} style={{color:"red",width:"13rem",marginTop:"1rem"}}/>
            <button onClick={handleClick} style={{color:"red",width:"3rem",marginTop:"1rem"}}>Save</button>
        </div>
        </>
    )
}

export default Form
