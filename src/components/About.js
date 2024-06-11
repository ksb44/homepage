import React, { useState, useEffect } from "react";
import { RiCheckDoubleFill } from "react-icons/ri";
import { CiFaceSmile } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { CiGlobe } from "react-icons/ci";

const About = () => {
  const [organicReach, setOrganicReach] = useState(0);
  const [watchHours, setWatchHours] = useState(0);

  useEffect(() => {
    const targetOrganicReach = 3835039;
    const targetWatchHours = 14081;

    const interval = setInterval(() => {
      setOrganicReach((prevOrganicReach) => {
        const increment = Math.ceil(targetOrganicReach / 100);
        const newOrganicReach = Math.min(
          prevOrganicReach + increment,
          targetOrganicReach
        );
        return newOrganicReach;
      });
      setWatchHours((prevWatchHours) => {
        const increment = Math.ceil(targetWatchHours / 100);
        const newWatchHours = Math.min(
          prevWatchHours + increment,
          targetWatchHours
        );
        return newWatchHours;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 relative flex items-center justify-center">
        <span className="inline-block w-12 h-1 bg-purple-500 mx-4"></span>
        <span className="px-4">ABOUT US</span>
        <span className="inline-block w-12 h-1 bg-purple-500 mx-4"></span>
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 w-full space-y-4 text-lg text-gray-800">
          <p>
            We are Akeshya, a firm that specializes in web design and marketing.
            We help transform ideas into reality with a team of passionate
            graphic designers, web developers, and seasoned marketing advisors.
          </p>

          <ul className="list-inside space-y-2">
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">
                <RiCheckDoubleFill />
              </span>
              We started with a simple idea: do what is best for the client.
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">
                <RiCheckDoubleFill />
              </span>
              Our methodical and individual approach to each project delivers
              the finest possible results for your media.
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">
                <RiCheckDoubleFill />
              </span>
              Our day-to-day work is to solve your problems utilizing the most
              up-to-date, practical adaptive technology, and we have a lot of
              fun doing it.
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 w-full space-y-4 text-lg text-gray-800">
          <p>
            We're professional, but we're also friendly, and we'll always pay
            attention to your concerns. We expect to work with innovative people
            that have an open mind and are dedicated to making every idea a
            reality. We want to hear from you if you're interested in SEO, have
            Web Development ideas, or require a graphic designer who can match
            your goals.
          </p>
          <button className="bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-8 mt-8">
        <div className="flex justify-center lg:w-1/2 mb-8 lg:mb-0">
          <img src="/counts-img.svg" alt="Your Image" className="w-100 h-80" />
        </div>
        <div className="grid  sm:grid-cols-2 gap-4 lg:w-1/2 mt-6">
          <div className="flex items-center bg-gray-100 p-4 rounded-lg">
            <CiFaceSmile className="h-8 w-8 text-purple-600 mx-2" />
            <div>
              <span className="text-2xl font-bold text-black">
                {organicReach}
              </span>
              <p className="ml-2">Organic Reach (Global)</p>
            </div>
          </div>
          <div className="flex items-center bg-gray-100 p-4 rounded-lg">
            <FaBook className="h-8 w-8 text-purple-600 mx-2" />
            <div>
              <span className="text-2xl font-bold text-black">85</span>
              <p className="ml-2">Campaigns</p>
            </div>
          </div>
          <div className="flex items-center bg-gray-100 p-4 rounded-lg">
            <GoClock className="h-8 w-8 text-purple-600 mx-2" />
            <div>
              <span className="text-2xl font-bold text-black">
                {watchHours}
              </span>
              <p className="ml-2">Watch Hours (Asia)</p>
            </div>
          </div>
          <div className="flex items-center bg-gray-100 p-4 rounded-lg">
            <CiGlobe className="h-8 w-8 text-purple-600 mx-2" />
            <div>
              <span className="text-2xl font-bold text-black">17</span>
              <p className="ml-2">Excellent CTR % (Asia)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
