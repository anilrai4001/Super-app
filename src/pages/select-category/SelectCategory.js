import React from 'react'
import Capsule from '../../components/Capsule';
import './selectCategory.css'
import Error from '../../assets/error.png'
import Category from '../../components/Category';

import Drama from '../../assets/drama.png';
import Romance from '../../assets/romance.png';
import Thriller from '../../assets/thriller.png';
import Western from '../../assets/western.png';
import Horror from '../../assets/horror.png';
import Fantasy from '../../assets/fantasy.png';
import Music from '../../assets/music.png';
import Fiction from '../../assets/fiction.png';
import Action from '../../assets/action.png';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SelectCategory = () => {

  
  
  const categories = [
    {name:'Action', image:Action, color:'#FF5209'},
    {name:'Drama', image:Drama, color:'#D7A4FF' },
    {name:'Romance', image:Romance, color:'#148A08' },
    {name:'Thriller', image:Thriller, color:'#84C2FF' },
    {name:'Western', image:Western, color:'#902500' },
    {name:'Horror', image:Horror, color:'#7358FF' },
    {name:'Fantasy', image:Fantasy, color:'#FF4ADE' },
    {name:'Music', image:Music, color:'#E61E32' },
    {name:'Fiction', image:Fiction, color:'#6CD061' },
  ]

  const [userPreference,setUserPreference] = useState([]);

  const displayCategories = categories.map((ele)=><Category key={ele.name} name={ele.name} image={ele.image} color={ele.color} userPreference={userPreference} setUserPreference={setUserPreference} />)

  const chosenCategories = userPreference.map((ele)=><Capsule key={ele} input={ele} userPreference={userPreference} setUserPreference={setUserPreference} hasCross={true} />);

  const Navigate = useNavigate();

  const validateAndProcede = ()=>{
    if(userPreference.length>=3){
      localStorage.setItem('userPreference', JSON.stringify(userPreference));
      Navigate('/home');
    }
  }

  return (
    <div className='SelectCategory'>
      <div className='display-section'>
        <div className='title'>Super app</div>
        <div className='heading'>Choose your<br/>entertainment<br/>category</div>
        <div className='user-choice'>{chosenCategories}</div>
        {userPreference.length<3 ? <div className='category-error'><img src={Error} alt='Error logo'/>Minimum 3 category required</div> : ''}
      </div>



      <div className='category-section'>
        <div className='square-container'>
          {displayCategories}
        </div>
        <div className='capsule next' onClick={validateAndProcede}>
          Next Page
        </div>
        
      </div>

    </div>
  )
}

export default  SelectCategory;

