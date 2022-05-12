import React from 'react'

let inline={
    width:"100px",height:"100px",backgroundColor:"red"
}

export default function Check() {
    function run(){
        console.log('clicked hua');
        document.querySelector('.box').style.width="300px";
        document.querySelector('.box').style.transition="all 0.5s ease-out";
    }
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <div className="box" style={inline} onClick={run}>
          click me
      </div>
    </div>
  )
}
