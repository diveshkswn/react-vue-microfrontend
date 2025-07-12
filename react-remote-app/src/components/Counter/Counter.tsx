import "./Counter.css"
import React, { useState } from "react"

export const Counter:React.FC = ()=>{
const [counter,setCounter] = useState(0)
    return (
        <div className="react-counter-container">
            <h4>Simple React Counter</h4>
            <button onClick={()=>setCounter(p=>p-1)}>-</button>
            <span>{counter}</span>
            <button onClick={()=>setCounter(p=>p+1)}>+</button>
        </div>
    )

}
