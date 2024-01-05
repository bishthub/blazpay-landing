import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ethers } from 'ethers';
import zetaAbi from './zetaAbi.json';
import nftGoerli from './nftGoerli.json';
import arbAbi from './arbAbi.json';
import bitgertAbi from './bitgertAbi.json';
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

      if (chain === 'goerli') {
        if (network.chainId !== 5) {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x5',
                chainName: 'Goerli',
                nativeCurrency: {
                  name: 'GoerliETH',
                  symbol: 'GoerliETH',
                  decimals: 18,
                },
                rpcUrls: [
                  'https://endpoints.omniatech.io/v1/eth/goerli/public',
                ], // replace with the actual RPC
              },
            ],
          });
        }
      } else if (chain === 'binance') {
        if (network.chainId !== 56) {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x38',
                chainName: 'BNB Smart Chain Mainnet',
                nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
                rpcUrls: ['https://bsc-dataseed1.binance.org/'], // replace with the actual RPC
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
const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold text-black">Confirmation Required</h2>
        <p className="my-2 text-black">
          You don't have enough BITGERT tokens. Would you like to mint using BNB
          instead?
        </p>
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded text-black bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-[#FF3503] text-white hover:bg-blue-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

const ZetaCard = ({ entryPass, imgSrc }) => {
  const [userBalance, setUserBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const fetchUserBalance = async () => {
      if (window.ethereum) {
        try {
          await connectWallet('binance');
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          const contract = new ethers.Contract(
            '0x247314AB4d4a0518962D1e980Fc21C3f757B5631',
            nftGoerli,
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
  const bitgertTokenAddress = '0x8fff93e810a2edaafc326edee51071da9d398e83';
  const bitTokenAbi = bitgertAbi; // BITGERT Token Contract ABI

  const handleConfirm = async () => {
    setIsModalOpen(false);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    // Transfer 0.004 BNB to a specific address
    const tx = await signer.sendTransaction({
      to: '0x5222d5467DC61aFc2EfA95Ef76dCDe411e6e1D35',
      value: ethers.utils.parseEther('0.004'),
    });
    await tx.wait();

    // API call to mint NFT by owner
    const response = await axios.post(
      'https://api.shubhambisht.com/api/nft/mintNFT',
      {
        accountId: userAddress,
      }
    );
    if (response.data.message === 'NFT minted successfully') {
      toast.success('NFT minted with BNB successfully');
    }
  };

  const mintTokenZeta = async () => {
    setLoading(true);
    if (window.ethereum) {
      try {
        await connectWallet('binance');
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const bitgertContract = new ethers.Contract(
          bitgertTokenAddress,
          bitTokenAbi,
          signer
        );
        const userAddress = await signer.getAddress();

        // Check user's BITGERT token balance
        const userbitBalance = await bitgertContract.balanceOf(userAddress);
        const mintPriceInBitgert = ethers.utils.parseUnits(
          '7000000000000000',
          'wei'
        );

        if (userbitBalance.lt(mintPriceInBitgert)) {
          setIsModalOpen(true); // Show the modal instead of window.confirm
        } else {
          const nftContractAddress =
            '0x247314AB4d4a0518962D1e980Fc21C3f757B5631';
          // const mintPriceInBitgert = ethers.utils.parseUnits('7000000', 'ether'); // BITGERT has 18 decimal places

          // Check current allowance
          const currentAllowance = await bitgertContract.allowance(
            signer.getAddress(),
            nftContractAddress
          );
          if (currentAllowance.lt(mintPriceInBitgert)) {
            // Request approval if allowance is insufficient
            const approvalTx = await bitgertContract.approve(
              nftContractAddress,
              mintPriceInBitgert
            );
            await approvalTx.wait(); // Wait for approval transaction to be mined
          }

          // Get current gas price
          const gasPrice = await provider.getGasPrice();

          // Proceed with minting after approval
          const nftContract = new ethers.Contract(
            nftContractAddress,
            nftGoerli,
            signer
          );

          // Send the transaction with estimated gas limit and price
          const tx = await nftContract.safeMint(signer.getAddress(), {
            gasPrice,
            gasLimit: ethers.utils.hexlify(120000), // Example gas limit, adjust as needed
          });
          console.log('Transaction Sent:', tx.hash);
          await tx.wait();
          toast.success('Mint Successful...', {
            onClose: () => window.location.reload(),
          });
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  // const mintTokenZeta = async () => {
  //   if (window.ethereum) {
  //     try {
  //       await connectWallet('zeta'); // ensure wallet is connected and on the right network
  //       const provider = new ethers.providers.Web3Provider(window.ethereum);
  //       const signer = provider.getSigner();
  //       // replace with your contract's ABI
  //       const contractAbi = zetaAbi;
  //       const address = await signer.getAddress();
  //       const contract = new ethers.Contract(
  //         '0x247314AB4d4a0518962D1e980Fc21C3f757B5631',
  //         contractAbi,
  //         signer
  //       );
  //       const mintPrice = ethers.utils.parseEther('1'); // Replace '0.5' with the actual mint price
  //       const overrides = {
  //         gasLimit: ethers.utils.hexlify(250000), // Adjust gas limit as needed
  //         value: mintPrice, // ETH amount for minting
  //       };
  //       const tx = await contract.safeMint(address, overrides);
  //       console.log('Transaction Sent:', tx.hash);
  //       await tx.wait(); // wait for transaction to be mined
  //       toast.success(
  //         'Mint Successful, now you have access to Blazpay Dashboard',
  //         {
  //           onClose: () => window.location.reload(),
  //         }
  //       );
  //       console.log('Transaction Mined: Omni', tx.hash);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // };

  return (
    <div className="w-full flex justify-center items-center">
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
      />
      <div className=" flex flex-col items-center justify-center gap-4 p-5 m-2 rounded-lg">
        <img
          style={{ borderRadius: '5%', maxWidth: '70%' }}
          src={imgSrc}
          alt="zeta"
        />
        <h1 className="text-xl text-center">Bitgert x Blazpay Entry Pass</h1>
        <h2>You Own {userBalance}</h2>
        <button
          onClick={mintTokenZeta}
          disabled={loading}
          className={`flex items-center justify-center px-10 py-2 ${
            loading
              ? 'bg-gray-400'
              : 'bg-gradient-to-r from-[#FF3503] to-yellow-500'
          } font-bold rounded-lg`}
        >
          {loading ? 'Loading...' : 'Get It Now'}
        </button>
      </div>
    </div>
  );
};

const ClaimMint = () => {
  const [select, setSelect] = useState(false);
  const [entryPassData, setEntryPassData] = useState([]);
  const [userCount, setUserCount] = useState(null);

  // const fetchUserCount = async () => {
  //   if (window.ethereum) {
  //     try {
  //       await connectWallet('goerli');
  //       const provider = new ethers.providers.Web3Provider(window.ethereum);
  //       const signer = provider.getSigner();
  //       const address = await signer.getAddress();
  //       const contract = new ethers.Contract(
  //         '0x247314AB4d4a0518962D1e980Fc21C3f757B5631',
  //         arbAbi,
  //         signer
  //       );
  //       const hexCount = await contract.countByUser(address); // assuming countByUser is a view function
  //       const newCount = hexCount.toString();
  //       const count = hexCount.toNumber();
  //       console.log('count', count);
  //       setUserCount(newCount);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // };

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
            Mainnet
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
        <div className="grid md:grid-cols-2 sm:grid-cols-1 w-2/3">
          <div className="grid w-full grid-cols-1 gap-5 ">
            {!select && (
              <>
                {entryPassData.map((entryPass) => {
                  // if (entryPass.chain === 'Shardeum') {
                  //   return (
                  //     <ShardCard
                  //       key={entryPass._id}
                  //       entryPass={entryPass}
                  //       imgSrc='/shardeum.jpg'
                  //     />
                  //   );
                  // } else
                  if (entryPass.chain === 'Zeta') {
                    return (
                      <ZetaCard
                        key={entryPass._id}
                        entryPass={entryPass}
                        imgSrc="/bitGert.jpg"
                      />
                    );
                  }
                  return null;
                })}
              </>
            )}
          </div>
          <div className="w-full bg-orange-500 mb-5 p-5 flex items-center flex-col rounded-3xl mt-5 ">
            <div className="flex flex-col ">
              <h1 className="font-bold text-xl md:text-3xl text-white w-full md:mr-auto">
                Note:
              </h1>
              <br />
              <p className="text-white font-semibold">
                1. Make sure you are in BNB Smart Chain Mainnet and have enough
                BNB in your wallet to complete the transaction.
              </p>
              <br />
              <p className="text-white font-semibold">
                2. First buy BITGERT tokens worth 1$ or more from pancakeswap -{' '}
                <a href="https://pancakeswap.finance/swap?outputCurrency=0x8FFf93E810a2eDaaFc326eDEE51071DA9d398E83">
                  {' '}
                  <span className="text-lg text-black underline font-extrabold">
                    CLICK HERE
                  </span>
                </a>
              </p>
              <br />
              <p className="text-white font-semibold">
                3. Then come to dashboard and buy the entry pass & you will get
                access to the dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimMint;
