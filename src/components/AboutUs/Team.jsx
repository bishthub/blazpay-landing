import React from "react";
import img1 from "../../assets/baldeep.jpg";
import img2 from "../../assets/rishabh.jpg";
import img3 from "../../assets/bisht.png";
import "./about.css";

const Team = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-3 p-8 bg-cover md:h-screen md:p-20 bg-pattern-2 md:gap-10 ">
      <h1
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="w-full mr-auto text-3xl font-semibold md:text-5xl"
      >
        TEAM
      </h1>

      <div className="container flex flex-col justify-center w-full gap-20 m-auto md:gap-40 md:flex-row md:items-center md:justify-center">
        <div className="flex flex-row items-center justify-center gap-5 md:gap-10 md:flex-col">
          <img
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="w-40 h-40 p-2 bg-white rounded-full md:p-4 md:w-56 md:h-56"
            style={{
              border: "8px solid orange",
              // height: "14rem",
              // width: "14rem",
            }}
            src={img1}
            alt=""
          />
          <div className="flex flex-col items-center justify-center gap-5">
            <h2>Baldeep Sethi</h2>
            <h2>CEO</h2>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 md:gap-10 md:flex-col">
          <img
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="w-40 h-40 p-2 bg-white rounded-full md:p-4 md:w-56 md:h-56"
            style={{
              // width: "14rem",
              // height: "14rem",
              border: "8px solid orange",
              // borderRadius: "50%",
              // padding: "1rem",
              // backgroundColor: "white",
            }}
            src={img3}
            alt=""
          />

          <div className="flex flex-col items-center justify-center gap-5">
            <h2>Shubham Bisht</h2>
            <h2>CTO</h2>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-5 md:gap-10 md:flex-col">
          <img
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="w-40 h-40 p-2 bg-white rounded-full md:p-4 md:w-56 md:h-56"
            style={{
              // width: "14rem",
              // height: "14rem",
              border: "8px solid orange",
              // borderRadius: "50%",
              // padding: "1rem",
              // backgroundColor: "white",
            }}
            src={img2}
            alt=""
          />
          <div className="flex flex-col items-center justify-center gap-5">
            <h2>Rishabh Bhatti</h2>
            <h2>CFO</h2>
          </div>
        </div>
      </div>
      <div className="p-2 m-auto font-semibold border-2 border-orange-700 rounded-lg backdrop-blur-lg">
        <h1>Become a Partner</h1>
      </div>
    </div>
  );
};

export default Team;
