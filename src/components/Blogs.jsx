import React from "react";
import BlogImg1 from "../assets/blog_1.png";
import BlogImg2 from "../assets/Blog_2.png";
import BlogImg3 from "../assets/Blog_3.png";
import BlogImg4 from "../assets/Blog_4.png";
import ellipse from "../assets/ellipsenew.png";

const Blogs = () => {
  // Define the URLs of the Medium articles
  const articleUrls = [
    "https://medium.com/@blazpay/introduction-to-blazpay-a-comprehensive-crypto-financial-solution-54223a4c2357",
    "https://medium.com/@blazpay/blazpays-entrypasses-and-rewards-unlocking-a-world-of-innovation-and-benefits-7f21a50471f1",
    "https://medium.com/@blazpay/exploring-blazpays-comprehensive-product-suite-a-holistic-crypto-financial-solution-bf10569ba104",
    "https://medium.com/@blazpay/blazpay-blockchain-integration-e789a1e8eb8c",
  ];

  const BlogImg = [BlogImg1, BlogImg2, BlogImg3, BlogImg4];
  return (
    <div
      id="blogs"
      className="flex flex-col justify-center w-full p-8 bg-cover md:p-20 bg-feature-back relative mid-h-screen md:h-screen"
      style={{ overflow: "hidden" }}
    >
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <h1 className="w-full font-bold text-5xl mr-auto md:absolute top-2 pl-10">
          Blogs
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-2">
          {/* Wrap each image with an anchor tag */}
          {articleUrls.map((url, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-down"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <img className="w-full mx-auto" src={BlogImg[index]} alt="" />
            </a>
          ))}
        </div>
        <img
          className="absolute hidden md:block"
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
          className="absolute hidden md:block"
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
