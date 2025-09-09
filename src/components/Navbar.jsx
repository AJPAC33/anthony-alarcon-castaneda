import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black text-gray-400 h-[100px] max-w-[80%] fixed top-0 left-0 right-0 mx-auto flex justify-center gap-[10%] items-center z-50">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 inline-block ml-4">
        Anthony Alarcón
      </h1>
      <ul className="hidden w-[600px] md:flex justify-center gap-15">
        <li className="p-5">
          <a href="#about">Acerca de</a>
        </li>
        <li className="p-5">
          <a href="#works">Trabajo</a>
        </li>
        <li className="p-5">
          <a href="#contact">Contacto</a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden mr-6">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed h-full left-0 top-0 w-[300px] bg-[#202121] ease-in-out duration-500 justify-center text-center"
            : "fixed h-full left-[-100%] top-0 w-[300px] bg-[#202121] ease-in-out duration-500 justify-center text-center"
        }
      >
        <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 inline-block m-4">
          Anthony Alarcón
        </h1>
        <ul className="p-8 text-2xl">
          <li className="p-2">
            <a href="#home">Inicio</a>
          </li>
          <li className="p-2">
            <a href="#about">Acerca de</a>
          </li>
          <li className="p-2">
            <a href="#works">Trabajo</a>
          </li>
          <li className="p-2">
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
