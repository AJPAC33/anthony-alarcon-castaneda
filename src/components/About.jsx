import React from "react";
import { aboutMeImage } from "../assets";

export const About = () => {
  return (
    <div className="text-white max-w-[80%] mx-auto my-4 bg-black" id="about">
      <div className="md:grid md:grid-cols-5">
        <div className="mt-4 md:col-span-3 text-left flex md:mx-16">
          <div className="w-fit my-auto mx-6">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 inline-block">
              Sobre Mi
            </h2>
            <p className="text-base xl:text-xl">
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
        <div className="md:col-span-2 my-15 mx-auto w-[240px] md:w-[320px] xl:w-[480px] h-auto xl:p-10 m-[50px]">
          <img src={aboutMeImage} alt="hero image" />
        </div>
      </div>
    </div>
  );
};
