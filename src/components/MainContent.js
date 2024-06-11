import React from "react";

const MainContent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  p-9 bg-gray-100 ">
      <div className="md:w-1/2 w-full text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-5xl font-bold mb-4 text-blue-700">
          Grow your business with Akeshya
        </h1>
        <p className="text-3xl mb-4 text-gray-600">
          We are a team of talented website designers, developers & digital
          marketers.
        </p>
        <button className="m-3 bg-transparent text-blue-700 border-2 border-blue-700 px-6 py-2 rounded-full hover:bg-blue-700 hover:text-white transition duration-300">
          Get Started
        </button>
      </div>

      <div className="md:w-1/2 w-full flex justify-center mt-12">
        <img
          src="hero-img.png"
          alt="Transforming Image"
          className="w-400 h-400  transform animation-bounce mix-blend-multiply"
        />
      </div>
    </div>
  );
};

export default MainContent;
