import React from "react";
import { skills } from "../utils/data";

export const Skills = () => {
  return (
    <div className="flex flex-col md:flex-row bg-black text-gray-400 w-[80%] my-16 md:my-24 mx-auto items-center md:justify-evenly">
      <h2 className="text-gray-700 text-3xl md:text-4xl font-bold py-6 my-5 md:my-0">
        Mis habilidades:
      </h2>
      {skills.length % 6 === 0 ? (
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
      )}
    </div>
  );
};
