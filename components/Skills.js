import React from 'react'

const Skills = () => {
  return (
  <div className='skillsContainer' id="skills">
    <div className='projectsdescr'>
      <p className='smallTitle'>MY SKILLS</p>
      <div className='underline'></div>
      <p className='skillstop3'>My skills</p>
    </div>
    <div className='skilllistContainer'>
    <div className="skillList"> 
      <div className="skillBox">
        <img src="https://cdn-icons-png.flaticon.com/512/2721/2721609.png" alt="Frontend" className="skillImage"/>
        <h3 className="skillTitle">Frontend</h3>
        <div className='skills1by1'>
          <p className='skillDescription'>HTML</p>
          <p className='skillDescription'>CSS</p>
          <p className='skillDescription'>Java Script</p>
        </div>
        <div className='skills1by1'>
          <p className='skillDescription'>React</p>
          <p className='skillDescription'>Redux</p>
          <p className='skillDescription'>Taiwind</p>
        </div>
      </div>
      <div className="skillBox">
        <img src="https://static.thenounproject.com/png/3905512-200.png" alt="Backend" className="skillImage"/>
        <h3 className="skillTitle">Backend</h3>
        <div className='skills1by1'>
          <p className='skillDescription'>Node.js</p>
          <p className='skillDescription'>Express.js</p>
          <p className='skillDescription'>PostgreSQL</p>
        </div>
        <div className='skills1by1'>
          <p className='skillDescription'>Sanity</p>
          <p className='skillDescription'>RESTful API</p>
          <p className='skillDescription'>Mongo.db</p>
        </div>
      </div>
      <div className="skillBox">
        <img src="https://icon-library.com/images/79ec7e7b9c_10678.png" alt="Other" className="skillImage"/>
        <h3 className="skillTitle">Other</h3>
        <div className='skills1by1'>
          <p className='skillDescription'>Git</p>
          <p className='skillDescription'>GitHub</p>
          <p className='skillDescription'>Netlify</p>
        </div>
        <div className='skills1by1'>
          <p className='skillDescription'>Vertex</p>
          <p className='skillDescription'>Webpack</p>
          <p className='skillDescription'>Heroku</p>
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Skills