import Image from "next/image";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import logo from "@/public/Sitelogo.webp";
import profile from "@/public/laxmanballa.jpeg";
import { NavItems } from "../utils/staticdata";

const Header = () => {
  const [openNavItems, setOpenNavItems] = useState<Boolean>(false);
  return (
    <div className="">
      <div className="max-w-[1440px] mx-auto hidden md:flex items-center justify-between py-6">
        <Image src={logo} alt="logo" width={64} height={64} />
        <div className="flex items-center space-x-8">
          <a href="#home" className="text-sm md:text-lg text-gray-200">
            Home
          </a>
          <a href="#experience" className="text-sm md:text-lg text-gray-200">
            Experience
          </a>
          <a href="#projects" className="text-sm md:text-lg text-gray-200">
            Projects
          </a>
          <a href="#contact" className="text-sm md:text-lg text-gray-200">
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Navbar */}
      <nav className="w-full py-5 px-5 sm:px-20 relative flex md:hidden items-center justify-between">
        <Image src={logo} alt="logo" width={35} />
        {!openNavItems ? (
          <FiMenu size={"1.75rem"} onClick={() => setOpenNavItems(true)} />
        ) : (
          <IoClose size={"1.75rem"} onClick={() => setOpenNavItems(false)} />
        )}
        {openNavItems && (
          <div className="bg-[#292929] rounded-[10px] px-5 py-7 absolute top-[4rem] right-5 flex flex-col items-start justify-start">
            <div className="flex items-center justify-center gap-3">
              <Image
                src={profile}
                alt="laxman"
                width={40}
                className="aspect-square rounded-full object-cover border-2 border-yellow-500"
              />
              <div className="">
                <p className="text-base font-semibold tracking-wide text-gray-300">
                  Laxmanrao Balla
                </p>
                <p className="text-sm text-green-400">Frontend Developer</p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-7 mt-7">
              {NavItems.map((item: any) => {
                const IconComponent = item.icon;
                return (
                  <a
                    className="flex items-center justify-center gap-4"
                    key={item.id}
                    href={item.link}
                  >
                    <IconComponent size={"1.25rem"} />
                    <p className="text-sm text-gray-200 tracking-wide hover:text-gray-50 hover:scale-105 transition-all cursor-pointer">
                      {item.title}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
