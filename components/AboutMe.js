import React from 'react'

const AboutMe = () => {
  return (
    <div className='aboutMe' id='aboutme'>
    <div className='projectsdescr'>
      <p className='aboutHead'>ABOUT ME</p>
      <div className='underline'></div>
      <p className='aboutmesmall'>Here you will find more information about me</p>
    </div>
      <div className='getToKnow'>
        <h3>Get to know me!</h3>
        <br/>
        <p>Hello there! I'm Aleksey, but you can call me Alex, I am a passionate and dedicated full-stack developer.


When I'm not coding, you can find me playing videogames or at the gym. Sport inspires me to think creatively and approach problem-solving from different angles.

If you have a project in mind or would like to collaborate, feel free to <span><a href="#contact" style={{color: "#5867C9"}}>get in touch.</a></span></p>
      <br/>
      <p>Let's work together to bring your ideas to life!</p>
      </div>
  </div>
  )
}

export default AboutMe