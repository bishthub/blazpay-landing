import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ethers } from 'ethers';
import zetaAbi from './zetaAbi.json';
import arbAbi from './arbAbi.json';

import shardeumAbi from './shardeum.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const connectWallet = async (chain) => {
  if (window.ethereum) {
    try {
      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();
      // if (chain === 'omni') {
      //   if (network.chainId !== 165) {
      //     await window.ethereum.request({
      //       method: 'wallet_addEthereumChain',
      //       params: [
      //         {
      //           chainId: '0xA5',
      //           chainName: 'Omni Testnet',
      //           nativeCurrency: { name: 'OMNI', symbol: 'OMNI', decimals: 18 },
      //           rpcUrls: ['https://testnet.omni.network'], // replace with the actual RPC
      //           blockExplorerUrls: ['https://testnet.explorer.omni.network'], // replace with the actual block explorer
      //         },
      //       ],
      //     });
      //   }
      // } else if (chain === 'arbitrum') {
      //   if (network.chainId !== 421613) {
      //     await window.ethereum.request({
      //       method: 'wallet_addEthereumChain',
      //       params: [
      //         {
      //           chainId: '0x66EED',
      //           chainName: 'Arbitrum Goerli',
      //           nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
      //           rpcUrls: ['https://goerli-rollup.arbitrum.io/rpc'], // replace with the actual RPC
      //           blockExplorerUrls: ['https://goerli.arbiscan.io/'], // replace with the actual block explorer
      //         },
      //       ],
      //     });
      //   }
      // } else
      if (chain === 'shardeum') {
        if (network.chainId !== 8081) {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x1f91',
                chainName: 'Shardeum Dapp Sphinx 1.X',
                nativeCurrency: { name: 'SHM', symbol: 'SHM', decimals: 18 },
                rpcUrls: ['https://dapps.shardeum.org'], // replace with the actual RPC
                blockExplorerUrls: ['https://explorer-dapps.shardeum.org/'], // replace with the actual block explorer
              },
            ],
          });
        }
      } else if (chain === 'zeta') {
        if (network.chainId !== 7001) {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x1b59',
                chainName: 'ZetaChain Athens 3 Testnet',
                nativeCurrency: { name: 'ZETA', symbol: 'ZETA', decimals: 18 },
                rpcUrls: [
                  'https://zetachain-athens-evm.blockpi.network/v1/rpc/public',
                ], // replace with the actual RPC
              },
            ],
          });
        }
      } else if (chain === 'router') {
        if (network.chainId !== 9601) {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x2581',
                chainName: 'Router testnet',
                nativeCurrency: {
                  name: 'ROUTE',
                  symbol: 'ROUTE',
                  decimals: 18,
                },
                rpcUrls: ['https://evm.rpc.testnet.routerchain.dev'], // replace with the actual RPC
              },
            ],
          });
        }
      } else {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
      }
    } catch (error) {
      console.error(error);
    }
  }
};

