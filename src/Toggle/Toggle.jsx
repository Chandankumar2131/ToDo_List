import React, { useState } from 'react'
import './Toggle.css'

export default function Toggle() {
const[isOn, setIsOn]= useState(false)

const handleToggle =()=>{
setIsOn(!isOn)
}

  return (
    <div className='div1' style={{backgroundColor:isOn? "rgb(89, 242, 89)":""}} onClick={handleToggle}>
    
        <div className={`div2 ${isOn? "ON":"OFF"}`}>
            <span className='spn'>{isOn? "ON":"OFF"}</span>
        </div>
    </div>
  )
}
