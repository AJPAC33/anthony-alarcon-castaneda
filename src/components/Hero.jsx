import React from "react";
import { TypeAnimation } from "react-type-animation";
import { backgroundImage, photoImage } from "../assets";

export const Hero = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-5 h-auto mb-18 mt-25 xl:mb-25 gap-8 max-w-[80%] mx-auto bg-black justify-center"
      id="home"
    >
      <div
        className="col-span-1 md:col-span-2 my-auto mx-auto h-auto w-fit m-[50px] bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <img
          src={photoImage}
          alt="hero image"
          className="brightness-75"
          style={{
            maskImage: `url(${backgroundImage})`,
            maskSize: "cover",
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
        />
      </div>
      <div className="flex md:col-span-3 w-fit px-5 my-auto justify-center">
        <div className="flex flex-col text-left">
          <h1 className="text-white text-xl md:text-4xl xl:text-6xl font-extrabold">
            <span className="text-transparent text-2xl md:text-4xl xl:text-6xl bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 inline-block py-4">
              Soy
            </span>
            <br />
            <TypeAnimation
              className="w-full"
              sequence={["Desarrollador Frontend", 1000, "", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="w-fit text-white text-lg my-6 xl:text-xl">
            Mi nombre es Anthony Alarcón y busco experiencia en desarrollo de
            aplicaciones web.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-start">
            <a
              href={`${import.meta.env.BASE_URL}CV.pdf`}
              download="Anthony-Alarcón-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 w-auto rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white text-center"
            >
              Descargar CV
            </a>
            <a
              href="#contact"
              className="px-6 py-3 w-auto rounded-xl border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white text-center hover:border-none"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
