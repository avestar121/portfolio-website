import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [height, setHeight] = useState(0);
  const [sections, setSections] = useState([
    { id: 'home', label: 'Home', isActive: false },
    { id: 'skills', label: 'Skills', isActive: false },
    { id: 'aboutme', label: 'About Me', isActive: false },
    { id: 'projects', label: 'Projects', isActive: false },
    { id: 'contact', label: 'Contact', isActive: false },
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
    
      setSections((prevSections) =>
        prevSections.map((section, index) => {
          const sectionStart = height * index;
          const sectionEnd = height * (index + 1);
    
          return {
            ...section,
            isActive: scrollPosition >= sectionStart - 300 && scrollPosition < sectionEnd - 300,
          };
        })
      );
    };
    

    const firstScrollHeight = Math.floor(document.body.scrollHeight / sections.length);
    setHeight(firstScrollHeight);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [height, sections.length]);

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`navbarWrapper`}>
      <div className='title'>Alex</div>
      <ul className={`navigation ${isActive ? 'active' : ''}`}>
        {sections.map((section) => (
          <li className={`navitem`} key={section.id}>
            <a
              href={`#${section.id}`}
              className={`navlink ${section.isActive ? 'onpage' : ''}`}
            >
              {section.label}
            </a>
          </li>
        ))}
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
