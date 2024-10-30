'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Homepage = () => {
  return (
    <div className=" bg-[url('/assets/backgroundimg.jpg')] bg-cover bg-center h-screen w-screen text-white ">
    <div className="flex items-center justify-center pt-72 text-5xl"> Hi ! I am Nikhil </div>
    <p className=" flex items-center justify-center text-4xl ">
    <span className="mr-2">a</span>
          <Typewriter
            words={['Frontend Developer', 'Backend Developer', 'FullStack Developer', 'Tech Enthusiast']}
            loop={1}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
  </div>
  
  )
}



export default Homepage

