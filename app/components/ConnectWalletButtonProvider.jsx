"use client";
import React from "react";
import { MetaMaskProvider } from "@metamask/sdk-react";
import { ConnectWalletButton } from "./ConnectWalletButton";

export default function ConnectWalletButtonProvider() {
  const host =
    typeof window !== "undefined" ? window.location.host : "defaultHost";

  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "Oracle AI",
      url: host, // using the host constant defined above
    },
  };
  return (
    <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
      <ConnectWalletButton />
    </MetaMaskProvider>
  );
}
