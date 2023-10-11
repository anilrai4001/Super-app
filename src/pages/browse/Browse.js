import React from 'react'
import './browse.css'
import userProfile from '../../assets/user-profile.png'

import Gener from '../../components/Gener'
import { useNavigate } from 'react-router-dom'


function Browse() {



  
  const categories = JSON.parse(localStorage.getItem('userPreference'));

  const showCategories = categories.map((ele)=><Gener key={ele} title={ele} />);

  const Navigate = useNavigate();
  const handleBrowse = ()=>{
    Navigate('/select-category')
  }

  return (
    <div className='browse'>

      <div className='navBar'>
        <h2>Super app</h2>
        <div className='imageContainer'>
          <img src={userProfile} alt='user-profile'/>
        </div>
      </div>

      <h3>Entertainment according to your choice</h3>

    <div style={{width:'100%'}}>
      {showCategories}

    </div>

    <div className='capsule' style={{position:'fixed', bottom:'0.5%',right:'4%',cursor:'pointer'}} onClick={handleBrowse}>
        Select Category
    </div>

    </div>
  )
}

export default Browse