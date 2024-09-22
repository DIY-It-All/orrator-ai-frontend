
import Image from "next/image"; 
import ConnectWalletButtonProvider from "./components/ConnectWalletButtonProvider";
export function NavBar() {

  return (
    <div className="p-5 flex flex-wrap flex-col md:flex-row items-center shadow-[0_35px_60px_10px_rgba(255,255,255,0.017)]">
      <a className="flex title-font font-medium items-center mb-4 md:mb-0">
        <Image src="/favicon.ico" width={40} height={40} alt="/logo.png" />
        <span className="px-3 max-sm:hidden">Orator-AI</span>
      </a>
      <div className="md:ml-auto md:mr-4 flex flex-row items-center text-base justify-center max-sm:flex-col">
        <a className="mx-2 my-1">How It Works</a>
        <a className="mx-2 my-1">Pricing</a>
        <a className="mx-2 my-1">Resources</a>
      </div>
      <div className="flex">
        
      <div className="flex gap-4 px-6">
      </div>
        <ConnectWalletButtonProvider/>
      </div>
    </div>
  );
}
