import React from 'react'

const AboutMe = () => {
  return (
    <div className='aboutMe' id='aboutme'>
    <div className='projectsdescr'>
      <p className='aboutHead'>ABOUT ME</p>
      <div className='underline'></div>
      <p className='aboutmesmall'>Here you will find more information about me</p>
      <div className='getToKnow'>
        <h3 className='aboutmesmall'>Get to know me!</h3>
        <br/>
        <p className='aboumePar'>Hi, i'm Aleksey, but you can call me Alex, I am passionate and dedicated full-stack developer. When I'm not coding, you can find me playing videogames, reading books, or working out at the gym. Sport inspires me to think creatively and approach problem-solving from different angles. I'm fluent in three languages: English, Ukrainian, and Russian, and I'm currently studying Polish and German. I am communicative and not afraid to take on tasks of any complexity. If you have a project in mind or would like to collaborate, feel free to<span><a href="#contact" style={{color: "#5867C9"}}> get in touch.</a></span></p>
      <br/>
      <p className='aboutMeIdeas'>Let&apos;s work together to bring your ideas to life!</p>
      </div>
    </div>
  </div>
  )
}

export default AboutMe