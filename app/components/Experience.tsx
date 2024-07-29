import React from "react";
import {
  WielabsFulltimeTechStack,
  WielabsInternshipTechStack
} from "../utils/staticdata";

const Experience = () => {
  return (
    <div
      className="relative w-full max-w-7xl items-start justify-center mx-auto py-16"
      id="experience"
    >
      <h1 className="text-5xl sm:text-[6.8rem] md:text-9xl font-extrabold tracking-wide opacity-[0.05] absolute left-5 top-0 sm:top-8 sm:left-0">
        Experience
      </h1>
      <div className="flex flex-col gap-12 sm:gap-16 pt-0 sm:pt-32">
        <div className="w-full px-7 sm:px-0 sm:w-4/6 flex flex-col items-start justify-center gap-2 mx-auto">
          <p className="text-base text-gray-400">Mar 2023 - Present</p>
          <p className="text-lg sm:text-xl text-gray-300 font-semibold tracking-wide">
            MERN Stack Developer, Wielabs Tech Products and Services Pvt Ltd
          </p>
          <p className="text-sm sm:text-base text-gray-400">
            Working on a e-commerce platform from scratch
            (maxxhairextensions.com) to made the customers to{" "}
            <span className="text-yellow-500 opacity-95">
              buy their products through online
            </span>{" "}
            for their sales growth and Developed the website using NextJs,
            Redux-toolkit, Axios, and Tailwind CSS.
          </p>
          <p className="text-sm sm:text-base text-gray-400">
            Worked On a SAAS Product (Mxpert) which is a Garage Management
            system developed using ReactJS, Which allows garages to maintain
            their Garage Operations like&nbsp;
            <span className="text-yellow-500 opacity-95">
              Customers management
            </span>
            &nbsp;and also their{" "}
            <span className="text-yellow-500 opacity-95">Staff management</span>
          </p>
          <p className="text-sm sm:text-base text-gray-400">
            Developed some static and responsive websites using NextJs from the
            scratch. (abhiruchi.ca, basmatiindiancuisine.ca, neurallymed.com)
          </p>
          <div className="flex items-center justify-start flex-wrap gap-3">
            {WielabsFulltimeTechStack.map((tech) => (
              <div
                className="bg-transparent border-2 border-green-400 px-3 py-1 rounded-lg cursor-pointer hover:bg-gray-500 text-xs sm:text-sm text-green-400 opacity-95 hover:opacity-100"
                key={tech}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full px-7 sm:px-0 sm:w-4/6 flex flex-col items-start justify-center gap-2 mx-auto">
          <p className="text-base text-gray-400">
            Dec 2022 - Feb 2023 (3 months)
          </p>
          <p className="text-lg sm:text-xl text-gray-300 font-semibold tracking-wide">
            Software Developer Intern, Wielabs Tech Products and Services Pvt
            Ltd
          </p>
          <p className="text-sm sm:text-base text-gray-400">
            Worked on wielabs admin panel for{" "}
            <span className="text-yellow-500 opacity-95">
              employe management
            </span>{" "}
            in the organization using React Js, Axios, Mui, Styled-components
            and Firebase
          </p>
          <p className="text-sm sm:text-base text-gray-400">
            Worked on Organization new{" "}
            <span className="text-yellow-500 opacity-95">Landing page</span>{" "}
            (new.wielabs.tech) which was implemented using Reactjs and Sass
          </p>
          <div className="flex items-center justify-start flex-wrap gap-3">
            {WielabsInternshipTechStack.map((tech) => (
              <div
                className="bg-transparent border-2 border-green-400 px-3 py-1 rounded-lg cursor-pointer hover:bg-gray-500 text-xs sm:text-sm text-green-400 opacity-95 hover:opacity-100"
                key={tech}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
