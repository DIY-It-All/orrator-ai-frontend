'use client'
 
import Link from "next/link";

// import WalletIcon from "../public/icons/WalletIcon";

import { Button } from "@/components/ui/button"
import { useSDK } from "@metamask/sdk-react";

// import { formatAddress } from "../lib/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { useEffect,useState } from "react";

export default function ConnectWalletButton () {
  const [account, setAccount] = useState();
  const { sdk, connected, connecting, provider, chainId } = useSDK();

  const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      setAccount(accounts?.[0]);
    } catch (err) {
      console.warn("failed to connect..", err);
    }
  };
  const disconnect = () => {
    if (sdk) {
      sdk.terminate();
    }
  };
  return (
    <div className="relative"> 
      {connected ? (
        <Popover>
          <PopoverTrigger>
            <Button>{account}</Button>
            {/* <Button>{formatAddress(account)}</Button> */}
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
        <button disabled={connecting} onClick={()=>{connect()}}> 
          Connect Wallet
        </button>
      )}
    </div>
  );
};