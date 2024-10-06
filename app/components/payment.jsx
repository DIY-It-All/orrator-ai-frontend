'use client';
import { useState } from 'react';
import { ethers } from 'ethers';

export default function PaymentsAPI() {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState('');

  // Function to connect MetaMask
  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send('eth_requestAccounts', []);
        const signer = await provider.getSigner();
        const userAddress = await signer.getAddress();
        setAccount(userAddress);
        setError('');
        await checkBalance(provider, userAddress); 
      } catch (err) {
        console.error('Error connecting wallet:', err);
        setError(err.message);
      }
    } else {
      setError('MetaMask is not installed. Please install it to use this feature.');
    }
  };

  // Function to check balance
  const checkBalance = async (provider, address) => {
    if (provider) {
      try {
        const userBalance = await provider.getBalance(address); 
        setBalance(ethers.formatEther(userBalance)); 
      } catch (err) {
        console.error('Error fetching balance:', err);
        setError(err.message);
      }
    }
  };

  // Function to deduct amount
  const buyPremium = async () => {
    if (!account) {
      setError('Please connect your wallet first!');
      return;
    }

    const amountToDeduct = ethers.parseEther('0.00001'); // Amount in Ether

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

   
      const recipientAddress = '0xF4a4CfC05AC2D927E2c89B8201D80e1515972Ca4'; 

      
      const tx = {
        to: recipientAddress,
        value: amountToDeduct,
      };

      const transactionResponse = await signer.sendTransaction(tx);
      console.log('Transaction Response:', transactionResponse);
      await transactionResponse.wait(); 
      alert('Payment successful!');
      await checkBalance(provider, account); // Update balance after transaction
    } catch (err) {
      console.error('Error sending transaction:', err);
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Wallet Connection Example</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {account ? (
        <>
          <p>Connected Account: {account}</p>
          <p>Balance: {balance ? `${balance} ETH` : 'Fetching balance...'}</p>
          <button onClick={buyPremium}>Buy Premium ($0.5 ETH)</button>
        </>
      ) : (
        <button onClick={connectWallet}>Connect MetaMask</button>
      )}
    </div>
  );
}
