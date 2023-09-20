import React, { useState, useEffect } from "react";
import axios from "axios";

const MainNetCard = ({ entryPass }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center w-1/2 gap-4 p-5 m-2  bg-gradient-to-r from-[#FF3503] to-yellow-500 rounded-lg">
        <h1>{entryPass.name}</h1>
        <button className="flex items-center justify-center px-10 py-2 text-black bg-white rounded-lg">
          Mint Now
        </button>
      </div>
    </div>
  );
};

const TestNetCard = ({ entryPass }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center w-1/2 gap-4 p-5 m-2 bg-blue-500 rounded-lg">
        <h1>{entryPass.name}</h1>
        <button className="flex items-center justify-center px-10 py-2 text-black bg-white rounded-lg">
          Mint Now
        </button>
      </div>
    </div>
  );
};

const ClaimMint = () => {
  const [select, setSelect] = useState(true);
  const [entryPassData, setEntryPassData] = useState([]);

  useEffect(() => {
    axios
      .get("http://34.93.103.113:3000/api/entrypass/entry-passes")
      .then((response) => {
        setEntryPassData(response.data);
      });
  }, []);

  const HandleSelect = () => {
    setSelect(!select);
  };

  return (
    <div className="w-full px-3 py-6 min-h-screen">
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
            MainNet
          </button>
          <button
            onClick={HandleSelect}
            className={`rounded-2xl px-5 text-lg ${
              !select
                ? "bg-gradient-to-r from-[#FF3503] to-yellow-500"
                : "bg-white text-black"
            }`}
          >
            TestNet
          </button>
        </div>
        <div className="grid justify-center w-full grid-cols-1 m-auto md:grid-cols-2">
          {entryPassData.map((entryPass) => {
            // Conditionally render cards based on the type
            if (select && entryPass.type === "mainnet") {
              return <MainNetCard key={entryPass._id} entryPass={entryPass} />;
            } else if (!select && entryPass.type === "testnet") {
              return <TestNetCard key={entryPass._id} entryPass={entryPass} />;
            }
            return null; // Skip rendering if type doesn't match
          })}
        </div>
      </div>
    </div>
  );
};

export default ClaimMint;
