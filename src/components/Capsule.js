import React from 'react';
import './capsule.css';

function Capsule({input,userPreference, setUserPreference,backgroundColor,hasCross}) {

  const handleClick = ()=>{
    let newArr = [...userPreference];
    newArr = newArr.filter((ele)=>ele!==input);
    setUserPreference(newArr);
  }

  return (
    <div className='capsule' style={{backgroundColor: backgroundColor}} >{input} <span onClick={handleClick} style={{display:`${hasCross?'':'none'}`}}>X</span></div>
  )
}

export default Capsule