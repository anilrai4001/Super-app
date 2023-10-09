import React from 'react'
import './home.css'
import UserImage from '../../assets/user-image.png'
import Capsule from '../../components/Capsule';

import { useState, useEffect } from 'react';
import axios from 'axios';

// import { useRef } from 'react';

function Home() {
  const userDetails = JSON.parse(localStorage.getItem('user-details'));
  const userChoicesArray = JSON.parse(localStorage.getItem('userPreference'));
  const userCategories = userChoicesArray.map((ele)=><Capsule key={ele} input={ele} backgroundColor='#9F94FF' hasCross={false} />)

  const [currentDate,setCurrentDate] = useState(new Date());
  const [weatherData, setWeatherDate] = useState({});
  const [newsData, setNewsData] = useState();
  
  useEffect(()=>{
    const intervalId = setInterval(()=>setCurrentDate(new Date()),1000);
    return ()=>clearInterval(intervalId);
  },[])

  useEffect(()=>{
    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=28.6139&lon=77.2090&appid=2fd0a7dab74615c5b2fc3005c0414f4d';
    axios.get(apiURL)
          .then((res)=>{
            setWeatherDate(res.data);
          })
          .catch((err)=>{
            console.log(err.message);
          });
  },[])

  useEffect(()=>{
    const apiURL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=e0aa803559034f45ac7faf06dca54005';
    axios.get(apiURL)
          .then((res)=>{
            // console.log(res.data);
            setNewsData(res.data);
          })
          .catch((err)=>{
            console.log(err.message);
          });
  },[])

  








  // Format the date in M-D-YYYY format
  const formattedDate = `${
    currentDate.getMonth() + 1
  }-${currentDate.getDate()}-${currentDate.getFullYear()}`;

  // Format the time in hh:mm A format
  const formattedTime = currentDate.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });







  let userNotes = '';
  if(localStorage.getItem('userNotes')){
    userNotes=localStorage.getItem('userNotes');
  }
  const [notes,setNotes] = useState(userNotes)
  const handleNotes = (e)=>{
    // console.log(e.target.value);
    userNotes=e.target.value;
    setNotes(userNotes);
    localStorage.setItem('userNotes',userNotes);
  }

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
            <div className='weather'>
              <div className='date-and-time' >
                <span className='date'>{formattedDate}</span>
                <span className='time'>{formattedTime}</span>
              </div>
              <div className='live-weather'>
                <span>Weather:<br/>{weatherData.weather?.[0]?.description?.toUpperCase()}</span>
                <div className='vertical-line'></div>
                <span>Temp:<br/>{(weatherData.main?.temp-273.15).toFixed(2)} °C</span>
                <div className='vertical-line'></div>
                <span>Wind:<br/>{(weatherData.wind?.speed*3.6).toFixed(2)} km/h</span>
                
              </div>
            </div>
          </div>
          <div className='upper-right'>
            <h2>All Notes</h2>
            <textarea onChange={handleNotes} defaultValue={notes}>
            </textarea>
          </div>

        </div>
        <div className='lower-section'>dfds</div>
      </div>
      <div className='right-section'>
        <div className='news-image' >
          <img src={newsData?.articles[0]?.urlToImage} alt='' style={{height:'100%', width:'100%', objectFit:'cover'}}/>
          <div className='news-headline'>{newsData?.articles[0]?.title}</div>
        </div>
        <div className='news-description' >{newsData?.articles[0]?.description}</div>
        
      </div>
    </div>
  )
}

export default Home
