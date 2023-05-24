'use client'
import React, { useEffect, useState } from 'react';
import ChevronDown from '../assets/ChevronDown'

const LandingPage = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);
  return (
    <div className='landingPage' id="home">
        <h1 className={`landingHeader ${showText ? 'show' : ''}`}>HI, I&apos;M ALEX, A FULL-STACK DEVELOPER</h1>
        <a className='btn btn--bg' href='#skills'><ChevronDown /></a>
  </div>
  )
}

export default LandingPage