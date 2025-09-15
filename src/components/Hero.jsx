import React from "react";
import { TypeAnimation } from "react-type-animation";
import { backgroundImage, photoImage } from "../assets";

export const Hero = () => {
  return (
    <div
      className="grid sm:grid-cols-1 md:grid-cols-4 h-auto mt-25 mb-15 gap-8 max-w-[80%] mx-auto bg-black justify-center"
      id="home"
    >
      <div
        className="md:col-span-1 my-auto mx-auto w-[250px] h-auto md:w-[420px] m-[50px] bg-cover bg-no-repeat bg-center"
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
      <div className="flex md:col-span-3 px-5 my-auto justify-center">
        <div className="flex flex-col text-left">
          <h1 className="text-white text-xl md:text-6xl font-extrabold">
            <span className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 inline-block md:text-4xl py-4">
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

          <p className="w-fit text-white sm:text-lg my-6 lg:text-xl">
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
