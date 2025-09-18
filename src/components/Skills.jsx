import React from "react";
import { skills } from "../utils/data";
import Marquee from "react-fast-marquee";

export const Skills = () => {
  return (
    <div className="relative flex flex-col bg-black text-gray-400 w-[80%] mb-20 md:mb-12 md:w-[65%] xl:mt-40 xl:mb-4 mx-auto items-center xl:justify-evenly">
      <h2 className="text-gray-700 text-3xl md:text-4xl xl:text-5xl font-bold py-4 md:mb-2 xl:mb-4">
        Mis habilidades:
      </h2>
      {/* {skills.length % 6 === 0 ? (
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-12">
          {skills.map(({ name, image, shadow }) => (
            <div
              key={name}
              className={`flex flex-col items-center justify-center w-[50px] md:w-[90px] m-2 sm:my-0 ${shadow}`}
            >
              <img
                src={image}
                alt={`Icono ${name}`}
                className="h-auto w-full object-contain"
              />
              <p className="mt-2 text-center text-sm">{name}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-12">
          {skills.slice(0, 3).map(({ name, image, shadow }) => (
            <div
              key={name}
              className={`flex flex-col items-center justify-center w-[50px] md:w-[90px] m-2 sm:my-0 ${shadow}`}
            >
              <img
                src={image}
                alt={`Icono ${name}`}
                className="h-auto w-full object-contain"
              />
              <p className="mt-2 text-center text-sm">{name}</p>
            </div>
          ))}
          <div className="col-span-3 md:col-span-2 flex justify-evenly md:justify-between items-center gap-4">
            {skills.slice(3).map(({ name, image, shadow }) => (
              <div
                key={name}
                className={`flex flex-col items-center justify-center w-[40px] md:w-[70px] m-2 sm:my-0 ${shadow}`}
              >
                <img
                  src={image}
                  alt={`Icono ${name}`}
                  className="h-auto w-full object-contain"
                />
                <p className="mt-2 text-center text-sm">{name}</p>
              </div>
            ))}
          </div>
        </div>
      )} */}
      <Marquee speed={40} pauseOnHover={true} gradient={false}>
        {skills.map(({ name, image, shadow }) => (
          <div
            key={name}
            className="flex flex-col items-center mx-3 md:mx-6 md:my-6 xl:mx-10 xl:my-10 py-8"
          >
            <img
              src={image}
              alt={name}
              className={`w-[50px] md:w-[90px] xl:w-[120px] m-2 sm:my-0 ${shadow} h-auto object-contain`}
            />
            <p className="text-xs mt-1">{name}</p>
          </div>
        ))}
      </Marquee>
      <div className="absolute top-0 left-0 w-36 h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 w-36 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
    </div>
  );
};
