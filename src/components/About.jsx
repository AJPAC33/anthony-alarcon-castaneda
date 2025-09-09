import React from "react";
import { aboutMeImage } from "../assets";

export const About = () => {
  return (
    <div className="text-white max-w-[80%] mx-auto my-8 bg-black" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-6 primary-color">Sobre Mi</h2>
            <p className="text-base lg:text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose.
            </p>
          </div>
        </div>
        <div className="col-span-1 my-15 mx-auto w-[350px] h-auto lg:w-[350px] m-[50px]">
          <img src={aboutMeImage} alt="hero image" />
        </div>
      </div>
    </div>
  );
};
