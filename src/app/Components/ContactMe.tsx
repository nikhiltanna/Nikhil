/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";  
import { FaEnvelope } from "react-icons/fa";
import { FaGithub, FaTwitter , FaLinkedin } from "react-icons/fa"; 
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Conatact is called");
  }, [isInView]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const serviceId = process.env.NEXT_PUBLIC_SERVICEID  || '';
  const templateId = process.env.NEXT_PUBLIC_TEMPLATEID || '';
  const handleClick = () => {
    emailjs
      .send(
        serviceId,
        templateId,
        formData,
        'd0zTjhRWbNWH7l1ik'
      )
      .then((response) => {
        console.log('Email sent successfully:', response);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
   // This will show the form data before it is reset
  };
  
  return (
    <>
      <div className=" bg-[url('/assets/backimg.jpg')] bg-cover bg-center h-4/5 w-screen">
        <div
          ref={ref}
          className="flex flex-col items-center text-center pt-[9%]"
        >
          <p className=" font-semibold text-[#FFB88F] text text-3xl">
            Contact Me
          </p>
          <div className="mt-2 text-center text-white">
            <p>
              {" "}
              If you want to know more about me or my work, or if you would just
            </p>
            <p>
              /like to say hello, send me a message. I'd love to hear from you.
            </p>

            <div className="flex flex-col space-y-4 pt-16">
              <div className="flex items-center">
                <label className="w-24 font-semibold" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  className="border border-gray-300 rounded-md p-2 flex-1"
                  placeholder="Enter your name"
                  onChange={(e)=>{setFormData({...formData,name: e.target.value})}}
                />
              </div>

              <div className="flex items-center">
                <label className="w-24 font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  className="border border-gray-300 rounded-md p-2 flex-1 text-black"
                  placeholder="Enter your email"
                  onChange={(e)=>{setFormData({...formData,  email: e.target.value
                  })}}
                />
              </div>

              <div className="flex items-center">
                <label className="w-24 font-semibold" htmlFor="message">
                  Message
                </label>
                <input
                  id="message"
                  type="text"value={formData.message}
                  className="border border-gray-300 rounded-md p-2 flex-1 h-20 text-black"
                  placeholder="Enter your message"
                  onChange={(e)=>{setFormData({...formData, message:e.target.value})}}
                />
              </div>

                <button 
              className="bg-slate-500 p-2 rounded hover inline-block mx-auto ml-[85%]"
              onClick={()=>{handleClick()}}
            >
              Submit
            </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-1/4 bg-black p-4">
  <div className="flex justify-between items-center mx-12"> {/* justify-between will push sections outward */}
    
    {/* Reach Out to Me Section */}
    <div className="flex flex-col text-white items-center"> {/* Kept vertical stacking */}
      <h2 className="text-xl font-semibold">Reach Out to Me</h2>
      <div className="flex space-x-3">
      <FaEnvelope  />
      <p className="text-sm text-gray-400">nikhil.tanna.33@gmail.com</p>
      </div>
    </div>

    {/* Let's Connect Section */}
    <div className="flex flex-col items-center text-white"> {/* Kept vertical stacking */}
      <span className="text-lg">Let's Connect</span>
      <div className="flex space-x-2 mt-2"> {/* Kept spacing for icons */}
        <a
          href="https://twitter.com/Nikhil__Tanna"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaTwitter size={24} /> {/* Font Awesome Twitter icon */}
        </a>
        <a
          href="https://github.com/nikhiltanna"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/nikhil--tanna/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default ContactMe;
