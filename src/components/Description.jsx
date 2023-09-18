import React from "react";
import card from "../assets/cards.png";
import cardShadow from "../assets/cardShadow.png";

import apple from "../assets/apple.png";
import google from "../assets/google.png";

const Description = () => {
  return (
    <>
      <div className="mt-2 bg-cover bg-feature-back ">
        <div className="justify-between px-4 md:mx-auto lg:max-w-7xl md:flex md:px-8 font-bvmp md:h-screen">
          <div
            className=" flex-col  md:w-[55%] items-center "
            data-aos="zoom-out-right"
            data-aos-duration="1000"
          >
            <img className="w-4/5" src={card} alt="" />
            {/* <img src={cardShadow} alt="" className="" /> */}
          </div>
          <div className="md:w-[42%] md:relative mt-8 md:mt-0 font-bvmp">
            <div
              className={` hidden md:visible gap-5 justify-center items-center  text-center md:flex w-[300px] h-[300px]   md:my-4 bg-gradient-to-r from-[#FF3503] to-yellow-500 rounded-[50%] mx-auto`}
              data-aos="zoom-in"
              // data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <h2 className="text-4xl font-semibold ">
                Revolutionising the Financial Landscape
              </h2>
            </div>
            <div className="">
              <h2 className="mb-2 ml-2 text-3xl md:hidden font-bvmp">
                {" "}
                Revolutionising the Financial Landscape
              </h2>
            </div>
            <div className="md:absolute top-56 py-4">
              <div
                className="  rounded-2xl  bg-gradient-to-t from-[#110C09] to-[#8E8C8C]/25 px-4  "
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <ul className="text-xs font-thin list-disc md:text-lg md:font-semibold">
                  <li className="pt-6">
                    The global financial landscape has witnessed a
                    transformative shift towards digitalization and
                    decentralization.
                  </li>
                  <li className="pt-6">
                    The rise of cryptocurrencies has played a pivotal role in
                    this evolution, with Blazpay emerging as a pioneering player
                    in the field
                  </li>
                  <li className="pt-6">
                    Blazpay, a leading crypto payment gateway and end-to-end
                    financial solution provider, is redefining the way
                    businesses and individuals engage with digital assets.
                  </li>
                </ul>
              </div>
              <div className="flex gap-5 mx-auto justify-evenly py-4">
                <a href="">
                  <img src={apple} alt="" className="cursor-pointer" />
                </a>

                <a href="">
                  <img src={google} alt="" className="cursor-pointer " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