const ZetaCard = ({ entryPass, imgSrc }) => {
  const [userBalance, setUserBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchUserBalance = async () => {
      if (window.ethereum) {
        try {
          await connectWallet('zeta');
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          const contract = new ethers.Contract(
            '0x4dE7CD522f1715b2a48F3ad6612924841d450A0F',
            zetaAbi,
            signer
          );
          const balance = await contract.balanceOf(address);
          setUserBalance(balance.toString());
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchUserBalance();
  }, []);
  const mintTokenZeta = async () => {
    if (window.ethereum) {
      try {
        await connectWallet('zeta'); // ensure wallet is connected and on the right network
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        // replace with your contract's ABI
        const contractAbi = zetaAbi;
        const address = await signer.getAddress();
        const contract = new ethers.Contract(
          '0x4dE7CD522f1715b2a48F3ad6612924841d450A0F',
          contractAbi,
          signer
        );
        const mintPrice = ethers.utils.parseEther('1'); // Replace '0.5' with the actual mint price
        const overrides = {
          gasLimit: ethers.utils.hexlify(250000), // Adjust gas limit as needed
          value: mintPrice, // ETH amount for minting
        };
        const tx = await contract.safeMint(address, overrides);
        console.log('Transaction Sent:', tx.hash);
        await tx.wait(); // wait for transaction to be mined
        toast.success(
          'Mint Successful, now you have access to Blazpay Dashboard',
          {
            onClose: () => window.location.reload(),
          }
        );
        console.log('Transaction Mined: Omni', tx.hash);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className=" flex flex-col items-center justify-center gap-4 p-5 m-2 rounded-lg">
        <img
          style={{ borderRadius: '5%', maxWidth: '70%' }}
          src={imgSrc}
          alt="zeta"
        />
        <h1 className="text-xl text-center">{entryPass.name}</h1>
        <h2>You Own {userBalance}</h2>
        <button
          onClick={mintTokenZeta}
          className="flex items-center justify-center px-10 py-2 bg-gradient-to-r from-[#FF3503] to-yellow-500 font-bold rounded-lg"
        >
          Get It Now
        </button>
      </div>
    </div>
  );
};

const ShardCard = ({ entryPass, imgSrc }) => {
  const [userBalance, setUserBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchUserBalance = async () => {
      if (window.ethereum) {
        try {
          await connectWallet('shardeum');
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          const contract = new ethers.Contract(
            '0x7ea13d779369e3b0b5F78cB050aD97DE6cA9CfBD',
            shardeumAbi,
            signer
          );
          const balance = await contract.balanceOf(address);
          console.log(
            '🚀 ~ file: ClaimMint.jsx:157 ~ fetchUserBalance ~ balḁnce:',
            balance
          );
          setUserBalance(balance.toString());
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchUserBalance();
  }, []);
  const mintTokenShardeum = async () => {
    if (window.ethereum) {
      try {
        await connectWallet('shardeum'); // ensure wallet is connected and on the right network
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const userAddress = await signer.getAddress();
        const contract = new ethers.Contract(
          '0x7ea13d779369e3b0b5F78cB050aD97DE6cA9CfBD',
          shardeumAbi,
          signer
        );
        const mintPrice = ethers.utils.parseEther('0.5'); // Replace '0.5' with the actual mint price
        const overrides = {
          gasLimit: ethers.utils.hexlify(250000), // Adjust gas limit as needed
          value: mintPrice, // ETH amount for minting
        };
        const tx = await contract.safeMint(userAddress, overrides);
        console.log('Transaction Sent:', tx.hash);
        await tx.wait(); // wait for transaction to be mined
        toast.success('Mint Successful, Welcome to Blazpay world', {
          onClose: () => window.location.reload(),
        });
        console.log('Transaction Mined: Shardeum', tx.hash);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className=" flex flex-col items-center justify-center gap-4 p-5 m-2 rounded-lg">
        <img
          style={{ borderRadius: '5%', maxWidth: '70%' }}
          src={imgSrc}
          alt="shardeum"
        />
        <h1 className="text-xl text-center">{entryPass.name}</h1>
        <h2>You Own {userBalance}</h2>
        <button
          onClick={mintTokenShardeum}
          className="flex items-center justify-center px-10 py-2 bg-gradient-to-r from-[#FF3503] to-yellow-500 font-bold rounded-lg"
        >
          Get It Now
        </button>
      </div>
    </div>
  );
};

// const OmniCard = ({ entryPass, imgSrc, userCount }) => {
//   console.log('USER COUNT', userCount);
//   const [userBalance, setUserBalance] = useState(null);
//   useEffect(() => {
//     const fetchUserBalance = async () => {
//       if (window.ethereum) {
//         try {
//           await connectWallet(userCount ? 'omni' : 'arbitrum');
//           const provider = new ethers.providers.Web3Provider(window.ethereum);
//           const signer = provider.getSigner();
//           const address = await signer.getAddress();
//           const contract = new ethers.Contract(
//             '0x2E84547878CeD3B28C6060ec5b7afA0ec49892CC',
//             omniAbi,
//             signer
//           );
//           const balance = await contract.balanceOf(address);
//           setUserBalance(balance.toString());
//         } catch (error) {
//           console.error(error);
//         }
//       }
//     };
//     fetchUserBalance();
//   }, []);

//   const mintTokenOmni = async () => {
//     if (window.ethereum) {
//       try {
//         await connectWallet('omni'); // ensure wallet is connected and on the right network
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//         // replace with your contract's ABI
//         const contractAbi = omniAbi;
//         const contract = new ethers.Contract(
//           '0x2E84547878CeD3B28C6060ec5b7afA0ec49892CC',
//           contractAbi,
//           signer
//         );
//         const overrides = {
//           gasLimit: ethers.utils.parseUnits('250000', 'wei'), // you may need to adjust this value
//           value: ethers.utils.parseEther('1'),
//         };
//         const tx = await contract.mintNFT(overrides);
//         console.log('Transaction Sent:', tx.hash);
//         await tx.wait(); // wait for transaction to be mined
//         console.log('Transaction Mined:', tx.hash);
//         toast.success('Mint Successful, welcome to blazpay world.', {
//           onClose: () => window.location.reload(),
//         });
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   return (
//     <div className='w-full flex justify-center items-center'>
//       <ToastContainer />
//       <div className='flex flex-col items-center justify-center w-full gap-4 p-5 m-2 rounded-lg'>
//         <img src={imgSrc} alt='omni' />
//         <h1 className='text-xl text-center'>{entryPass.name}</h1>
//         <h2>You Own {userBalance}</h2>
//         <button
//           onClick={mintTokenOmni}
//           disabled={userCount == 0} // disable button if userCount is 0
//           className={`flex items-center justify-center px-10 py-2 bg-gradient-to-r from-[#FF3503] to-yellow-500 font-bold rounded-lg ${
//             userCount === 0 ? 'opacity-50' : ''
//           }`}
//         >
//           {userCount == 0 ? 'Mint Arb NFT First' : 'Mint Now'}
//         </button>
//       </div>
//     </div>
//   );
// };

// const Omni1Card = ({ entryPass, imgSrc }) => {
//   const mintTokenOmni = async () => {
//     if (window.ethereum) {
//       try {
//         await connectWallet(); // ensure wallet is connected and on the right network
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//         const network = await provider.getNetwork();

//         // Determine the transfer amount based on the network
//         let transferAmount;
//         if (network.chainId === 165) {
//           // Matic network
//           transferAmount = ethers.utils.parseUnits("1.5", "ether"); // 1.5 MATIC
//         } else if (network.chainId === 56) {
//           // BSC network
//           transferAmount = ethers.utils.parseUnits("0.1", "ether"); // 0.1 BNB
//         } else {
//           toast.error(
//             "Unsupported network. Only Matic and BSC network is supported."
//           ); // Display an error toast
//           return;
//         }

//         // Send the transfer transaction
//         const tx = await signer.sendTransaction({
//           to: "0x24669FBDD958b7fEC8e78399e78927F1568742b1",
//           value: transferAmount,
//         });
//         console.log("Transaction Sent:", tx.hash);
//         await tx.wait(); // wait for transaction to be mined
//         console.log("Transaction Mined:", tx.hash);
//         const walletAddress = await signer.getAddress();
//         const requestBody = {
//           accountId: walletAddress,
//         };

//         // Call the API to mint the NFT upon successful transfer
//         axios
//           .post("http://localhost:3000/api/nft/mintNFT", requestBody)
//           .then((response) => {
//             toast.success(
//               "Mint Successful now you have access to our Omni Entry Pass."
//             );
//             console.log("NFT Minted:", response.data);
//           })
//           .catch((error) => {
//             console.error("Error minting NFT:", error);
//           });
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   return (
//     <div className="w-full flex justify-center items-center">
//       <ToastContainer />
//       <div className="flex flex-col items-center justify-center w-full md:w-1/2 gap-4 p-5 m-2 rounded-lg">
//         <img src={imgSrc} alt="entry pass" />
//         <h1 className="text-xl">{entryPass.name}</h1>
//         <button
//           onClick={mintTokenOmni}
//           className="flex items-center justify-center px-10 py-2  rounded-lg bg-gradient-to-r from-[#FF3503] to-yellow-500 font-bold"
//         >
//           Get It Now For $1
//         </button>
//       </div>
//     </div>
//   );
// };

const ClaimMint = () => {
  const [select, setSelect] = useState(false);
  const [entryPassData, setEntryPassData] = useState([]);
  const [userCount, setUserCount] = useState(null);

  const fetchUserCount = async () => {
    if (window.ethereum) {
      try {
        await connectWallet('arbitrum');
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const contract = new ethers.Contract(
          '0x2e84547878ced3b28c6060ec5b7afa0ec49892cc',
          arbAbi,
          signer
        );
        const hexCount = await contract.countByUser(address); // assuming countByUser is a view function
        const newCount = hexCount.toString();
        const count = hexCount.toNumber();
        console.log('count', count);
        setUserCount(newCount);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fetchUserCount();
    axios
      .get('https://api.shubhambisht.com/api/entrypass/entry-passes')
      .then((response) => {
        setEntryPassData(response.data);
        console.log('response', response.data);
      });
  }, []);

  const HandleSelect = () => {
    setSelect(!select);
  };

  return (
    <div className="w-full px-3 py-6 min-h-screen">
      <ToastContainer />
      <div className="flex flex-col items-center w-full h-full p-2 bg-black border-2 border-orange-700 rounded-lg">
        <div className="flex flex-row items-center w-full gap-5">
          <button
            onClick={HandleSelect}
            className={`rounded-2xl px-5 text-lg ${
              !select
                ? 'bg-gradient-to-r from-[#FF3503] to-yellow-500'
                : 'bg-white text-black'
            }`}
          >
            TestNet
          </button>
          {/* <button
            onClick={HandleSelect}
            className={`rounded-2xl px-5 text-lg ${
              select
                ? 'bg-gradient-to-r from-[#FF3503] to-yellow-500'
                : 'bg-white text-black'
            }`}
          >
            MainNet
          </button> */}
        </div>
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
          {!select && (
            <>
              {entryPassData.map((entryPass) => {
                if (entryPass.chain === 'Shardeum') {
                  return (
                    <ShardCard
                      key={entryPass._id}
                      entryPass={entryPass}
                      imgSrc="/shardeum.jpg"
                    />
                  );
                }
                // else if (entryPass.chain === 'Zeta') {
                //   return (
                //     <ZetaCard
                //       key={entryPass._id}
                //       entryPass={entryPass}
                //       imgSrc="/zeta.jpg"
                //     />
                //   );
                // }
                return null;
              })}
            </>
          )}
          {/* {!select && (
            <div
              className='flex-1 flex justify-center items-center '
              style={{ flexBasis: '20%' }}
            >
              {' '}
              <h1 className='' style={{ fontWeight: '900', fontSize: '5rem' }}>
                {' '}
                +
              </h1>
            </div>
          )} */}

          {/* {entryPassData.map((entryPass) => {
            // Conditionally render cards based on the type and chain
            if (select && entryPass.type === 'mainnet') {
              return <MainNetCard key={entryPass._id} entryPass={entryPass} />;
            }
            if (!select && entryPass.type === 'testnet') {
              if (entryPass.chain === 'Omni') {
                return (
                  <div
                    className='flex justify-center items-center flex-col md:flex-row flex-1'
                    style={{ flexBasis: '40%' }}
                  >
                    <OmniCard
                      key={entryPass._id}
                      entryPass={entryPass}
                      imgSrc='/omni.png'
                      userCount={userCount}
                    />
                  </div>
                );
              }
              return null;
            }
          })} */}

          {/* {!select && ( */}
        </div>

        {/* {!select && (
          <div className='w-full flex justify-center items-center m-10'>
            <h1 style={{ fontSize: '3rem', fontWeight: '900' }}>OR</h1>
          </div>
        )}

        <div className='flex flex-col md:flex-row justify-center items-center'>
          {entryPassData.map((entryPass) => {
            if (!select && entryPass.type === 'testnet') {
              if (entryPass.chain === 'Omni1') {
                return (
                  <div className='flex w-full justify-center items-center flex-col md:flex-row '>
                    <Omni1Card
                      key={entryPass._id}
                      entryPass={entryPass}
                      imgSrc='/omni.png'
                    />
                  </div>
                );
              }
            }
          })}

          {!select && (
            <div className='w-full bg-white p-5 flex items-center flex-col rounded-3xl gap-5 md:gap-10'>
              <h1 className='font-bold text-xl md:text-3xl text-black w-full md:mr-auto'>
                Note:
              </h1>
              <p className='text-black font-semibold'>
                1. To Get Entry pass on Omni You need to first Mint the Arbitrum
                Pass and then You will be able to mint on Omni
              </p>
              <p className='text-black font-semibold'>
                2. With Easy Access Card We have eliminated all the hurdles
                which directly Give you Entry pass for Omni At Just 1 USD
              </p>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default ClaimMint;
