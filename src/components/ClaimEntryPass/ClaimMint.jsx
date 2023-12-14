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
      if (chain === 'manta') {
        if (network.chainId !== 3441005) {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x34816d',
                chainName: '	Manta Testnet L2 Rollup',
                nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
                rpcUrls: ['https://pacific-rpc.testnet.manta.network/http'], // replace with the actual RPC
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

const MantaCard = ({ entryPass, imgSrc }) => {
  const [userBalance, setUserBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchUserBalance = async () => {
      if (window.ethereum) {
        try {
          await connectWallet('manta');
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          const contract = new ethers.Contract(
            '0x427539B9f81cd890b554e4f3F36eBa6D6d96e61a',
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
  const mintTokenManta = async (event) => {
    event.preventDefault();
    if (window.ethereum) {
      setLoading(true);
      try {
        await connectWallet('manta'); // ensure wallet is connected and on the right network
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const userAddress = await signer.getAddress();
        const contract = new ethers.Contract(
          '0x427539B9f81cd890b554e4f3F36eBa6D6d96e61a',
          shardeumAbi,
          signer
        );
        const mintPrice = ethers.utils.parseEther('0.001'); // Replace '0.5' with the actual mint price
        const overrides = {
          gasLimit: ethers.utils.hexlify(250000), // Adjust gas limit as needed
          value: mintPrice, // ETH amount for minting
        };
        const tx = await contract.safeMint(userAddress, overrides);
        console.log('Transaction Sent:', tx.hash);
        await tx.wait(); // wait for transaction to be mined
        toast.success('Mint Successful, Welcome to Blazpay world', {
          onClose: () => {
            setTimeout(() => {
              window.location.reload();
            }, 3000); // Delay for 3 seconds
          },
        });
        console.log('Transaction Mined: Manta', tx.hash);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-4 p-5 m-2 rounded-lg">
        <img
          style={{ borderRadius: '5%', maxWidth: '70%' }}
          src={imgSrc}
          alt="manta"
        />
        <h1 className="text-xl text-center">{entryPass.name}</h1>
        <h2>You Own {userBalance}</h2>
        <button
          onClick={mintTokenManta}
          className={`flex items-center justify-center px-10 py-2 bg-gradient-to-r from-[#FF3503] to-yellow-500 font-bold rounded-lg ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Get It Now'}
        </button>
      </div>
    </div>
  );
};

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
          '0x427539B9f81cd890b554e4f3F36eBa6D6d96e61a',
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
        </div>
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
          {!select && (
            <>
              {entryPassData.map((entryPass) => {
                if (entryPass.chain === 'Manta') {
                  return (
                    <MantaCard
                      key={entryPass._id}
                      entryPass={entryPass}
                      imgSrc="/manta.jpeg"
                    />
                  );
                }
                return null;
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClaimMint;
