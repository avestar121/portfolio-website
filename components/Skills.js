import React from 'react'
import ChevronDown from '../assets/ChevronDown'

const Skills = () => {
  return (
  <div className='skillsContainer' id="skills">
    <div className='projectsdescr'>
      <p className='smallTitle'>MY SKILLS</p>
      <div className='underline'></div>
    </div>
    <ul className='skillsList'>
      <li className='skillBox'>JavaScript</li>
      <li className='skillBox'>HTML</li>
      <li className='skillBox'>CSS</li>
      <li className='skillBox'>Typescript</li>
      <li className='skillBox'>React</li>
      <li className='skillBox'>Angular</li>
      <li className='skillBox'>Redux</li>
      <li className='skillBox'>Tailwind</li>
      <li className='skillBox'>Express.js</li>
      <li className='skillBox'>Node.js</li>
      <li className='skillBox'>PostgreSQL</li>
      <li className='skillBox'>SQL</li>
      <li className='skillBox'>PHP</li>
      <li className='skillBox'>MongoDB</li>
      <li className='skillBox'>Sanity</li>
      <li className='skillBox'>Git</li>
      <li className='skillBox'>GitHub</li>
      <li className='skillBox'>Netlify</li>
      <li className='skillBox'>Vercel</li>
      <li className='skillBox'>Webpack</li>
      <li className='skillBox'>Heroku</li>
      <li className='skillBox'>Wordpress</li>
    </ul>
    <br />
    <p className='aboumePar'>
  Hi, I&apos;m Aleksey, I am a passionate and dedicated full-stack developer. I am communicative, responsible, and not afraid to take on tasks of any complexity. When I&apos;m not coding, you can find me working out at the gym, reading books, or playing video games. Sport inspires me to think creatively and approach problem-solving from different angles. I&apos;ve been fascinated by computers ever since my childhood. I&apos;ve always had a curiosity for new technologies and enjoyed coding for fun. When I moved to Warsaw, I made the decision that programming would be my future career. From that moment onward, I&apos;ve dedicated myself to coding every single day, constantly learning and working on small projects to break into the industry.
</p>

<p className='aboumePar'>
  Also I&apos;m fluent in three languages: English, Ukrainian, and Russian, and I&apos;m currently studying Polish and German. I am communicative and not afraid to take on tasks of any complexity. If you have a project in mind or would like to collaborate, feel free to
  <span>
    <a href='#contact' style={{ color: '#5867C9' }}> get in touch.</a>
  </span>
</p>

<p className='aboutMeIdeas'>
  Let&apos;s work together to bring your ideas to life!
</p>

  </div>
  )
}

export default Skills