import React from 'react'
import './category.css'
import { useRef } from 'react';


function Category({name,image,color,userPreference,setUserPreference}) {

  const pRef = useRef(null);

  const handlePreference = ()=>{
    let category = pRef.current.textContent;
    let newPreference = [...userPreference];
    if(newPreference.includes(category)){
      newPreference=newPreference.filter((ele)=>ele!==category);
    }else{
      newPreference.push(category);
    }
    setUserPreference(newPreference);
  }

  return (
    <div className={`Category ${userPreference.includes(name) ? 'bordered' : ''}`} style={{backgroundColor:color}}  onClick={handlePreference}>
      <p ref={pRef}>{name}</p>
      <img src={image} alt={{name}+' banner image'} />
    </div>
  )
}

export default Category