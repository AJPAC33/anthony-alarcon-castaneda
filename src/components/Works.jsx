import React from "react";
import { TbBrandGithubFilled } from "react-icons/tb";

export const Works = () => {
  return (
    <div className="bg-black max-w-[80%] mx-auto p-5" id="works">
      <div className="pb-8">
        <p className="text-4xl mb-6 font-bold primary-color">Proyectos</p>
        <p className="text-gray-400">Algunos de mis proyectos recientes</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[320px] bg-cover relative">
          <img src="" layout="fill" objectFit="cover" alt="" />
          <div className="bg-transparent absolute inset-0 flex flex-col justify-center items-center transform transition-transform duration-300 hover:scale-110">
            <span className="text-2xl font-bold text-white tracking-wider">
              Proyecto
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center border rounded m-2 py-2 px-3 text-white">
                  <TbBrandGithubFilled />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
