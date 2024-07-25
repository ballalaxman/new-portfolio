import React from "react";
import { calculateDuration } from "../utils/helpers";
import { LuScroll } from "react-icons/lu";

const HeroSection = () => {
  const age = calculateDuration(new Date(2022, 11, 1)); // December 01, 2022

  return (
    <section className="h-[80vh] w-full px-4 lg:max-w-[1440px] lg:px-0 flex flex-col md:flex-row items-center justify-between mx-auto">
      <div className="max-w-2xl">
        <h2 className="text-lg sm:text-2xl font-bold text-[#cdcdcd] my-2">
          Hey, I&apos;m Laxman
        </h2>
        <p className="text-2xl sm:text-6xl text-gray-400 font-bold py-2 leading-9 sm:leading-none">
          A Frontend dev learning
          <span className="text-yellow-500"> Fullstack</span>!
        </p>
        <p className="text-gray-400 my-5">
          A Developer dedicated to crafting clean, efficient, and captivating
          user interfaces with the latest and most reliable technologies.
          With&nbsp;
          <span className="text-green-400 font-bold">
            {age.years} years, {age.months} months&nbsp;
          </span>
          of dedicated experience in frontend development, I specialize in
          JavaScript, React.js, Next.js, and TailwindCSS. I am committed to
          transforming innovative ideas into functional and intuitive digital
          experiences.
        </p>
        <button className="bg-yellow-500 px-6 py-3 flex items-center justify-center gap-4 text-black rounded-lg text-sm sm:text-lg tracking-wide">
          <LuScroll size={"1.5rem"} /> View Resume
        </button>
      </div>
      <div className="">Image</div>
    </section>
  );
};

export default HeroSection;
