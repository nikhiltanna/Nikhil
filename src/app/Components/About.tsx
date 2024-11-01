/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useEffect, useRef } from 'react';
import { useInView } from "framer-motion"; 
import Solarsystem from "./Salarsystem";
import { FaReact, FaNodeJs } from 'react-icons/fa'; // Example icons

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        console.log("About is called");
    }, [isInView]);

    return (
        <div className="bg-[url('/assets/backgroundimg.jpg')] text-white w-screen h-screen flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <div className="flex flex-col md:flex-row items-start justify-between w-full md:w-3/4">
                <div className="md:w-1/2 mb-4 md:mr-4">
                    <p className="mb-4">
                        Hi, I'm <strong>Nikhil Tanna</strong>, a Full-Stack Web Developer with experience in creating user-friendly web applications.
                    </p>
                    <h2 className="text-2xl font-semibold mb-2">Skills</h2>
                    <div className="flex mb-4">
                        <div className="flex items-center mr-4">
                            <FaReact size={24} className="mr-1" />
                            <span>React</span>
                        </div>
                        <div className="flex items-center mr-4">
                            <FaNodeJs size={24} className="mr-1" />
                            <span>Node.js</span>
                        </div>
                    </div>
                    <h2 className="text-2xl font-semibold mb-2">Projects</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>Netflix Clone</li>
                        <li>YouTube Clone</li>
                        <li>Foodzilla App</li>
                    </ul>
                    <h2 className="text-2xl font-semibold mb-2">Interests</h2>
                    <p className="mb-4">
                        I enjoy exploring new technologies and contributing to open-source projects.
                    </p>
                </div>

                {/* Solarsystem component */}
                <div className="md:w-1/2 flex justify-center">
                    <Solarsystem />
                </div>
            </div>
        </div>
    );
}

export default About;
