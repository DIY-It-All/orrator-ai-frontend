import { Footer } from "./Footer";
import "./globals.css";
import { NavBarLM } from "./NavBarLM";
import { MetaMaskProvider } from "@metamask/sdk-react"

export const metadata = {
  title: "Orrator-AI",
  description: "Powerup your speaking skills and ace thst upcoming interview with out AI powered speaking coach",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <MetaMaskProvider
      debug={false}
      sdkOptions={{
        dappMetadata: {
          name: "Oracle AI",
          url: window.location.href,
        },
        infuraAPIKey: process.env.INFURA_API_KEY,
        // Other options.
      }}
    >
      <body
      //defult dark theme
        className="bg-gray-900 text-white"
      >
        <NavBarLM />
        {children}
        <Footer />
      </body>
      </MetaMaskProvider>
    </html>
  );
}
