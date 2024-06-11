import React from 'react';
import { IoIosGlobe } from "react-icons/io";
import { MdNote } from "react-icons/md";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { BiTachometer } from "react-icons/bi";

const Services = () => {
  const servicesData = [
    {
      icon: <IoIosGlobe className='h-14 w-12' />,
      heading: 'Design',
      content: 'Our web design services can assist you in reclaiming your company online image. Your business will flourish on the Internet thanks to the combination of style and technology we provide, as well as our experience.',
    },
    {
      icon: <MdNote className='h-14 w-12' />,
      heading: 'Development',
      content: 'Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools.',
    },
    {
      icon: <BsGlobeEuropeAfrica className='h-14 w-12' />,
      heading: 'Marketing',
      content: 'A beautiful website is the foundation of effective marketing. Our customers achieve success where it counts—in the real world—by combining our proven approach with our passion for improving conversions and increasing ROI.',
    },
    {
      icon: <BiTachometer className='h-14 w-12' />,
      heading: 'Support',
      content: 'Since the beginning, we at Akeshya have specialised in website maintenance. We recognise the significance of having your business online 24 hours a day, seven days a week, and we have created a system to ensure that we are always available.',
    },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8 relative flex items-center justify-center">
        <span className="inline-block w-12 h-1 bg-purple-500 mx-4"></span>
        <span className="px-4">SERVICES</span>
        <span className="inline-block w-12 h-1 bg-purple-500 mx-4"></span>
      </h1>
      <p className="text-center mb-8">Akeshya will serve as your consultant and development partner to help you turn your idea into a reality.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 p-3 ">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-lg shadow-lg overflow-hidden group transition duration-200 hover:bg-blue-500"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500 rounded-bl-full transform translate-x-3 -translate-y-3 transition duration-500 group-hover:translate-x-0 group-hover:translate-y-0"></div>
            <div className="transition duration-500 group-hover:text-white">
              {service.icon}
            </div>
            <h2 className="text-2xl font-bold mb-2 transition duration-500 group-hover:text-white">{service.heading}</h2>
            <p className="text-gray-700 transition duration-500 group-hover:text-white">{service.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
