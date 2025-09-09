import React from "react";
import {
  htmlImage,
  cssImage,
  reactImage,
  tailwindImage,
  javascriptImage,
} from "../assets/index";

export const Skills = () => {
  return (
    <div className="bg-black text-gray-400 md:h-[20%] max-w-[80%] mx-auto place-items-center md:justify-between">
      <h2 className="text-gray-700 text-3xl md:text-4xl font-bold mb-8">
        Mis habilidades
      </h2>
      <div className="flex flex-row sm:gap-12 xl:gap-12">
        <div className="flex flex-col items-center sm:w-[80px] max-w-[120px] col-span-1 m-2 sm:my-0 drop-shadow-[0_0_22px_rgba(69,252,240,0.75)]">
          <img src={tailwindImage} alt="tailwind image" />
          <p className="mt-2">Tailwind</p>
        </div>
        <div className="flex flex-col items-center sm:w-[80px] max-w-[120px] col-span-1 m-2 sm:my-0 drop-shadow-[0_0_22px_rgba(246,133,38,0.75)]">
          <img src={htmlImage} alt="html image" />
          <p className="mt-2">HTML</p>
        </div>
        <div className="flex flex-col items-center sm:w-[80px] max-w-[120px] col-span-1 m-2 sm:my-0 drop-shadow-[0_0_22px_rgba(6,111,169,0.75)]">
          <img src={cssImage} alt="css image" />
          <p className="mt-2">CSS</p>
        </div>
        <div className="flex flex-col items-center sm:w-[80px] max-w-[120px] col-span-1 m-2 sm:my-0 drop-shadow-[0_0_22px_rgba(255,250,5,0.75)]">
          <img src={javascriptImage} alt="javascript image" />
          <p className="mt-2">Javascript</p>
        </div>
        <div className="flex flex-col items-center sm:w-[80px] max-w-[120px] col-span-1 m-2 sm:my-0 drop-shadow-[0_0_22px_rgba(74,217,255,0.75)]">
          <img src={reactImage} alt="react image" />
          <p className="mt-2">React</p>
        </div>
      </div>
    </div>
  );
};
