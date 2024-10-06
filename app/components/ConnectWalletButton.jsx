"use client"; 
import Link from "next/link";

import { IoWalletSharp } from "react-icons/io5";

import { Button } from "@/components/ui/button";

import { useSDK, MetaMaskProvider } from "@metamask/sdk-react";
import { formatAddress } from "../libs/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";

export const ConnectWalletButton = () => {
  const { sdk, connected, connecting, account } = useSDK();
  const [currentAccount, setCurrentAccount] = useState(account);
  const [connection_btn_info , setConnectionBtnInfo] = useState("You're not connected to MetaMask");
  const connect = async () => {
    try {
      await sdk?.connect();
      setCurrentAccount(account);
      console.log(account);
    } catch (err) {
      console.warn(`No accounts found`, err);
    }
  };

  const disconnect = () => { 
    try{
      if (sdk) {
        sdk.terminate().then((r)=>{
          console.log(r)
          setCurrentAccount(undefined)
        }).catch((e)=>{
          console.log(e)
        });
      }
    }
    catch(e){
      console.warn(e)
    }
  };  
  function checkConnection() {
    ethereum.request({ method: 'eth_accounts' }).then(handleAccountsChanged).catch(console.error);
  }
  
  function handleAccountsChanged(accounts) {
    console.log(accounts);
    if (accounts.length === 0) {
      setConnectionBtnInfo("You're not connected to MetaMask")
    } else if (accounts[0]) {
      setCurrentAccount(accounts[0]);
      setConnectionBtnInfo(formatAddress(accounts[0])); 
    }
  }
  useEffect(()=> checkConnection,[]);
  return (
    <div className="relative">
      {(currentAccount!== undefined )? (
        <Popover>
          <PopoverTrigger>
            <Button id="connect-btn">{connection_btn_info}</Button>
            <p id="connection-status"></p>
          </PopoverTrigger>
          <PopoverContent className="mt-2 w-44 bg-gray-100 border rounded-md shadow-lg right-0 z-10 top-10">
            <button
              onClick={disconnect}
              className="block w-full pl-2 pr-4 py-2 text-left text-[#F05252] hover:bg-gray-200"
            >
              Disconnect
            </button>
          </PopoverContent>
        </Popover>
      ) : (
        <Button disabled={connecting} onClick={connect}>
          <IoWalletSharp className="mr-2 h-4 w-4" /> Connect Wallet
        </Button>
      )}
    </div>
  );
};