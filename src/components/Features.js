import React from "react";
import { MdOutlineEventNote } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdLeaderboard } from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import { MdMediaBluetoothOn } from "react-icons/md";
import { SiSocialblade } from "react-icons/si";
import { FaAd } from "react-icons/fa";
import { FaRegWindowMaximize } from "react-icons/fa";
import { IoCodeSlashSharp } from "react-icons/io5";
import { FaFemale } from "react-icons/fa";
import { TiMediaPlay } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";

const Features = () => {
  const servicesData = [
    {
      icon: <FaRegWindowMaximize className="h-7 w-8" />,
      heading: "Web Design",
    },
    {
      icon: <IoCodeSlashSharp className="h-7 w-8" />,
      heading: "Development",
    },
    {
      icon: <FaFemale className="h-7 w-8" />,
      heading: "Branding",
    },
    {
      icon: <TiMediaPlay className="h-7 w-8" />,
      heading: "Media Buying",
    },
    {
      icon: <FaSearch className="h-7 w-8" />,
      heading: "Search Engine",
    },
    {
      icon: <MdOutlineEventNote className="h-7 w-8" />,
      heading: "Brand Strategy",
    },
    {
      icon: <CiLocationOn className="h-7 w-8" />,
      heading: "Local Search Marketing",
    },
    {
      icon: <MdLeaderboard className="h-7 w-8" />,
      heading: "Lead Tracking & Management",
    },
    {
      icon: <TiContacts className="h-7 w-8" />,
      heading: "Contact Management",
    },
    {
      icon: <MdMediaBluetoothOn className="h-7 w-8" />,
      heading: "Media Management",
    },
    {
      icon: <SiSocialblade className="h-7 w-8" />,
      heading: "Social Scheduling",
    },
    {
      icon: <FaAd className="h-7 w-8" />,
      heading: "Ad Retargeting",
    },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8 relative flex items-center justify-center">
        <span className="inline-block w-12 h-1 bg-purple-500 mx-4"></span>
        <span className="px-4">OUR CORE FEATURES</span>
        <span className="inline-block w-12 h-1 bg-purple-500 mx-4"></span>
      </h1>
      <p className="text-center mb-8">
        Akeshya is a forward-thinking and intelligent design firm that is
        technically and creatively capable of transforming your brand into its
        best digital self. Our approach to design and development results in
        compelling, engaging branding and immersive digital experiences that
        provide a value for money.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-gray-200 hover:bg-blue-100 flex flex-row items-center justify-center p-3 rounded-lg transition duration-300"
          >
            <div className="m-3">{service.icon}</div>
            <h2 className="text-center font-bold hover:text-blue-800">
              {service.heading}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
