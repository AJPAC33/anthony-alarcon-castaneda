import React from "react";
import { TbBrandGithubFilled } from "react-icons/tb";
import { MdOutlineWebAsset } from "react-icons/md";
import { projects } from "../utils/data";

export const Works = () => {
  return (
    <div className="bg-black max-w-[80%] mx-auto p-5" id="works">
      <div className="pb-8">
        <p className="text-4xl mb-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 inline-block">
          Proyectos
        </p>
        <p className="text-gray-400">Algunos de mis proyectos recientes</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-16">
        {projects.map(({ title, description, image, link, github }, index) => (
          <div
            className="overflow-hidden shadow-lg shadow-[#363738] group container rounded-lg flex justify-center items-center h-[320px] bg-cover relative"
            key={index}
          >
            <img
              src={image}
              layout="fill"
              className="object-cover brightness-50"
              alt={title}
            />
            <div className="bg-transparent absolute inset-0 flex flex-col justify-center items-center transform transition-transform duration-300 hover:scale-110">
              <span className="text-2xl font-bold text-white tracking-wider">
                {title}
              </span>
              <span className="text-[12px] font-bold text-white py-4 px-28 text-center tracking-wider">
                {description}
              </span>
              <div className="pt-4 text-center">
                <a href={github} target="_blank">
                  <button className="text-center border rounded m-2 py-2 px-3 text-white cursor-pointer hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-600 transition duration-400">
                    <TbBrandGithubFilled />
                  </button>
                </a>
                <a href={link} target="_blank">
                  <button className="text-center border rounded m-2 py-2 px-3 text-white cursor-pointer hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-600 transition duration-400">
                    <MdOutlineWebAsset />
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
