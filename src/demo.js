import React from "react";
import './css/demo.css'

const DemoDiv=()=>{
return(

    <div className="main">
        <div className="main-1">
            <p>transform: translate(100px)</p>
        </div>
        <div className="main-2">
            <p>transform: translateY(100px)</p>
        </div>
        <div className="main-3">
            <p>transform: skew(20deg)</p>
        </div>
    </div>
)
}
export default DemoDiv;