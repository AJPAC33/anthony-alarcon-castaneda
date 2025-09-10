import React from "react";
import { aboutMeImage } from "../assets";

export const About = () => {
  return (
    <div className="text-white max-w-[80%] mx-auto my-8 bg-black" id="about">
      <div className="md:grid md:grid-cols-3">
        <div className="mt-4 md:col-span-2 text-left flex md:mx-[60px]">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 inline-block">
              Sobre Mi
            </h2>
            <p className="text-base lg:text-lg">
              Hola, soy Anthony, desarrollador web apasionado por crear
              experiencias digitales intuitivas y funcionales. Trabajo
              principalmente con React, Next.js, Node.js y Tailwind CSS,
              construyendo desde landing pages hasta aplicaciones web completas.
              Me motiva transformar ideas en productos reales, optimizados y
              fáciles de usar, y siempre estoy aprendiendo nuevas tecnologías
              para mejorar mis proyectos. ¡Explora mi portfolio y no dudes en
              contactarme para colaborar en tu próximo proyecto!
            </p>
          </div>
        </div>
        <div className="md:col-span-1 my-15 mx-auto w-[250px] md:w-[350px] h-auto lg:w-[380px] m-[50px]">
          <img src={aboutMeImage} alt="hero image" />
        </div>
      </div>
    </div>
  );
};
