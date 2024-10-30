/* eslint-disable react/no-unescaped-entities */
'use client'
import React,{useEffect,useRef} from 'react'
import { useInView } from "framer-motion" 

const About = () => {
    const ref = useRef(null)
  const isInView = useInView(ref)
  useEffect(()=>{
    console.log("About is called");
  },[isInView])

  return (
    <>
    <div >About Me</div>
    <p>Hi, I’m Nikhil Tanna, a passionate Full-Stack Web Developer with nearly three years of experience in creating dynamic and user-friendly web applications. 
        I hold a Bachelor of Engineering degree in Computer Engineering and have developed a strong foundation in modern web technologies.</p>

    <p>I specialize in React, JavaScript, and Node.js, and I’m proficient in various frameworks and libraries, including Redux, Next.js, and Tailwind CSS. Throughout my career, I've successfully built several projects, such as Netflix Gemini, YouTube Clone, and the Foodzilla App. I thrive in collaborative environments and adapt quickly to new technologies, constantly seeking to improve my skills and stay updated with industry trends.</p>
    
    <p>When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing my knowledge through technical writing. I believe in the power of clean code and intuitive design, and I’m committed to creating seamless user experiences.</p>
    
    <p>Feel free to explore my work and reach out if you'd like to collaborate or have any questions!</p>
    </>
  )
}

export default About