import React from "react";
import BlogImg from "../assets/blog.png";
import ellipse from "../assets/ellipsenew.png";

const Blogs = () => {
  return (
    <div className="flex flex-col justify-center w-full p-8 bg-cover md:p-20 bg-feature-back relative md:h-screen ">
      <div className="w-full flex flex-col items-center justify-center  gap-5 ">
        <h1 className=" w-full font-bold text-5xl mr-auto md:absolute top-2 pl-10">
          Blogs
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-1  ">
          <img className="w-full mx-auto" src={BlogImg} alt="" />
          <img className="w-full mx-auto" src={BlogImg} alt="" />
          <img className="w-full mx-auto" src={BlogImg} alt="" />
          <img className="w-full mx-auto" src={BlogImg} alt="" />
        </div>
        <img
          className="absolute hidden md:block "
          style={{
            width: "15rem",
            bottom: "-7.5rem",
            left: "-7.5rem",
            zIndex: "555",
          }}
          src={ellipse}
          alt=""
        />
        <img
          className="absolute hidden md:block "
          style={{
            width: "7rem",
            bottom: "4rem",
            left: "10rem",
            zIndex: "555",
          }}
          src={ellipse}
          alt=""
        />
        {/* <img
          className="absolute hidden md:block "
          style={{
            width: "7rem",
            top: "0",
            right: "-3.5rem",
            zIndex: "555",
          }}
          src={ellipse}
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default Blogs;
