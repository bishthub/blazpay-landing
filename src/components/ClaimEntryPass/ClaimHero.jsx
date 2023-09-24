import React from "react";
import EntryImg from "../../assets/entry.png";
import logo from "../../assets/blazWhite.png";

const ClaimHero = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full gap-8 md:flex-row md:gap-0"
      style={{ height: "90vh" }}
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-easing="ease-in"
    >
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center w-3/4 gap-5 px-4 py-8 m-auto bg-gray-800 border-2 border-orange-700 rounded-lg">
          <div className="flex flex-col items-center justify-center p-4  bg-gradient-to-r from-[#FF3503] to-yellow-500 rounded-lg">
            <h1 className="w-full m-auto text-2xl font-bold text-center ">
              MINT YOUR ENTRYPASS TO
            </h1>
            <img className="w-3/4 pt-4" src={logo} alt="" />
            <div className="w-full border-b-2 border-white"></div>
            <p className="text-sm">
              orem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full">
        <div className="flex items-center justify-center w-3/4">
          <img className="w-3/4 mb-3 md:w-3/4 md:mb-0" src={EntryImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ClaimHero;
