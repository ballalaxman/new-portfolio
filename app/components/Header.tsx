import Image from "next/image";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import logo from "@/public/Sitelogo.webp";
import profile from "@/public/Laxman.jpeg";
import { NavItems } from "../utils/staticdata";

const Header = () => {
  const [openNavItems, setOpenNavItems] = useState<Boolean>(false);
  return (
    <div className="">
      <div className="max-w-[1440px] mx-auto hidden md:flex items-center justify-between py-6">
        <Image src={logo} alt="logo" width={64} height={64} />
        <div className="flex items-center space-x-8">
          <a href="#" className="text-sm md:text-lg text-gray-200">
            Home
          </a>
          <a href="#" className="text-sm md:text-lg text-gray-200">
            Experience
          </a>
          <a href="#" className="text-sm md:text-lg text-gray-200">
            Projects
          </a>
          <a href="#" className="text-sm md:text-lg text-gray-200">
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Navbar */}
      <nav className="w-full py-5 px-5 sm:px-20 relative flex md:hidden items-center justify-between">
        <Image src={logo} alt="logo" width={35} />
        <FiMenu
          size={"1.75rem"}
          onClick={() => setOpenNavItems(!openNavItems)}
        />
        {openNavItems && (
          <div className="bg-[#292929] rounded-[10px] px-5 py-7 absolute top-[4rem] right-5 flex flex-col items-start justify-start">
            <div className="flex items-center justify-center gap-3">
              <Image
                src={profile}
                alt="laxman"
                width={40}
                className="aspect-square rounded-full"
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
                  <div
                    className="flex items-center justify-center gap-4"
                    key={item.id}
                  >
                    <IconComponent size={"1.25rem"} />
                    <p className="text-sm text-gray-200 tracking-wide hover:text-gray-50 hover:scale-105 transition-all cursor-pointer">
                      {item.title}
                    </p>
                  </div>
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
