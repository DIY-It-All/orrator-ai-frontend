"use client";
import { ethers } from "ethers";

// Function to connect MetaMask
export const connectWallet = async () => {
  if (typeof window.ethereum !== "undefined") {
    try {
      const temp_provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const temp_signer = await provider.getSigner();
      const temp_userAddress = await signer.getAddress();
      setError("");
      // await checkBalance(provider, userAddress);
    } catch (err) {
      console.error("Error connecting wallet:", err);
      setError(err.message);
    }
  } else {
    setError(
      "MetaMask is not installed. Please install it to use this feature."
    );
  }
};

// Function to check balance
// const checkBalance = async (provider, address) => {
//   if (provider) {
//     try {
//       const userBalance = await provider.getBalance(address);
//       // setBalance(ethers.formatEther(userBalance));
//     } catch (err) {
//       console.error('Error fetching balance:', err);
//       setError(err.message);
//     }
//   }
// };

export const buyPremium = async (amount = "0.005") => {  
  const amountToDeduct = ethers.parseEther(amount);

  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const recipientAddress = "0x9eD503cE7a27136D2399e7Ea19E1a513ddb4EF24";

    const tx = {
      to: recipientAddress,
      value: amountToDeduct,
    };

    const transactionResponse = await signer.sendTransaction(tx);
    console.log("sent transaction");
    console.log("Transaction Response:", transactionResponse);
    await transactionResponse.wait();
    console.log("transaction complete");
    alert("Payment successful!");
    localStorage.setItem('subscribed', true);
    // await checkBalance(provider, account);
  } catch (err) {
    console.error("Error sending transaction:", err); 
  }
};
