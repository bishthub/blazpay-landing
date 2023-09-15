import React from "react";
import Token from "../../assets/tokenNew.png";

const TokeNomics = () => {
  return (
    <div className="flex flex-col w-full p-8 bg-cover md:p-20 bg-pattern-2 h-screen">
      <h1
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="mb-6 text-3xl font-semibold top-5 md:text-5xl md:mb-8"
      >
        TOKENNOMICS
      </h1>

      <div className="flex flex-col items-center justify-center w-full gap-5 md:flex-row">
        <img src={Token} alt="" style={{ width: "30rem" }} />
        <div
          className="w-3/4 md:w-1/2 py-2 m-auto border-2 border-orange-700 rounded-xl"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          <div
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="flex flex-col text-xs list-disc md:text-lg md:font-semibold"
          >
            <div className="flex flex-row items-center justify-between w-full p-3 text-white bg-black">
              <div className="w-full text-center"></div>
              <h1 className="w-full text-center">Supply %</h1>
            </div>
            <div className="flex flex-row items-center justify-between w-full p-1 text-black bg-white">
              <p className="w-full text-center">Investors</p>
              <p className="w-full text-center">20%</p>
            </div>
            <div className="flex flex-row items-center justify-between w-full bg-gradient-to-r from-[#FF3503] to-yellow-500 p-3">
              <p className="w-full text-center">Team & Advisors</p>
              <p className="w-full text-center">10%</p>
            </div>
            <div className="flex flex-row items-center justify-between w-full p-1 text-black bg-white">
              <p className="w-full text-center">Founders</p>
              <p className="w-full text-center">3%</p>
            </div>
            <div className="flex flex-row items-center justify-between w-full bg-gradient-to-r from-[#FF3503] to-yellow-500 p-3">
              <p className="w-full text-center">Giveaway/ Airdrops</p>
              <p className="w-full text-center">5%</p>
            </div>
            <div className="flex flex-row items-center justify-between w-full p-1 text-black bg-white">
              <p className="w-full text-center">Community / Exchanges</p>
              <p className="w-full text-center">30%</p>
            </div>
            <div className="flex flex-row items-center justify-between w-full bg-gradient-to-r from-[#FF3503] to-yellow-500 p-3">
              <p className="w-full text-center">Locked</p>
              <p className="w-full text-center">20%</p>
            </div>
            <div className="flex flex-row items-center justify-between w-full p-1 text-black bg-white">
              <p className="w-full text-center">Business Development</p>
              <p className="w-full text-center">5%</p>
            </div>
            <div className="flex flex-row items-center justify-between w-full bg-gradient-to-r from-[#FF3503] to-yellow-500 p-3">
              <p className="w-full text-center">Reserves</p>
              <p className="w-full text-center">7%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokeNomics;
