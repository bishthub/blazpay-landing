import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Gradient from "../utilities/Gradient";
import Features from "./Features";
import Description from "./Description";
import WhyUs from "./WhyUs";
import Footer from "./Footer";
import Blogs from "./Blogs";

const Landing = () => {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <Hero />
        <Gradient />
        <Features />
        <Gradient />
        <Description />
        <Gradient />
        <WhyUs />
        <Gradient />
        <Blogs />

        {/* <Gradient /> */}
        <Footer />
      </div>
    </>
  );
};

export default Landing;
