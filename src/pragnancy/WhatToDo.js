import React, { useRef } from 'react';
import Navbar from '../Components/Navbar';
import Autotyping from '../Components/Autotyping';
import Basics from './Basics';
import Plan from './Plan';
import Body from './Body';
import { useNavigate } from 'react-router-dom';
import Suggestion from './Suggestion';

function WhatToDo() {
  const navigate = useNavigate()
  const basicsRef = useRef(null);
  const planRef = useRef(null);
  const bodyRef = useRef(null);
  const sugRef = useRef(null);
const handletip = ()=>{
  navigate('/tips')
}
  const handleScrollToBasics = () => {
    basicsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToPlan = () => {
    planRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToBody = () => {
    bodyRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleScrollToSugg = () => {
    sugRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='main-wtd'>
      <Navbar />
      <div className='wtd-main'>
        <h2 className='wtd-h2'>
          <Autotyping text={"I'm pregnant: What do I do now?"} />
        </h2>
        <p className='wtd-p'>
          Great news! You're expecting a baby, and it's a cause for celebration. Amidst the excitement and occasional
          moments of anxiety, you might find yourself contemplating the next steps on this incredible journey. To help
          guide you, here are some essential tasks and actions to consider while eagerly awaiting the arrival of your
          little one.
        </p>
        <div className='img-wtd-22' onClick={handletip}>
          <img src='img/pregnancy.webp' className='wtd-img' />
          <span className='span-img-2'>
            <h4>
              11 tips for pregnant women.
              <span style={{ color: 'blue', textDecoration: 'underline' }}>Click to know</span>
            </h4>
            <img src='img/tips.webp' className='wtd-img-2' />
          </span>
        </div>
        <ul className='wtd-ul'>
          <li onClick={handleScrollToBasics}>Start with pregnancy basics</li>
          <li onClick={handleScrollToPlan}>Plan ahead before you have a baby</li>
          <li onClick={handleScrollToBody}>Take care of your body and baby</li>
          <li onClick={handleScrollToSugg}>Suggestion based on pregnancy week</li>
        </ul>
        <div ref={basicsRef}>
          <Basics />
        </div>
        <div ref={planRef}>
          <Plan />
        </div>
        <div ref={bodyRef}>
          <Body/>
        </div>
        <div ref={sugRef}>
          <Suggestion/>
        </div>
      </div>
    </div>
  );
}

export default WhatToDo;