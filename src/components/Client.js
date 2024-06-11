import React from "react";

const Client = () => {
  const images = [
    "client-1.png",
    "client-2.png",
    "client-3.png",
    "client-4.png",
    "client-5.png",
    "client-6.png",
  ];

  return (
    <div className="bg-blue-100 p-2">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {images.map((src, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={src}
              alt={`Client ${index + 1}`}
              className="w-20 h-15 sm:w-14 sm:h-14 md:w-14 md:h-14 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
