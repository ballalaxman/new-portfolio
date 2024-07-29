import React from "react";

const HireMe = () => {
  return (
    <div className="bg-[#151515] py-3 px-5 sm:py-6">
      <p className="text-green-400 text-center">Why should you hire me ?</p>
      <div className="max-w-xl mx-auto py-6">
        <h4 className="text-yellow-500 text-base sm:text-xl font-bold text-center py-2">
          Web Developer
        </h4>
        <p className="text-gray-400 text-sm sm:text-base text-center">
          I am a developer who enjoys building efficient and robust user
          interfaces using reliable technologies like React.js, Next.js, Redux,
          MUI, and TailwindCSS, with 2 years of experience. Currently, I am
          transitioning into full-stack development, where I am building
          applications using React.js, Express.js, and MongoDB.
        </p>
      </div>
    </div>
  );
};

export default HireMe;
