import React, { useState } from "react";
import pic from "/src/photo.avif";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home", href: "#home" },
    { id: 2, text: "About", href: "#about" },
    { id: 3, text: "Portfolio", href: "#portfolio" },
    { id: 4, text: "Experience", href: "#experience" },
    { id: 5, text: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto h-16 px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 bg-slate-700 text-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="Profile" />
            <h1 className="font-semibold text-xl cursor-pointer">
              PAlK<span className="text-green bg-lime-500 text-2xl">A</span>
              <p className="text-sm">Web developer</p>
            </h1>
          </div>
          {/* Desktop nav bar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text, href }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 cursor-pointer"
                >
                  <a href={href}>{text}</a>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoClose size={24} /> : <IoMenu size={24} />}
            </div>
          </div>
        </div>
        {/* Mobile nav bar */}
        {menu && (
          <div>
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text, href }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 cursor-pointer font-semibold"
                >
                  <a href={href} onClick={() => setMenu(false)}>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
