import React from 'react';
import './capsule.css';

function Capsule({input,userPreference, setUserPreference}) {

  const handleClick = ()=>{
    let newArr = [...userPreference];
    newArr = newArr.filter((ele)=>ele!==input);
    setUserPreference(newArr);
  }

  return (
    <div className='capsule' >{input} <span onClick={handleClick}>X</span></div>
  )
}

export default Capsule