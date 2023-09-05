import React from "react";
import Token from "../../assets/token.png";

const TokeNomics = () => {
  return (
    <div className="flex flex-col w-full p-8 mt-2 bg-cover md:p-20 bg-pattern-2 ">
      <h1
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="mb-6 text-3xl font-semibold top-5 md:text-5xl md:mb-8"
      >
        TOKENNOMICS
      </h1>

      <div className="flex flex-col items-center justify-center md:flex-row">
        <img className="w-1/2 mr-20 md:m-0" src={Token} alt="" />
        <div
          className="  rounded-2xl  bg-gradient-to-t from-[#110C09] to-[#8E8C8C]/25 px-8 mb-20 "
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          <ul
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="text-xs font-thin list-disc md:text-lg md:font-semibold"
          >
            <li className="pt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li className="pt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li className="pt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li className="pt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li className="pt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li className="pt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TokeNomics;
