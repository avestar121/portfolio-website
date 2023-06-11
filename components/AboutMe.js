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
        <p className='aboumePar'>Hi, I&apos;m Aleksey, I am a passionate and dedicated full-stack developer based in Warsaw.
I am communicative, responsible, and not afraid to take on tasks of any complexity. When I&apos;m not coding, you can find me working out at the gym, reading books, or playing video games. Sport inspires me to think creatively and approach problem-solving from different angles.
I&apos;ve been fascinated by computers ever since my childhood. I&apos;ve always had a curiosity for new technologies and enjoyed coding for fun. When I had to move to Warsaw due to the war, I made the decision that programming would be my future career. From that moment onward, I&apos;ve dedicated myself to coding every single day, constantly learning and working on small projects to break into the industry.
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