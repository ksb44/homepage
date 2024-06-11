import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <nav className="w-full bg-white text-gray-500 fixed p-3 h-15 mb-7 shadow-md z-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src="/logo.png" alt="Akeshya Logo" className="h-12" />
          </div>
          <div className="hidden md:flex space-x-12 items-center">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#services" className="nav-link">
              Services
            </a>
            <a
              href="#contact"
              className="bg-blue-800 text-white px-5 py-2 rounded-full hover:bg-blue-400"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={handleClick}>
              {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {nav && (
        <div className="md:hidden bg-white flex flex-col p-6">
          <a
            href="#home"
            className="block text-sm hover:text-purple-600 mb-4"
            onClick={handleClick}
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-sm hover:text-purple-600 mb-4"
            onClick={handleClick}
          >
            About
          </a>
          <a
            href="#services"
            className="block text-sm hover:text-purple-600 mb-4"
            onClick={handleClick}
          >
            Services
          </a>
          <a
            href="#contact"
            className="block bg-blue-800 text-white text-sm px-5 py-2 rounded-full hover:bg-blue-400 mb-4"
            onClick={handleClick}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
