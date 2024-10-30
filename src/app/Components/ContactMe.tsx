/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const ContactMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Conatact is called");
  }, [isInView]);

  return (
    <>
      <div className=" bg-[url('/assets/background.jpeg')] bg-cover bg-center h-screen w-screen">
        <div
          ref={ref}
          className="flex flex-col items-center text-center pt-[10%]"
        >
          <p className=" font-semibold text-[#FFB88F] text text-3xl">
            Contact Me
          </p>
          <div className="mt-2 text-center text-[#FFB88F]">
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
                  className="border border-gray-300 rounded-md p-2 flex-1"
                  placeholder="Enter your name"
                />
              </div>

              <div className="flex items-center">
                <label className="w-24 font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="border border-gray-300 rounded-md p-2 flex-1"
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex items-center">
                <label className="w-24 font-semibold" htmlFor="message">
                  Message
                </label>
                <input
                  id="message"
                  type="text"
                  className="border border-gray-300 rounded-md p-2 flex-1 h-20"
                  placeholder="Enter your message"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
