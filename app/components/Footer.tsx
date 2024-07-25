import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SocialMediaItems } from "../utils/staticdata";

const Footer = () => {
  return (
    <div className="py-10">
      <div className="flex items-center justify-center gap-9 w-fit mx-auto">
        {SocialMediaItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <a href={item.url} target="_blank" key={item.id}>
              <div className="text-gray-400 text-sm sm:text-lg group-hover:text-gray-200 flex flex-col items-center gap-1">
                <IconComponent size={"1.75rem"} />
                <p>{item.name}</p>
              </div>
            </a>
          );
        })}
      </div>
      <p className="text-gray-400 text-sm sm:text-lg text-center pt-5">
        &copy; Design and Developed by Laxman using NextJS and Tailwind Css.
      </p>
    </div>
  );
};

export default Footer;
