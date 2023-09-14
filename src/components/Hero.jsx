import React from "react";
import back1 from "../assets/heroBack.png";
import mobile1 from "../assets/mobile_4.png";
import mobile2 from "../assets/mobile_5.png";
const Hero = () => {
  return (
    <>
      <div className="mt-8 bg-cover md:bg-hero-pattern">
        <div className="justify-between px-4 pb-20 md:mx-auto lg:max-w-7xl md:flex md:px-8 font-bvmp">
          <div
            className=" rounded-3xl md:w-[55%] overflow-hidden bg-[#8E8C8C]/25 "
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
          >
            <div className="p-6 ">
              <div className=" bg-gradient-to-r from-[#FF3503] to-yellow-500 mx-auto px-8 rounded-lg py-6 mb-8">
                <h1 className="mb-8 text-xl font-bold md:text-6xl md:p-6">
                  Crypto Payments made easy
                </h1>
                <p className="text-xs font-thin md:text-lg md:px-6">
                  Blazpay, a leading crypto payment gateway and end -to- end
                  financial solution provider, is redefining the way businesses
                  and individuals engage with digital assets thus offering a
                  holistic ecosystem that encompasses crypto payment gateway ,on
                  - ramp and off- ramp solutions, and an integrated swap wallet
                  .
                </p>
              </div>
            </div>
            <div className="p-10 bg-white ">
              <div className="bg flex justify-center bg-black mx-auto max-w-md rounded-lg p-2 cursor-pointer transition ease-linear hover:scale-[1.02] drop-shadow-md">
                <a href="#" className="text-center">
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div
            className="  rounded-tl-2xl rounded-bl-2xl rounded-br-[50%] md:w-[42%]  mt-8 md:mt-0 bg-gradient-to-t from-[#110C09]/50 to-[#8E8C8C]/25  "
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            <div className="relative b1">
              <img
                src={mobile1}
                alt="mobile1"
                className="scale-[0.7] md:scale-[1]"
              />
              <img
                src={mobile2}
                alt="mobile2"
                className="absolute top-48 left-11 md:left-48 scale-[0.7] md:scale-[1]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
