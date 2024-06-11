import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 relative flex items-center justify-center">
        <span className="inline-block w-12 h-1 bg-purple-500 mx-4"></span>
        <span className="px-4">CONTACT US</span>
        <span className="inline-block w-12 h-1 bg-purple-500 mx-4"></span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div>
          <h2 className="text-3xl text-blue-700 font-bold mb-4">Akeshya</h2>
          <p className="text-gray-700">
            Designers, developers & marketeers capable of delivering solutions
            according to your needs,{" "}
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start">
            <FaMapMarkerAlt className="text-blue-800 h-6 w-6 mr-4" />
            <p>
              26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh 524004
            </p>
          </div>
          <div className="flex items-start">
            <FaEnvelope className="text-blue-800 h-6 w-6 mr-4" />
            <p>info@akeshya.com</p>
          </div>
          <div className="flex items-start">
            <FaPhone className="text-blue-800 h-6 w-6 mr-4" />
            <p>+91 94942 40922</p>
          </div>
        </div>

        <div>
          <form className="space-y-4">
            <div>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <div>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
              />
            </div>
            <div>
              <textarea
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                className="px-4  py-2 bg-blue-800 text-white font-bold rounded-lg hover:bg-blue-500 transition duration-300"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
