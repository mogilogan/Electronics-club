
import React, { useState } from "react";


import { navLinks } from "./navData";

import { NavLink } from "react-router-dom";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

import logowop from '../assests/logowop.png';


const Navbar = () => {

  

  const [isMobileNavOpen, setisMobileNavOpen] = useState(false); // For toggling the mobile nav

  //   If button is there
  const handleClick = () => {
    if (isMobileNavOpen) {
      setisMobileNavOpen(false);
    }
  };
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className="sticky z-[1000] top-0">
    <div className="flex flex-wrap sys-app-notCollapsed ">
      <div className="w-full ">
        <div className="pb-0 py-2 px-2 mx-auto ">
          <div className="w-full flex justify-between items-center p-2 text-gray-900 bg-white rounded-lg shadow-lg font-medium capitalize">


            {/* Logo */}
            <div>
              <span className="px-2 mr-2 md:border-r border-gray-800">
                <img
                src={logowop}
                  alt="alt placeholder"
                  className="w-12 h-12 -mt-1 inline mx-auto"
                />
              </span>
            </div>

            <div className="px-2 md:flex gap-x-5 items-center flex-1 text-gray-900 bg-white font-medium capitalize hidden">
              {/* Links */}
              {navLinks?.map(({ title, link }, id) => (
                <NavLink key={id}  onClick={() => scrollToSection(link)}>
                  <a
                    id={id}
                    className={`px-2 py-1 flex items-center cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm rounded ${
                      window.location.pathname === link
                        ? "text-gray-700 font-semibold"
                        : ""
                    }`}
                  >
                   
                    <span className="mx-1">{title}</span>
                  </a>
                </NavLink>
              ))}
            </div>

            {/* After all nav links if you want any button in right then it will come here */}
            <div></div>

            {/* Hamberger Menu  */}
            <div className="md:hidden transition-all mr-3 my-3  cursor-pointer hover:text-gray-700">
              {isMobileNavOpen ? (
                <AiOutlineMenuFold
                  onClick={() => setisMobileNavOpen(false)}
                  className="rounded text-2xl"
                />
              ) : (
                <AiOutlineMenuUnfold
                  onClick={() => setisMobileNavOpen(true)}
                  className="rounded text-2xl"
                />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div
          id="navbar"
          className={`pt-0 absolute top-0 z-100 mx-auto ${
            isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
          } transition-all flex-wrap md:hidden`}
        >
          <div className=" w-80">
            <div className="w-full py-4 space-y-6 px-2 text-gray-900 bg-gray-900 rounded-lg min-h-screen  text-left capitalize font-medium shadow-lg">
              {/* Logo */}
              <img
                src={logowop}
                alt="alt placeholder"
                className="w-8 h-8 mx-auto mb-5 "
              />

              {/* Links */}
              {navLinks?.map(({ title, link }, id) => (
                <NavLink key={id}  onClick={() => scrollToSection(link)}>
                  <a
                    id={id}
                    className={` flex items-center py-4 cursor-pointer bg-gray-900   text-sm  ${
                      window.location.pathname === link
                        ? "text-gray-700 font-semibold"
                        : ""
                    }`}
                  >
                   
                    <span className="mx-auto bg-blue-400 text-white min-w-[130px] px-2 py-2 rounded-xl">{title}</span>
                  </a>
                </NavLink>
              ))}

              {/* After all nav links if you want any button or link then it will come here */}
              
            </div>
          </div>
        </div>
      </div>
    </div>



   
  </div>



  );
};

export default Navbar;