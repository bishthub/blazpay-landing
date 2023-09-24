import React from "react";

import { BsChevronDown } from "react-icons/bs";
import RoadmapImg from "../../assets/roadmap.png";
import ArrowImg from "../../assets/arrow.png";
import LeftArrowImg from "../../assets/leftarr.png";
import LineImg from "../../assets/line.png";
import Ellipse from "../../assets/ellipsenew.png";
import Rect from "../../assets/rect.png";
import Navbar from "../Navbar";
// min-h-screen

const Roadmap = () => {
  return (
    <div
      className="relative flex-col justify-center w-full  gap-6 p-20 mt-8 bg-center bg-cover bg-pattern-2 min-h-screen
  
    "
      style={{ overflow: "hidden" }}
    >
      <h1
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="mb-6 text-3xl font-semibold top-5 md:text-5xl md:mb-8"
      >
        ROADMAP
      </h1>
      <div className="relative flex flex-row gap-2">
        <img src={LineImg} alt="" className="block md:hidden" />
        <img
          src={Rect}
          alt=""
          className="absolute block w-4 md:hidden -left-2"
        />
        <img
          src={Rect}
          alt=""
          className="absolute bottom-0 block w-4 md:hidden -left-2"
        />

        <div className="relative flex flex-col justify-center w-full gap-4 m-1 lg:gap-10 g-8 ">
          <div className="flex flex-col items-center justify-center w-full gap-4 lg:flex-row sm:gap-2 lg:gap-10">
            <div
              className="flex flex-col justify-start w-full h-full p-2 border border-orange-700 rounded-lg backdrop-blur-lg lg:h-60"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="400"

              // style={{ height: "15rem" }}
            >
              <img
                src={Ellipse}
                alt=""
                className="absolute block w-8 -left-8 md:hidden"
              />
              <h1>Q4 2023</h1>
              <ul className="pl-6 list-disc">
                <li>Landing</li>
                <li>WebsiteEntrypasses</li>
                <li>Beta V1 User account</li>
              </ul>
            </div>
            <div
              className="flex flex-col justify-start w-full h-full p-2 border border-orange-700 rounded-lg backdrop-blur-lg lg:h-60"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <img
                src={Ellipse}
                alt=""
                className="absolute block w-8 -left-8 md:hidden"
              />
              <h1>Q2 2024</h1>
              <ul className="pl-6 list-disc">
                <li>Beta V2 – Merchant account</li>
                <li>Beta Dedicated Payment gateways for leading chains</li>
                <li>Mainnet Dedicated Payment gateways for leading chains</li>
                Main net – Blazpay (tokenlaunch)
              </ul>
            </div>
            <div
              className="flex flex-col justify-start w-full h-full p-2 border border-orange-700 rounded-lg backdrop-blur-lg lg:h-60"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="400"
              // style={{ height: "15rem" }}
            >
              <img
                src={Ellipse}
                alt=""
                className="absolute block w-8 -left-8 md:hidden"
              />
              <h1>Q2 2024</h1>
              <ul className="pl-6 list-disc">
                <li>Beta web3 domain</li>
                <li>web3 Domain</li>
              </ul>
            </div>
          </div>
          <div className="relative flex items-center justify-center w-full">
            <img className="hidden w-full md:block" src={RoadmapImg} alt="" />
            <img
              src={ArrowImg}
              alt=""
              className="absolute top-0 left-0 hidden md:block "
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="400"
            />
            <img
              src={ArrowImg}
              alt=""
              className="absolute top-0 hidden left-1/4 md:block"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="400"
            />
            <img
              src={ArrowImg}
              alt=""
              className="absolute top-0 hidden left-1/2 md:block"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="400"
            />
            <img
              src={ArrowImg}
              alt=""
              className="absolute top-0 hidden left-3/4 md:block"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="400"
            />
            <img
              src={LeftArrowImg}
              alt=""
              className="absolute bottom-0 left-0 hidden md:block"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="400"
            />
            <img
              src={LeftArrowImg}
              alt=""
              className="absolute bottom-0 hidden left-1/4 md:block"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="400"
            />
            <img
              src={LeftArrowImg}
              alt=""
              className="absolute bottom-0 hidden left-1/2 md:block"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="400"
            />
            <img
              src={LeftArrowImg}
              alt=""
              className="absolute bottom-0 hidden left-3/4 md:block"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="400"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-4 lg:flex-row sm:gap-2 lg:gap-10 ">
            <div
              className="flex flex-col justify-start w-full h-full p-2 border border-orange-700 rounded-lg backdrop-blur-md lg:h-32"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <img
                src={Ellipse}
                alt=""
                className="absolute block w-8 -left-8 md:hidden"
              />
              <h1>Q4 2023</h1>
              <ul className="pl-6 list-disc">
                <li>Beta BLAZNFT buying solution</li>
                <li>BLAZNFT buying solution</li>
              </ul>
            </div>
            <div
              className="flex flex-col justify-start w-full h-full p-2 border border-orange-700 rounded-lg backdrop-blur-md md-h-full lg:h-32"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="400"
              // style={{ height: "8rem" }}
            >
              <img
                src={Ellipse}
                alt=""
                className="absolute block w-8 -left-8 md:hidden"
              />
              <h1>Q4 2023</h1>
              <ul className="pl-6 list-disc">
                <li>Beta BLAZSwap</li>
                <li>BLAZSwap</li>
              </ul>
            </div>
            <div
              className="flex flex-col justify-start w-full h-full p-2 border border-orange-700 rounded-lg backdrop-blur-md lg:h-32"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <img
                src={Ellipse}
                alt=""
                className="absolute block w-8 -left-8 md:hidden"
              />
              <h1>Q4 2023</h1>
              <ul className="pl-6 list-disc">
                <li>Beta MOBILE APPLICATION</li>
                <li>Mobile application</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
