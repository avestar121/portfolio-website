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
        <p className='aboumePar'>Hi, i&apos;m Aleksey, I am passionate and dedicated full-stack developer. When I&apos;m not coding, you can find me working out at the gym, reading books, or playing video games. Sport inspires me to think creatively and approach problem-solving from different angles.</p>
  
        <p className='aboumePar'>
        For me initially, coding was simply a means to satisfy my curiosity and challenge myself intellectually, but as I delved deeper into the coding, I discovered its
endless possibilities for creativity.Now coding has become more than just a hobby or a means of personal exploration, it has become my chosen career path.
        </p>
  
        <p className='aboumePar'>
        Also I&apos;m fluent in three languages: English, Ukrainian, and Russian, and I&apos;m currently studying Polish and German. I am communicative and not afraid to take on tasks of any complexity. If you have a project in mind or would like to collaborate, feel free to<span><a href="#contact" style={{color: "#5867C9"}}> get in touch.</a></span></p>

      <p className='aboutMeIdeas'>Let&apos;s work together to bring your ideas to life!</p>
      </div>
    </div>
  </div>
  )
}

export default AboutMe