import React from "react";
import img1 from "../../assets/teamimg1.png";
import img2 from "../../assets/teamimg2.png";
import img3 from "../../assets/teamimg3.png";
import "./about.css";

const Team = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-3 p-8 bg-cover md:p-20 bg-pattern-2 md:gap-10 h-screen  ">
      <h1
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className=" text-3xl font-semibold  md:text-5xl"
      >
        PARTNERS
      </h1>

      <div className="container flex flex-col justify-center w-full gap-20 m-auto md:gap-40 md:flex-row md:items-center md:justify-center">
        <div className="flex flex-row items-center justify-center gap-5 md:gap-10 md:flex-col">
          <img
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="w-40 md:w-56 rounded-full p-2 md:p-4 bg-white "
            style={{ border: "8px solid orange" }}
            src={img1}
            alt=""
          />
          {/* <div className="flex flex-col gap-5">
            <h2>Name</h2>
            <h2>Position</h2>
          </div> */}
        </div>

        <div className="flex flex-row items-center justify-center gap-5 md:gap-10 md:flex-col">
          {/* <img
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="400"
            style={{
              width: "15rem",
              border: "8px solid orange",
              borderRadius: "50%",
              padding: "1rem",
              backgroundColor: "white",
            }}
            src={img2}
            alt=""
          /> */}
          {/* <div className="flex flex-col gap-5">
            <h2>Name</h2>
            <h2>Position</h2>
          </div> */}
          <img
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="w-40 md:w-56 rounded-full p-2 md:p-4 bg-white "
            style={{ border: "8px solid orange" }}
            src={img2}
            alt=""
          />
        </div>
        <div className="flex items-center justify-center gap-5 md:gap-10 md:flex-col">
          {/* <img
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="400"
            style={{
              width: "14rem",
              border: "8px solid orange",
              borderRadius: "50%",
              padding: "1rem",
              backgroundColor: "white",
            }}
            src={img3}
            alt=""
          /> */}
          <img
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="w-40 md:w-56 rounded-full p-2 md:p-4 bg-white "
            style={{ border: "8px solid orange" }}
            src={img3}
            alt=""
          />
          {/* <div className="flex flex-col gap-5">
            <h2>Name</h2>
            <h2>Position</h2>
          </div> */}
        </div>
      </div>
      <div className="p-2 m-auto font-semibold border-2 border-orange-700 rounded-lg backdrop-blur-lg">
        <h1>Become a Partner</h1>
      </div>
    </div>
  );
};

export default Team;
