import React from "react";

import { BsChevronDown } from "react-icons/bs";

const Card = ({
  title,
  content,
  width,
  height,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
}) => {
  const cardStyles = `
 
  mx-auto
  border-2
  border-yellow-400
  rounded-md
  flex
  items-start
  flex-col
`;

  const cardMoreStyles = {
    width: width === "full" ? "100%" : width,
    height: height === "full" ? "100%" : height,

    marginBottom: marginBottom,
    marginTop: marginTop,
    marginLeft: marginLeft,
    marginRight: marginRight,
  };

  const mediaQueryStyles = {
    marginBottom: marginBottom,
    marginTop: marginTop,
  };

  const titleStyles = `
  mb-2
  text-base md:text-lg lg:text-xl

  font-semibold
  h-12
  bg-gradient-to-r from-red-600 to-yellow-300
  border-b-2
  border-orange-500
  w-full
  flex
  flex-row
  items-center
  md:p-2 lg-p-4

  md:gap-4 lg:gap-8
`;

  const contentStyles = `
  text-xs
  text-gray-100
  flex
  justify-center
  items-center
  w-full
  h-full
  mx-auto
  text-center
  bg-gray-700
`;

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-delay="400"
      className={cardStyles}
      style={{
        ...cardMoreStyles,
        ...(window.innerWidth <= 768 ? mediaQueryStyles : {}),
      }}
    >
      <h2 className={titleStyles}>
        <BsChevronDown />
        {title}
      </h2>
      <p className={contentStyles}>{content} </p>
    </div>
  );
};

const Roadmap = () => {
  return (
    <div className="relative flex-col justify-center min-h-screen gap-6 p-20 mt-8 bg-center bg-cover bg-pattern-2">
      <h1
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="mb-6 text-3xl font-semibold  top-5 md:text-5xl md:mb-8"
      >
        ROADMAP
      </h1>

      <div className="relative flex flex-col justify-center w-full gap-10 pl-10 md:flex-row margin-1 g-8 md:pl-5 lg:pl-30 xl:pl-40">
        <Card
          title="Step 1"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum erat ut tristique."
          width="15rem"
          height="15rem"
          marginTop=""
        />
        <Card
          title="Step 2"
          content="Vestibulum vehicula purus ut ante ullamcorper, a convallis nulla fermentum."
          width="18rem"
          height="20rem"
          marginTop="5rem"
        />
        <Card
          title="Step 3"
          content="Vestibulum vehicula purus ut ante ullamcorper, a convallis nulla fermentum."
          width="15rem"
          height="15rem"
          marginTop="20rem"
        />
      </div>
      <div className="flex flex-col justify-center gap-4 m-4 md:gap-10 md:flex-row margin-1 lg:g-8">
        <Card
          title="Step 4"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum erat ut tristique."
          width="20rem"
          height="23rem"
          marginTop="-15rem"
          marginLeft=""
          marginRight=""
        />
        <Card
          title="Step 5"
          content="Vestibulum vehicula purus ut ante ullamcorper, a convallis nulla fermentum."
          width="13rem"
          height="21rem"
          marginTop="-10rem"
          marginBottom="0"
        />
        <Card
          title="Step 6"
          content="Vestibulum vehicula purus ut ante ."
          width="15rem"
          height="13rem"
          marginTop=""
          marginBottom=""
        />
      </div>
    </div>
  );
};

export default Roadmap;
