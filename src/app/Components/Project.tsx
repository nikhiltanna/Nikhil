/* eslint-disable @next/next/no-img-element */
import React from "react";

const Project = () => {
  return (
    <div className="overflow-x-auto py-4"> {/* Enable horizontal scrolling */}
      {/* Heading for the Projects Section */}
      <h2 className="text-2xl font-bold text-center text-white mb-4">
        Projects
      </h2>
      {/* Horizontal scroll for small screens */}
      <div className="flex space-x-4"> {/* Flex container for horizontal layout */}
        
        {/* Project Card 1 */}
        <div className="min-w-[300px] border-2 border-gray-800 rounded-lg bg-gradient-to-b from-gray-200 via-gray-500 to-gray-900 text-white flex flex-col relative group"> {/* Added 'relative group' */}
          <div className="flex items-center justify-center h-2/3 relative">
            <img
              src="/assets/netfliximg.jpg" // Ensure this path is correct
              alt="Netflix Image"
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <p className="mt-2 p-3 flex-1 text-sm leading-relaxed overflow-hidden">
            Built a personalized movie recommendation app using Google-Gemini APIs for tailored suggestions. Integrated Firebase Authentication with email, password, and social login options. Utilized React-Redux for efficient state management, enhancing performance.
          </p>
          <a
            href="https://your-project-link.com" // Replace with your actual link
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white py-1 px-4 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            Open Link
          </a>
        </div>

        {/* Project Card 2 */}
        <div className="min-w-[300px] border-2 border-gray-800 rounded-lg bg-gradient-to-b from-gray-200 via-gray-500 to-gray-900 text-white flex flex-col relative group"> {/* Added 'relative group' */}
          <div className="flex items-center justify-center h-2/3 relative">
            <img
              src="/assets/youtubeimg.jpg" // Ensure this path is correct
              alt="YouTube Platform Image"
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <p className="mt-2 p-3 flex-1 text-sm leading-relaxed overflow-hidden">
            Created a dynamic video platform using the YouTube API to source, display, and manage video content with real-time updates. Implemented debounced search for smooth performance, continuous streaming, and nested comment threads for an interactive experience. Enhanced with live chat for real-time community engagement and user interaction.
          </p>
          <a
            href="https://your-project-link.com" // Replace with your actual link
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white py-1 px-4 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            Open Link
          </a>
        </div>

        {/* Project Card 3 */}
        <div className="min-w-[300px] border-2 border-gray-800 rounded-lg bg-gradient-to-b from-gray-200 via-gray-500 to-gray-900 text-white flex flex-col relative group"> {/* Added 'relative group' */}
          <div className="flex items-center justify-center h-2/3 relative">
            <img
              src="/assets/foodimg.jpg" // Ensure this path is correct
              alt="Swiggy App Image"
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <p className="mt-2 p-3 flex-1 text-sm leading-relaxed overflow-hidden">
            Developed a responsive web app leveraging the Swiggy live API to fetch real-time restaurant data. Built with Redux Toolkit, Parcel, React Router, and Tailwind CSS, enabling users to search restaurants, view details and menus, and manage their cart seamlessly. Designed for an intuitive and engaging user experience.
          </p>
          <a
            href="https://your-project-link.com" // Replace with your actual link
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white py-1 px-4 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            Open Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
