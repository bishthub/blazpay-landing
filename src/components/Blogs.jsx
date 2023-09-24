import React from "react";
import ellipse from "../assets/ellipsenew.png";

const Blogs = () => {
  // Define the URLs of the Medium articles
  const articleUrls = [
    "https://medium.com/@blazpay/introduction-to-blazpay-a-comprehensive-crypto-financial-solution-54223a4c2357",
    "https://medium.com/@blazpay/blazpays-entrypasses-and-rewards-unlocking-a-world-of-innovation-and-benefits-7f21a50471f1",
    "https://medium.com/@blazpay/exploring-blazpays-comprehensive-product-suite-a-holistic-crypto-financial-solution-bf10569ba104",
    "https://medium.com/@blazpay/blazpay-blockchain-integration-e789a1e8eb8c",
  ];

  const BlogImg = [
    "https://miro.medium.com/v2/resize:fit:828/format:webp/1*u4J7qhCfssFPsSyVDfgUqQ.jpeg",
    "https://miro.medium.com/v2/resize:fit:828/format:webp/1*dmIV3teFTjLWy3LiLTbXtQ.jpeg",
    "https://miro.medium.com/v2/resize:fit:828/format:webp/1*zoiuBnmt4CckChhYRASgjw.jpeg",
    "https://miro.medium.com/v2/resize:fit:828/format:webp/1*YYwuZVTJbvebBa7s3QWbFQ.png",
  ];
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
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-5">
          {/* Wrap each image with an anchor tag */}
          {articleUrls.map((url, index) => (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer">
              <img
                className="w-full mx-auto rounded-xl"
                src={BlogImg[index]}
                alt=""
                data-aos="fade-down"
                data-aos-delay="500"
                data-aos-duration="1000"
              />
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
