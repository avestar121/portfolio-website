'use client'
import Navbar from '../components/Navbar'
import LandingPage from '../components/LandingPage'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function Home() {
  return (
    <ChakraProvider>
        <Navbar/>
        <LandingPage/>
        <Skills/>
        <AboutMe/>
        <Projects/>
        <Contact/>
        <ToastContainer />
    </ChakraProvider>
  )
}
