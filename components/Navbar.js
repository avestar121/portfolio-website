"use client"
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [height, setHeight] = useState(0);
  const [isFirst, setisFirst] = useState(true);
  const [isSecond, setisSecond] = useState(false);
  const [isThird, setisThird] = useState(false);
  const [isFourth, setisFourth] = useState(false);
  const [isFifth, setisFifth] = useState(false);

  useEffect(() => {
    const firstScrollHeight = Math.floor(document.body.scrollHeight / 5 );
    setHeight(firstScrollHeight);

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setisFirst(scrollPosition < firstScrollHeight - 150);
      setisSecond(scrollPosition >= firstScrollHeight - 150 && scrollPosition < -350 + firstScrollHeight * 2);
      setisThird(scrollPosition >= -350 + firstScrollHeight * 2 && scrollPosition < -550 + firstScrollHeight * 3 );
      setisFourth(scrollPosition >= -550 + firstScrollHeight * 3 && scrollPosition < -150 + firstScrollHeight * 4);
      setisFifth(scrollPosition >= -150 + firstScrollHeight * 4);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`navbarWrapper`}>
      <div className='title'>Alex</div>
      <ul className={`navigation ${isActive ? 'active' : ''}`}>
        <li className={`navitem `}>
          <a href="#home" className={`navlink ${isFirst ? 'onpage' : ''}`}>Home</a>
        </li>
        <li className='navitem'>
          <a href="#skills" className={`navlink ${isSecond ? 'onpage' : ''}`}>Skills</a>
        </li>
        <li className='navitem'>
          <a href="#aboutme" className={`navlink ${isThird ? 'onpage' : ''}`}>About Me</a>
        </li>
        <li className='navitem'>
          <a href="#projects" className={`navlink ${isFourth ? 'onpage' : ''}`}>Projects</a>
        </li>
        <li className='navitem'>
          <a href="#contact" className={`navlink ${isFifth ? 'onpage' : ''}`}>Contact</a>
        </li>
      </ul>
      <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleHamburger}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
    </div>
  );
};

export default Navbar;
