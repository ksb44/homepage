import React from "react";

const Process = () => {
  const servicesData = [
    {
      heading: "1. Planning",
      content:
        "We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we are all on the same page.",
    },
    {
      heading: "2. Design",
      content:
        "We build our websites carefully through a series of workshops, wire-framing, and user experience (UX) sessions, resulting in a site that reinforces trust, conveys important brand messaging, and provides a return on innovation.",
    },
    {
      heading: "3. Development",
      content:
        "We provide extensive front-end and back-end development that allows your idea to stand alone. Our in-house developers work side-by-side with the artistic team to seek out natural breakpoints inside the content and order practicality based on acknowledged statistics.",
    },
    {
      heading: "4. Marketing",
      content:
        "We come up with ideas and campaigns to help your business prosper online. Our campaigns and virtual approach have a verified tune report of accomplishing brilliant results, gathering new leads and site visitors in your website and assist them convert.",
    },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 relative flex items-center justify-center">
        <span className="inline-block w-12 h-1 bg-purple-500 mx-4"></span>
        <span className="px-4">OUR PROCESS</span>
        <span className="inline-block w-12 h-1 bg-purple-500 mx-4"></span>
      </h1>
      <p className="text-center mb-12">
        Over the years we’ve evolved a tested method for attaining achievement
        for each one of our clients.
      </p>
      <div className="grid p-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-28">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="relative bg-gray-200 p-4 text-center rounded-lg overflow-hidden group duration-300 hover:bg-blue-600 hover:text-white"
          >
            <div className="bg-blue-600 duration-300"></div>
            <h2 className="text-2xl font-bold mb-2">{service.heading}</h2>
            <p className="text-gray-700 group-hover:text-white text-start">
              {service.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
