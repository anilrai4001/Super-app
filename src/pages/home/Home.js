import React from 'react'
import './home.css'
import UserImage from '../../assets/user-image.png'
import Capsule from '../../components/Capsule';

function Home() {
  const userDetails = JSON.parse(localStorage.getItem('user-details'));
  const userChoicesArray = JSON.parse(localStorage.getItem('userPreference'));
  const userCategories = userChoicesArray.map((ele)=><Capsule input={ele} backgroundColor='#9F94FF' hasCross={false} />)
  return (
    <div className='home'>
      <div className='left-section'>
        <div className='upper-section'>
          <div className='upper-left'>
            <div className='user-profile' style={{overflow:'scroll'}}>
              <img src={UserImage} alt='' style={{height: '100%'}}/>
              <div className='user-details' style={{paddingRight:'0'}}>
                <p className='user-name'>{userDetails.Name}</p>
                <p className='user-email'>{userDetails.Email}</p>
                <p className='user-username'>{userDetails.UserName}</p>
                <div className='user-choice' style={{display:'flex', flexWrap:'wrap'}}>
                  {userCategories}
                </div>
              </div>
            </div>
            <div className='weather'>sdfs</div>
          </div>
          <div className='upper-right'>
            <h2>All Notes</h2>
            <textarea>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            </textarea>
          </div>

        </div>
        <div className='lower-section'>dfds</div>
      </div>
      <div className='right-section'>dfsd</div>
    </div>
  )
}

export default Home
