import React, { useState, useEffect } from "react";
import axios from "axios";
import { ethers } from "ethers";
import arbAbi from "./arbAbi.json";
import omniAbi from "./omniAbi.json";

const connectWallet = async (chain) => {
  if (window.ethereum) {
    try {
      // Request account access
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();
      if (chain === "omni") {
        if (network.chainId !== 165) {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0xA5",
                chainName: "Omni Testnet",
                nativeCurrency: { name: "OMNI", symbol: "OMNI", decimals: 18 },
                rpcUrls: ["https://testnet.omni.network"], // replace with the actual RPC
                blockExplorerUrls: ["https://testnet.explorer.omni.network"], // replace with the actual block explorer
              },
            ],
          });
        }
      } else if (chain === "arbitrum") {
        if (network.chainId !== 421613) {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x66EED",
                chainName: "Arbitrum Goerli",
                nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
                rpcUrls: ["https://goerli-rollup.arbitrum.io/rpc"], // replace with the actual RPC
                blockExplorerUrls: ["https://goerli.arbiscan.io/"], // replace with the actual block explorer
              },
            ],
          });
        }
      } else {
        console.log("ERROR IN CHAIN");
      }
    } catch (error) {
      console.error(error);
    }
  }
};

const ArbCard = ({ entryPass, imgSrc }) => {
  const mintTokenArbitrum = async () => {
    if (window.ethereum) {
      try {
        await connectWallet("arbitrum"); // ensure wallet is connected and on the right network
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        // replace with your contract's ABI
        const contractAbi = arbAbi;
        const contract = new ethers.Contract(
          "0x9903A7aBf4223743946AB79357A2A9051393a2Df",
          contractAbi,
          signer
        );
        const tx = await contract.increment();
        console.log("Transaction Sent:", tx.hash);
        await tx.wait(); // wait for transaction to be mined
        console.log("Transaction Mined:", tx.hash);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className=" flex flex-col items-center justify-center gap-4 p-5 m-2 rounded-lg">
        <img className="" src={imgSrc} alt="omni" />
        <h1 className="text-xl text-center">{entryPass.name}</h1>
        <button
          onClick={mintTokenArbitrum}
          className="flex items-center justify-center px-10 py-2 bg-gradient-to-r from-[#FF3503] to-yellow-500 font-bold rounded-lg"
        >
          Get It Now
        </button>
      </div>
    </div>
  );
};

const OmniCard = ({ entryPass, imgSrc }) => {
  const mintTokenOmni = async () => {
    if (window.ethereum) {
      try {
        await connectWallet("omni"); // ensure wallet is connected and on the right network
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        // replace with your contract's ABI
        const contractAbi = omniAbi;
        const contract = new ethers.Contract(
          "0xbC1CD6d23fb31fAc1b2BC10a048f00Bd13B259E4",
          contractAbi,
          signer
        );
        const overrides = {
          gasLimit: ethers.utils.parseUnits("250000", "wei"), // you may need to adjust this value
          value: ethers.utils.parseEther("1"),
        };
        const tx = await contract.mintNFT(overrides);
        console.log("Transaction Sent:", tx.hash);
        await tx.wait(); // wait for transaction to be mined
        console.log("Transaction Mined:", tx.hash);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col items-center justify-center w-full gap-4 p-5 m-2 rounded-lg">
        <img src={imgSrc} alt="omni" />
        <h1 className="text-xl text-center">{entryPass.name}</h1>
        <button
          onClick={mintTokenOmni}
          className="flex items-center justify-center px-10 py-2 bg-gradient-to-r from-[#FF3503] to-yellow-500 font-bold rounded-lg"
        >
          Mint Arbitrum First
        </button>
      </div>
    </div>
  );
};

const Omni1Card = ({ entryPass, imgSrc }) => {
  const mintTokenOmni = async () => {
    if (window.ethereum) {
      try {
        await connectWallet("omni"); // ensure wallet is connected and on the right network
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        // replace with your contract's ABI
        const contractAbi = omniAbi;
        const contract = new ethers.Contract(
          "0xbC1CD6d23fb31fAc1b2BC10a048f00Bd13B259E4",
          contractAbi,
          signer
        );
        const overrides = {
          gasLimit: ethers.utils.parseUnits("250000", "wei"), // you may need to adjust this value
        };
        const tx = await contract.mintNFT(overrides);
        console.log("Transaction Sent:", tx.hash);
        await tx.wait(); // wait for transaction to be mined
        console.log("Transaction Mined:", tx.hash);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 gap-4 p-5 m-2 rounded-lg">
        <img src={imgSrc} alt="entry pass" />
        <h1 className="text-xl">{entryPass.name}</h1>
        <button
          onClick={mintTokenOmni}
          className="flex items-center justify-center px-10 py-2  rounded-lg bg-gradient-to-r from-[#FF3503] to-yellow-500 font-bold"
        >
          Get It Now For $1
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
      .get("http://localhost:3000/api/entrypass/entry-passes")
      .then((response) => {
        setEntryPassData(response.data);
        console.log("response", response.data);
      });
  }, []);

  const HandleSelect = () => {
    setSelect(!select);
  };

  // return (
  //   <div className="w-full px-3 py-6 min-h-screen">
  //     <div className="flex flex-col items-center w-full h-full p-2 bg-gray-800 border-2 border-orange-700 rounded-lg">
  //       <div className="flex flex-row items-center w-full gap-5">
  //         <button
  //           onClick={HandleSelect}
  //           className={`rounded-2xl px-5 text-lg ${
  //             !select
  //               ? "bg-gradient-to-r from-[#FF3503] to-yellow-500"
  //               : "bg-white text-black"
  //           }`}
  //         >
  //           TestNet
  //         </button>
  //         <button
  //           onClick={HandleSelect}
  //           className={`rounded-2xl px-5 text-lg ${
  //             select
  //               ? "bg-gradient-to-r from-[#FF3503] to-yellow-500"
  //               : "bg-white text-black"
  //           }`}
  //         >
  //           MainNet
  //         </button>
  //       </div>
  //       <div className="grid justify-center w-full grid-cols-1 m-auto md:grid-cols-2">
  //         {entryPassData.map((entryPass) => {
  //           // Conditionally render cards based on the type and chain
  //           if (select && entryPass.type === "mainnet") {
  //             return <MainNetCard key={entryPass._id} entryPass={entryPass} />;
  //           } else if (!select && entryPass.type === "testnet") {
  //             if (entryPass.chain === "Omni") {
  //               return (
  //                 <OmniCard
  //                   key={entryPass._id}
  //                   entryPass={entryPass}
  //                   imgSrc="/omni.png"
  //                 />
  //               );
  //             } else if (entryPass.chain === "Arbitrum") {
  //               return (
  //                 <ArbCard
  //                   key={entryPass._id}
  //                   entryPass={entryPass}
  //                   imgSrc="/arbitrum.png"
  //                 />
  //               );
  //             } else if (entryPass.chain === "Omni1") {
  //               return (
  //                 <Omni1Card
  //                   key={entryPass._id}
  //                   entryPass={entryPass}
  //                   imgSrc="/entry.png"
  //                 />
  //               );
  //             }
  //           }
  //           console.log("ENTRY PASS DATA ", entryPassData);
  //           return null; // Skip rendering if type doesn't match
  //         })}

  //         <div className="w-3/4 h-full bg-white p-5 flex  items-center flex-col rounded-3xl gap-5 md:gap-10">
  //           <h1 className="font-bold text-xl md:text-3xl text-black w-full md:mr-auto">
  //             Note:
  //           </h1>

  //           <p className="text-black font-semibold">
  //             1. To Get Entry pass on Omni You need to first Minth the Arbitrum
  //             Pass and then You will be able to mint on Omni
  //           </p>
  //           <p className="text-black font-semibold">
  //             2. With Easy Access Card We have eliminated all the hurdles which
  //             directly Gives you Entry pass for Omni At Just 1USD
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>

  return (
    <div className="w-full px-3 py-6 min-h-screen">
      <div className="flex flex-col items-center w-full h-full p-2 bg-black border-2 border-orange-700 rounded-lg">
        <div className="flex flex-row items-center w-full gap-5">
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
        </div>
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
          {entryPassData.map((entryPass) => {
            // Conditionally render cards based on the type and chain
            if (select && entryPass.type === "mainnet") {
              return <MainNetCard key={entryPass._id} entryPass={entryPass} />;
            }
            if (!select && entryPass.type === "testnet") {
              if (entryPass.chain === "Omni") {
                return (
                  <div
                    className="flex justify-center items-center flex-col md:flex-row flex-1"
                    style={{ flexBasis: "40%" }}
                  >
                    <OmniCard
                      key={entryPass._id}
                      entryPass={entryPass}
                      imgSrc="/omni.png"
                    />
                  </div>
                );
              }
            }
            // else if (entryPass.chain === "Arbitrum") {
            //     return (
            //       <ArbCard
            //         key={entryPass._id}
            //         entryPass={entryPass}
            //         imgSrc="/arbitrum.png"
            //       />
            //     );
            //   } else if (entryPass.chain === "Omni1") {
            //     return (
            //       <Omni1Card
            //         key={entryPass._id}
            //         entryPass={entryPass}
            //         imgSrc="/entry.png"
            //       />
            //     );
            //   }
            // }
            // return null; // Skip rendering if type doesn't match
          })}

          {!select && (
            <div
              className="flex-1 flex justify-center items-center "
              style={{ flexBasis: "20%" }}
            >
              {" "}
              <h1 className="" style={{ fontWeight: "900", fontSize: "5rem" }}>
                {" "}
                +
              </h1>
            </div>
          )}

          {/* {!select && ( */}
          {!select && (
            <>
              {entryPassData.map((entryPass) => {
                if (entryPass.chain === "Arbitrum") {
                  return (
                    <ArbCard
                      key={entryPass._id}
                      entryPass={entryPass}
                      imgSrc="/arbitrum.png"
                    />
                  );
                }
              })}
            </>
          )}
        </div>

        {!select && (
          <div className="w-full flex justify-center items-center m-10">
            <h1 style={{ fontSize: "3rem", fontWeight: "900" }}>OR</h1>
          </div>
        )}

        <div className="flex flex-col md:flex-row justify-center items-center">
          {entryPassData.map((entryPass) => {
            if (!select && entryPass.type === "testnet") {
              if (entryPass.chain === "Omni1") {
                return (
                  <div className="flex w-full justify-center items-center flex-col md:flex-row ">
                    <Omni1Card
                      key={entryPass._id}
                      entryPass={entryPass}
                      imgSrc="/entry.png"
                    />
                  </div>
                );
              }
            }
          })}

          {!select && (
            <div className="w-full bg-white p-5 flex items-center flex-col rounded-3xl gap-5 md:gap-10">
              <h1 className="font-bold text-xl md:text-3xl text-black w-full md:mr-auto">
                Note:
              </h1>
              <p className="text-black font-semibold">
                1. To Get Entry pass on Omni You need to first Mint the Arbitrum
                Pass and then You will be able to mint on Omni
              </p>
              <p className="text-black font-semibold">
                2. With Easy Access Card We have eliminated all the hurdles
                which directly Give you Entry pass for Omni At Just 1 USD
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClaimMint;
