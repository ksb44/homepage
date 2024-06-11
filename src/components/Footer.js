import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-white py-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
        <div className="mb-4 lg:mb-0 text-black">
          © Copyright <span className="font-bold">Akeshya.</span> All Rights
          Reserved
        </div>
        <div className="flex space-x-6 ">
          <a href="#" className="text-blue-950 hover:text-blue-700">
            Terms and conditions
          </a>
          <a href="#" className="text-blue-950 hover:text-blue-700">
            Refund policy
          </a>
          <a href="#" className="text-blue-950 hover:text-blue-700">
            Privacy policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
