import React from 'react'
import Image from 'next/image'
import ChevronDown from '../assets/ChevronDown'

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <div className='projectsdescr'>
        <p className='aboutHead'>PROJECTS</p>
        <div className='underline'></div>
        <p className='projectstop3'>My top 3 projects</p>
      </div>
        <div className='projectBox'>
          <div className='projectImage'>
            <a href="https://coinwatcher.netlify.app/" target='._blank'>
              <img src="/coinwatcher.png" alt="coinwatcher" className="projectImage"/></a>
          </div>
          <div className='projectInfo'>
            <p className='projectName'>COINWATCHER</p>
            <p className='projectBrief'>A platform where you can see real prices, price charts and all other info about top 10 cryptocurrencies sorted by market capitalization. </p>
            <p className='projectTech'>This project fetches data from different api&apos;s and uses tailwindCss for styling.</p>
            <div className='projectbuttons'>
            <a className='projectsbtn projectsbtn--bg' href='https://github.com/avestar121/coinwatcher' target='._blank'>Source code</a>
            <a className='projectsbtn projectsbtn--bg' href="https://coinwatcher.netlify.app/" target='._blank'>Go to site</a>
            </div>
          </div>
        </div>
        <div className='projectBox'>
          <div className='projectImage'>
            <a href="https://webshopforrappants.vercel.app/" target='._blank'>
              <img src="/rappants.png" alt="rappants" className="projectImage"/></a>
          </div>
          <div className='projectInfo' style={{marginLeft: "10px"}}>
            <p className='projectName'>RAPPANTSSHOP</p>
            <p className='projectBrief'>An online clothing store with working payments </p>
            <p className='projectTech'>The store was built using sanity db for database and Stripe as a payment gateway.</p>
            <div className='projectbuttons'>
            <a className='projectsbtn projectsbtn--bg' href='https://github.com/avestar121/webshopforrappants' target='._blank'>Source code</a>
            <a className='projectsbtn projectsbtn--bg' href="https://webshopforrappants.vercel.app/" target='._blank' style={{marginRight: '0px'}}>Go to site</a>
            </div>
          </div>
        </div>
        <div className='projectBox'>
          <div className='projectImage'>
            <a href="https://webshopforrappants.vercel.app/" target='._blank'>
              <img src="/rappants.png" alt="rappants" className="projectImage"/></a>
          </div>
          <div className='projectInfo' style={{marginLeft: "10px"}}>
            <p className='projectName'>RAPPANTSSHOP</p>
            <p className='projectBrief'>An online clothing store with working payments </p>
            <p className='projectTech'>The store was built using sanity db for database and Stripe as a payment gateway.</p>
            <div className='projectbuttons'>
            <a className='projectsbtn projectsbtn--bg' href='https://github.com/avestar121/webshopforrappants' target='._blank'>Source code</a>
            <a className='projectsbtn projectsbtn--bg' href="https://webshopforrappants.vercel.app/" target='._blank' style={{marginRight: '0px'}}>Go to site</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects