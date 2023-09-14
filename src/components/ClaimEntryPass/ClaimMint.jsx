import React, { useState } from "react";

const TestNetCard = ({}) => {
  return <div className="w-full"></div>;
};

const MainNetCard = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center w-1/2 gap-4 p-5 m-2  bg-gradient-to-r from-[#FF3503] to-yellow-500 rounded-lg">
        <h1>Test Chain Entry Pass</h1>
        <button className="flex items-center justify-center px-10 py-2 text-black bg-white rounded-lg">
          Mint Now
        </button>
      </div>
    </div>
  );
};

const ClaimMint = () => {
  const [select, setSelect] = useState(true);

  const HandleSelect = () => {
    setSelect(!select);
  };

  return (
    <div className="w-full px-3 py-6" style={{ height: "100vh" }}>
      <div className="flex flex-col items-center w-full h-full p-2 bg-gray-800 border-2 border-orange-700 rounded-lg">
        <div className="flex flex-row items-center w-full gap-5">
          <button
            onClick={HandleSelect}
            className={`rounded-2xl px-5 text-lg ${
              select
                ? "bg-gradient-to-r from-[#FF3503] to-yellow-500"
                : "bg-white text-black"
            }`}
          >
            TestNet
          </button>
          <button
            onClick={HandleSelect}
            className={`rounded-2xl px-5 text-lg ${
              !select
                ? "bg-gradient-to-r from-[#FF3503] to-yellow-500"
                : "bg-white text-black"
            }`}
          >
            MainNet
          </button>
        </div>
        {select ? (
          <div className="grid justify-center w-full grid-cols-1 m-auto md:grid-cols-2">
            <MainNetCard />
            <MainNetCard />
            <MainNetCard />
            <MainNetCard />
            <MainNetCard />
            <MainNetCard />
            <MainNetCard />
            <MainNetCard />
          </div>
        ) : (
          <div className="grid justify-center w-full grid-cols-1 m-auto md:grid-cols-2">
            <MainNetCard />
            <MainNetCard />
            <MainNetCard />
            <MainNetCard />
            <MainNetCard />
            <MainNetCard />
            <MainNetCard />
            <MainNetCard />
          </div>
        )}
      </div>
    </div>
  );
};

export default ClaimMint;
