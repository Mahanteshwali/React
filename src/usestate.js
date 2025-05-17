import React ,{useState,useEffect}from "react";
const Demo=()=>{

    const [name,currentname]=useState(" python");

    const changename=()=>{
        currentname(name!=="python" ?"python":" java")
    }
    return(
        <div>
        <h1>Name:{name}</h1>
        <button onClick={changename} className="btn">Change name</button>
        </div>
    )
}

export default Demo;