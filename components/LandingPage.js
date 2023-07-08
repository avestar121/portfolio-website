import React, { useEffect, useState } from 'react';
import AnimatedBackground from './AnimatedBackground';
import '../styles/animated-background.css';


const LandingPage = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <div>
      <AnimatedBackground />
      <div className={`landingPage ${showText ? 'show' : ''}`} id="home">
        <h1 className="landingHeader">HI, I'M ALEKSEY, A FULL-STACK DEVELOPER</h1>
        <div className="socialLinks">
          <a href="https://github.com/avestar121"><img src="/github.png" alt="github" className="socialsImage"/></a>
          <a href="mailto:avestar121@gmail.com"><img src="/envelope.png" alt="mail" className="socialsImage"/></a>
          <a href="https://www.linkedin.com/in/asotnykov/"><img src="/linkedin.png" alt="linkedin" className="socialsImage"/></a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
