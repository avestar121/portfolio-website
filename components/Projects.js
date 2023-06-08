'use client'
import React, {useEffect} from 'react'
import Image from 'next/image'
import ChevronDown from '../assets/ChevronDown'

const Projects = () => {

  useEffect(() => {
    const videos = document.querySelectorAll('.projectImage video');
    videos.forEach((video) => {
      video.addEventListener('loadedmetadata', () => {
        video.play();
      });
    });
  }, []);
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
              <video src="/coinwatchervideo.mp4" alt="coinwatcher" className="projectImage"  autoPlay muted controls /></a>
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
            <a href="https://rappantsshop.vercel.app/" target='._blank'>
              <video src="/rappantsveo.mp4" alt="rappants" className="projectImage" autoPlay muted controls /></a>
          </div>
          <div className='projectInfo' style={{marginLeft: "10px"}}>
            <p className='projectName'>RAPPANTSSHOP</p>
            <p className='projectBrief'>An online clothing store.</p>
            <p className='projectTech'>The store was built using sanity db for database and Stripe as a payment gateway.</p>
            <p className='projectTech' style={{color: 'gray'}}>Test checkout by using 4242 4242 4242 4242 as a card number,any future date,any three-digit CVC.</p>
            <div className='projectbuttons'>
            <a className='projectsbtn projectsbtn--bg' href='https://github.com/avestar121/webshopforrappants' target='._blank'>Source code</a>
            <a className='projectsbtn projectsbtn--bg' href="https://rappantsshop.vercel.app/" target='._blank' style={{marginRight: '0px'}}>Go to site</a>
            </div>
          </div>
        </div>
        <div className='projectBox'>
          <div className='projectImage'>
            <a href="https://boookingapp.vercel.app/" target='._blank'>
            <video src="/airbnbvio.mp4" alt="airbnb" className="projectImage" autoPlay muted controls /></a>
          </div>
          <div className='projectInfo' style={{marginLeft: "10px"}}>
            <p className='projectName'>AIRBNB CLONE</p>
            <p className='projectBrief'>Clone of a famous booking site</p>
            <p className='projectTech'>This project was built using mongodb for database and tailwindCss for styling</p>
            <div className='projectbuttons'>
            <a className='projectsbtn projectsbtn--bg' href='https://github.com/avestar121/boookingapp' target='._blank'>Source code</a>
            <a className='projectsbtn projectsbtn--bg' href="https://boookingapp.vercel.app/" target='._blank' style={{marginRight: '0px'}}>Go to site</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects