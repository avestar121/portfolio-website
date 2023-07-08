'use client'
import React, { useEffect, useState } from 'react';

const LandingPage = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);
  return (
    <div className='landingPage' id="home">
        <h1 className={`landingHeader ${showText ? 'show' : ''}`}>HI, I&apos;M ALEKSEY, A FULL-STACK DEVELOPER</h1>
        <div className='socialLinks'>
          <a href='https://github.com/avestar121'><img src="/github.png" alt="github" className="socialsImage"/></a>
          <a href='mailto:avestar121@gmail.com'><img src="/envelope.png" alt="mail" className="socialsImage"/></a>
          <a href='https://www.linkedin.com/in/asotnykov/'><img src="/linkedin.png" alt="github" className="socialsImage"/></a>
        </div>
  </div>
  )
}

export default LandingPage