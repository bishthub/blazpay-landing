import React from "react";
import rubic from "../assets/rubic.png";
import spaceid from "../assets/spaceid.png";
import omni from "../assets/omni.png";
import onramp from "../assets/onramp1.png";
import nftscan from "../assets/nftscan.png";
import dripverse from "../assets/dripverse.png";
import gempad from "../assets/gempad.png";

const Partners = () => {
  const sendEmail = () => {
    window.location.href = "mailto:contact@blazpay.com";
  };
  return (
    <div className="flex flex-col items-center w-full h-full gap-2 px-10 py-4 md:h-screen">
      <h1 className="w-full mr-auto text-5xl font-bold">PARTNERS</h1>
      <div className="flex flex-col items-center justify-center w-full gap-2 md:flex-row md:justify-around">
        <img src={gempad} alt="gempad" style={{ width: "12rem" }} />

        <img src={dripverse} alt="dripverse" style={{ width: "12rem" }} />

        <img src={spaceid} alt="spaceid" style={{ width: "12rem" }} />

        <img src={rubic} alt="rubic" style={{ width: "12rem" }} />
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-2 md:flex-row md:justify-around">
        <img src={nftscan} alt="nftscan" style={{ width: "12rem" }} />
        <img src={omni} alt="omni" style={{ width: "12rem" }} />
        <img src={onramp} alt="onramp" style={{ width: "12rem" }} />
      </div>
      <div>
        <button
          className="w-full p-2 font-semibold bg-transparent rounded-xl"
          style={{ border: "2px solid orange" }}
          onClick={sendEmail}
        >
          Become A Partner
        </button>
      </div>
    </div>
  );
};

export default Partners;
