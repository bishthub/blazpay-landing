import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ethers } from 'ethers';
import zetaAbi from './zetaAbi.json';
import arbAbi from './arbAbi.json';
import goerliAbi from './goerliAbi.json';
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
      if (chain === 'zeta') {
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
      } else if (chain === 'goerli') {
        if (network.chainId !== 5) {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x5',
                chainName: 'Goerli',
                nativeCurrency: {
                  name: 'ETH',
                  symbol: 'ETH',
                  decimals: 18,
                },
                rpcUrls: ['https://rpc.ankr.com/eth_goerli'], // replace with the actual RPC
              },
            ],
          });
        }
      } else if (chain === 'mumbai') {
        if (network.chainId !== 80001) {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x13881',
                chainName: 'Mumbai',
                nativeCurrency: {
                  name: 'MATIC',
                  symbol: 'MATIC',
                  decimals: 18,
                },
                rpcUrls: ['https://rpc-mumbai.maticvigil.com'], // replace with the actual RPC
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
                nativeCurrency: {
                  name: 'ZETA',
                  symbol: 'ZETA',
                  decimals: 18,
                },
                rpcUrls: [
                  'https://zetachain-athens-evm.blockpi.network/v1/rpc/public',
                ], // replace with the actual RPC
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

const ZetaCard = ({ entryPass, imgSrc, onMintSuccess }) => {
  const [userBalance, setUserBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchUserBalance = async () => {
      if (window.ethereum) {
        try {
          await connectWallet('goerli');
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          console.log(
            '🚀 ~ file: ClaimZeta.jsx:90 ~ fetchUserBalance ~ address:',
            address
          );

          const contract = new ethers.Contract(
            '0x8001a63FAbc3D58800633fa584F267B9D6b5dEe5',
            goerliAbi,
            signer
          );
          const ownedTokenIds = await contract.balanceOf(address);
          console.log('Owned Token IDs:', ownedTokenIds);
          const balance = await contract.balanceOf(address);
          console.log(
            '🚀 ~ file: ClaimZeta.jsx:96 ~ fetchUserBalance ~ balance:',
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
  const fetchOwnedTokenIds = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const contract = new ethers.Contract(
          '0x8001a63FAbc3D58800633fa584F267B9D6b5dEe5', // Replace with your contract address
          goerliAbi, // Replace with the correct ABI that includes getOwnedTokens
          signer
        );

        // Fetching the owned token IDs
        const ownedTokenIds = await contract.balanceOf(address);
        console.log('Owned Token IDs:', ownedTokenIds);

        // You can use the last token ID here or pass it to other functions
        if (ownedTokenIds.length > 0) {
          const lastTokenId = ownedTokenIds[ownedTokenIds.length - 1];
          onMintSuccess(lastTokenId); // Passing the last token ID to the parent component
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  const mintTokenZeta = async () => {
    if (window.ethereum) {
      try {
        await connectWallet('goerli'); // ensure wallet is connected and on the right network
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contractAbi = goerliAbi;
        const address = await signer.getAddress();
        const contract = new ethers.Contract(
          '0x8001a63FAbc3D58800633fa584F267B9D6b5dEe5',
          contractAbi,
          signer
        );
        const overrides = {
          gasLimit: ethers.utils.hexlify(2500000), // Adjust gas limit as needed
        };
        const tx = await contract.mint(address, overrides);

        // Wait for the transaction to be mined
        await tx.wait();
        const receipt = await provider.getTransactionReceipt(tx.hash);

        // Create an Interface object to decode logs
        const contractInterface = new ethers.utils.Interface(contractAbi);
        let mintedTokenId;
        // Parse logs to find the BlazpayXZetaEvent
        receipt.logs.forEach((log) => {
          try {
            const parsedLog = contractInterface.parseLog(log);
            if (parsedLog.name === 'BlazpayXZetaEvent') {
              console.log('BlazpayXZetaEvent:', parsedLog.args);
              mintedTokenId = parsedLog.args[0];
            }
          } catch (error) {
            // This will catch if log is not from our contract
          }
        });
        if (mintedTokenId !== undefined) {
          onMintSuccess(mintedTokenId.toString()); // Call the callback with the minted tokenId
        }

        toast.success(
          'Mint Successful, now you have access to Blazpay Dashboard'
        );
        console.log('Transaction Hash:', tx.hash);
        await fetchOwnedTokenIds();
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

const MaticCard = ({ entryPass, imgSrc, tokenId }) => {
  const [userBalance, setUserBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchUserBalance = async () => {
      if (window.ethereum) {
        try {
          await connectWallet('mumbai');
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          console.log(
            '🚀 ~ file: ClaimZeta.jsx:90 ~ fetchUserBalance ~ address:',
            address
          );

          const contract = new ethers.Contract(
            '0xA3E882aC208d729ad63A0064af33b06B1E7EDF02',
            goerliAbi,
            signer
          );
          const balance = await contract.balanceOf(address);
          console.log('🚀  balance:', balance.toString());
          setUserBalance(balance.toString());
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchUserBalance();
  }, []);
  useEffect(() => {
    if (tokenId) {
      sendMessage(tokenId);
    }
  }, [tokenId]);

  const sendMessage = async (tokenId) => {
    if (window.ethereum) {
      try {
        console.log('TOKEN: ', tokenId);
        await connectWallet('goerli'); // Initially connect to Goerli network
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          '0x8001a63FAbc3D58800633fa584F267B9D6b5dEe5',
          goerliAbi,
          signer
        );
        const overrides = {
          gasLimit: ethers.utils.hexlify(2500000), // Adjust gas limit as needed
        };
        const destination = 80001; // Chain ID for Mumbai
        const paramTo = await signer.getAddress(); // msg.sender address
        const value = ethers.utils.parseUnits('0.1', 'ether'); // Goerli ETH amount

        // Include the overrides in the contract method call
        const tx = await contract.sendMessage(destination, tokenId, paramTo, {
          ...overrides,
          value,
        });
        console.log('Transaction Sent:', tx.hash);

        // Wait for the transaction to be mined
        await tx.wait();

        // Transaction is successful, now switch to Mumbai network
        await connectWallet('mumbai');

        toast.success('Message sent successfully');
      } catch (error) {
        console.error('Failed to send message:', error);
        toast.error(`Failed to send message: ${error.message}`);
      }
    }
  };

  const sendMessageHandler = () => {
    if (tokenId) {
      sendMessage(tokenId);
      console.log('TOKENID', tokenId);
    } else {
      sendMessage(4);
      console.log('No tokenId available');
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
          onClick={sendMessageHandler}
          style={{ visibility: 'hidden' }}
          className="flex items-center justify-center px-10 py-2 bg-gradient-to-r from-[#FF3503] to-yellow-500 font-bold rounded-lg"
        >
          Get It Now
        </button>
      </div>
    </div>
  );
};

const ZetaBasic = ({ entryPass, imgSrc, onMintSuccess }) => {
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
          console.log(
            '🚀 ~ file: ClaimZeta.jsx:90 ~ fetchUserBalance ~ address:',
            address
          );

          const contract = new ethers.Contract(
            '0x4dE7CD522f1715b2a48F3ad6612924841d450A0F',
            goerliAbi,
            signer
          );
          const ownedTokenIds = await contract.balanceOf(address);
          console.log('Owned Token IDs:', ownedTokenIds);
          const balance = await contract.balanceOf(address);
          console.log(
            '🚀 ~ file: ClaimZeta.jsx:96 ~ fetchUserBalance ~ balance:',
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
  const fetchOwnedTokenIds = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const contract = new ethers.Contract(
          '0x4dE7CD522f1715b2a48F3ad6612924841d450A0F', // Replace with your contract address
          zetaAbi, // Replace with the correct ABI that includes getOwnedTokens
          signer
        );

        // Fetching the owned token IDs
        const ownedTokenIds = await contract.balanceOf(address);
        console.log('Owned Token IDs:', ownedTokenIds);

        // You can use the last token ID here or pass it to other functions
        if (ownedTokenIds.length > 0) {
          const lastTokenId = ownedTokenIds[ownedTokenIds.length - 1];
          onMintSuccess(lastTokenId); // Passing the last token ID to the parent component
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  const mintTokenZeta = async () => {
    if (window.ethereum) {
      try {
        await connectWallet('zeta'); // ensure wallet is connected and on the right network
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
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

        // Wait for the transaction to be mined
        await tx.wait();
        const receipt = await provider.getTransactionReceipt(tx.hash);

        // Create an Interface object to decode logs
        const contractInterface = new ethers.utils.Interface(contractAbi);
        let mintedTokenId;
        // Parse logs to find the BlazpayXZetaEvent
        receipt.logs.forEach((log) => {
          try {
            const parsedLog = contractInterface.parseLog(log);
            if (parsedLog.name === 'BlazpayXZetaEvent') {
              console.log('BlazpayXZetaEvent:', parsedLog.args);
              mintedTokenId = parsedLog.args[0];
            }
          } catch (error) {
            // This will catch if log is not from our contract
          }
        });
        if (mintedTokenId !== undefined) {
          onMintSuccess(mintedTokenId.toString()); // Call the callback with the minted tokenId
        }

        toast.success(
          'Mint Successful, now you have access to Blazpay Dashboard',
          {
            onClose: () => window.location.reload(),
          }
        );
        console.log('Transaction Hash:', tx.hash);
        await fetchOwnedTokenIds();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className=" flex flex-col items-center justify-center gap-4 p-5 m-2 rounded-lg">
        <img
          style={{ borderRadius: '5%', maxWidth: '40%' }}
          src={imgSrc}
          alt="zeta"
        />
        <h1 className="text-xl text-center">Zeta X Blazpay Entry Pass</h1>
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

const ClaimZeta = () => {
  const [select, setSelect] = useState(false);
  const [entryPassData, setEntryPassData] = useState([]);
  const [userCount, setUserCount] = useState(null);
  const [tokenId, setTokenId] = useState(null);
  // Function to handle mint success
  const handleMintSuccess = (mintedTokenId) => {
    setTokenId(mintedTokenId);
  };

  const fetchUserCount = async () => {
    if (window.ethereum) {
      try {
        await connectWallet('arbitrum');
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const contract = new ethers.Contract(
          '0x8001a63FAbc3D58800633fa584F267B9D6b5dEe5',
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
    // fetchUserCount();
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
        </div>

        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
          {!select && (
            <>
              {entryPassData.map((entryPass) => {
                if (entryPass.chain === 'Zeta') {
                  return (
                    <ZetaCard
                      key={entryPass._id}
                      entryPass={entryPass}
                      imgSrc="/zeta.jpg"
                      onMintSuccess={handleMintSuccess} // Pass the callback to ZetaCard
                    />
                  );
                } else if (entryPass.chain === 'Mumbai') {
                  return (
                    <MaticCard
                      entryPass={entryPass}
                      imgSrc="/zeta.jpg"
                      alt="MATIC"
                      tokenId={tokenId} // Pass the tokenId to MaticCard
                    />
                  );
                }
                return null;
              })}
            </>
          )}
          <div
            className="w-full bg-orange-500 p-5 flex items-center flex-col rounded-3xl bishtS mt-5 md:gap-10"
            style={{ maxWidth: '80%' }}
          >
            <div className="flex flex-col ">
              <h1 className="font-bold text-xl md:text-3xl text-white w-full md:mr-auto">
                Note:
              </h1>
              <br />
              <p className="text-white font-semibold">
                1. To Get Cross Chain Entry Pass of Zeta Chain first mint the
                Zeta NFT on Goerli Network and then approve the transaction
                again by sending 0.1GETH.
              </p>
              <br />
              <p className="text-white font-semibold">
                2. After you have approved the transaction twice you will be
                able to see the Mumbai x Zeta Entry Pass after 15 minutes.
              </p>
              <br />
              <p className="text-white font-semibold">
                3. Mint cross chain entry pass and get double blazTokens on
                Blazpay dashboard for every transaction that you make.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center m-10">
          <h1 style={{ fontSize: '3rem', fontWeight: '900' }}>OR</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center">
          {entryPassData.map((entryPass) => {
            if (!select && entryPass.type === 'testnet') {
              if (entryPass.chain === 'Zeta') {
                return (
                  <div className="flex w-full justify-center items-center flex-col md:flex-row ">
                    <ZetaBasic
                      key={entryPass._id}
                      entryPass={entryPass}
                      imgSrc="/zeta.jpg"
                    />
                  </div>
                );
              }
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ClaimZeta;
